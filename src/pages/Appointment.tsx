import { useEffect, useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { hospitalInfo } from "@/data/hospitalData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { PhoneCall, CalendarCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { supabase } from "@/lib/supabase";

const appointmentSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z
    .string()
    .email("Valid email is required")
    .optional()
    .or(z.literal("")),
  department: z.string().min(1, "Please select a department"),
  doctor: z.string().min(1, "Please select a doctor"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select preferred time"),
  message: z.string().optional(),
});

type Department = {
  id: number;
  name: string;
};

type Doctor = {
  id: number;
  name: string;
  department: string;
};

export default function Appointment() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [departments, setDepartments] = useState<Department[]>([]);
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    loadDepartments();
    loadDoctors();
  }, []);

  async function loadDepartments() {
    const { data, error } = await supabase
      .from("departments")
      .select("id, name")
      .eq("status", "Active")
      .order("name");

    if (!error && data) {
      setDepartments(data);
    }
  }

  async function loadDoctors() {
    const { data, error } = await supabase
      .from("doctors")
      .select("id, name, department")
      .eq("status", "Active")
      .order("name");

    if (!error && data) {
      setDoctors(data);
    }
  }

  const form = useForm<z.infer<typeof appointmentSchema>>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      department: "",
      doctor: "",
      date: "",
      time: "",
      message: "",
    },
  });

  const selectedDepartment = form.watch("department");

  const selectedDepartmentName =
    departments.find((d) => d.id.toString() === selectedDepartment)?.name ?? "";

  const availableDoctors = selectedDepartment
    ? doctors.filter((doctor) => doctor.department === selectedDepartmentName)
    : doctors;

  const onSubmit = async (data: z.infer<typeof appointmentSchema>) => {
    setIsSubmitting(true);

    const departmentName =
      departments.find((dept) => dept.id.toString() === data.department)
        ?.name ?? data.department;

    const doctorName =
      doctors.find((doc) => doc.id.toString() === data.doctor)?.name ??
      data.doctor;

    const timeLabel =
      {
        morning: "Morning (8:00 AM - 12:00 PM)",
        afternoon: "Afternoon (12:00 PM - 4:00 PM)",
        evening: "Evening (4:00 PM - 8:00 PM)",
      }[data.time] ?? data.time;

    const { error } = await supabase.from("appointments").insert([
      {
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        department: departmentName,
        doctor: doctorName,
        appointment_date: data.date,
        appointment_time: timeLabel,
        message: data.message || null,
      },
    ]);

    if (!error && data.email) {
      await supabase.functions.invoke("send-confirmation-email", {
        body: {
          email: data.email,
          name: data.name,
          department: departmentName,
          doctor: doctorName,
          appointment_date: data.date,
          appointment_time: timeLabel,
        },
      });
    }
    setIsSubmitting(false);

    if (error) {
      toast({
        title: "Something went wrong",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    setIsSuccess(true);

    toast({
      title: "Appointment Requested Successfully",
      description:
        "Our team will contact you shortly to confirm your appointment.",
    });

    form.reset();

    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="w-full">
      <PageHeader
        title="Book an Appointment"
        subtitle="Schedule your visit with our expert doctors."
        breadcrumbs={[{ label: "Appointment" }]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl shadow-sm border p-8">
                {isSuccess ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CalendarCheck className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold font-serif mb-4">
                      Request Received!
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-8">
                      Thank you for choosing Shree Balaji Life Line Hospital.
                      Your appointment request has been received successfully.
                      Our front desk will contact you shortly on your registered
                      phone number to confirm your appointment date and time.
                    </p>
                    <Button onClick={() => setIsSuccess(false)}>
                      Book Another Appointment
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold font-serif mb-6">
                      Appointment Details
                    </h2>
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Patient Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number *</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="10-digit mobile number"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="john@example.com"
                                  type="email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="department"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Select Department *</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Choose Department" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {departments.map((dept) => (
                                      <SelectItem
                                        key={dept.id}
                                        value={dept.id.toString()}
                                      >
                                        {dept.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="doctor"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Select Doctor *</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Choose Doctor" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {availableDoctors.map((doc) => (
                                      <SelectItem
                                        key={doc.id}
                                        value={doc.id.toString()}
                                      >
                                        {doc.name} - {doc.department}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Preferred Date *</FormLabel>
                                <FormControl>
                                  <Input
                                    type="date"
                                    min={new Date().toISOString().split("T")[0]}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="time"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Preferred Time *</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Choose Time" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="morning">
                                      Morning (8:00 AM - 12:00 PM)
                                    </SelectItem>
                                    <SelectItem value="afternoon">
                                      Afternoon (12:00 PM - 4:00 PM)
                                    </SelectItem>
                                    <SelectItem value="evening">
                                      Evening (4:00 PM - 8:00 PM)
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                                Symptoms / Message (Optional)
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Briefly describe your symptoms or reason for visit"
                                  className="h-24"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          size="lg"
                          className="w-full text-base"
                          disabled={isSubmitting}
                        >
                          {isSubmitting
                            ? "Submitting..."
                            : "Request Appointment"}
                        </Button>
                      </form>
                    </Form>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-destructive text-destructive-foreground p-6 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <PhoneCall className="w-5 h-5" />
                  Medical Emergency?
                </h3>
                <p className="opacity-90 mb-6">
                  For immediate medical assistance and trauma care, please call
                  our emergency numbers directly. We are open 24/7.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${hospitalInfo.contact.phone.replace(/-/g, "")}`}
                    className="block bg-white text-destructive font-bold text-center py-3 rounded-lg hover:bg-zinc-100 transition-colors"
                  >
                    {hospitalInfo.contact.phone}
                  </a>
                  <a
                    href={`tel:${hospitalInfo.contact.mobile}`}
                    className="block bg-transparent border border-white text-white font-bold text-center py-3 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {hospitalInfo.contact.mobile}
                  </a>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h3 className="text-lg font-bold font-serif mb-4 text-primary">
                  Working Hours
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">Emergency</span>
                    <span className="font-semibold">24×7</span>
                  </li>
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">OPD Timings</span>
                    <span className="font-semibold">8:00 AM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground">Pharmacy</span>
                    <span className="font-semibold">24×7</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span className="text-muted-foreground">Pathology Lab</span>
                    <span className="font-semibold">24×7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
