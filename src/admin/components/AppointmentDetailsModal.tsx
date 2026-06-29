type Appointment = {
  id: number;
  name: string;
  phone: string;
  email: string;
  department: string;
  doctor: string;
  appointment_date: string;
  appointment_time: string;
  message: string | null;
  status: string;
  email_sent: boolean;
  sms_sent: boolean;
};

type Props = {
  appointment: Appointment | null;
  onClose: () => void;
  onStatusChange: (id: number, status: string) => void;
};

export default function AppointmentDetailsModal({
  appointment,
  onClose,
  onStatusChange,
}: Props) {
  if (!appointment) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="w-full max-w-2xl rounded-xl bg-white shadow-xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b p-6">
          <div>
            <h2 className="text-2xl font-bold">
              Appointment #{appointment.id}
            </h2>

            <p className="text-slate-500">Patient Details</p>
          </div>

          <button
            onClick={onClose}
            className="text-2xl text-slate-500 hover:text-black"
          >
            ×
          </button>
        </div>

        {/* Body */}

        <div className="space-y-6 p-6">
          <div>
            <h3 className="font-semibold mb-3">Patient Information</h3>

            <div className="grid grid-cols-2 gap-4">
              <Info label="Name" value={appointment.name} />
              <Info label="Phone" value={appointment.phone} />
              <Info label="Email" value={appointment.email} />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Appointment</h3>

            <div className="grid grid-cols-2 gap-4">
              <Info label="Department" value={appointment.department} />

              <Info label="Doctor" value={appointment.doctor} />

              <Info label="Date" value={appointment.appointment_date} />

              <Info label="Time" value={appointment.appointment_time} />

              <Info label="Status" value={appointment.status} />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Message</h3>

            <div className="rounded-lg bg-slate-100 p-3">
              {appointment.message || "No message provided"}
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="flex items-center justify-between border-t p-6">
          <button
            onClick={onClose}
            className="rounded-lg border px-5 py-2 hover:bg-slate-100"
          >
            Close
          </button>

          <div className="flex gap-3">
            <button
              onClick={() => onStatusChange(appointment.id, "Pending")}
              className="rounded-lg bg-yellow-500 px-5 py-2 text-white hover:bg-yellow-600"
            >
              Pending
            </button>

            <button
              onClick={() => onStatusChange(appointment.id, "Confirmed")}
              className="rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700"
            >
              Confirm
            </button>

            <button
              onClick={() => onStatusChange(appointment.id, "Cancelled")}
              className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-slate-500">{label}</p>

      <p className="font-medium">{value}</p>
    </div>
  );
}
