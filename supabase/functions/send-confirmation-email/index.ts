import { Resend } from "resend";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

if (!RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not set");
}

const resend = new Resend(RESEND_API_KEY);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders,
    });
  }
  try {
    const {
      email,
      name,
      department,
      doctor,
      appointment_date,
      appointment_time,
    } = await req.json();

    const result = await resend.emails.send({
      from: "Shree Balaji Hospital <onboarding@resend.dev>",
      to: [email],
      subject: "Appointment Request Received",
      html: `
  <h2>Appointment Request Received</h2>

  <p>Dear <b>${name}</b>,</p>

  <p>
    Thank you for choosing
    <b>Shree Balaji Life Line Hospital</b>.
  </p>

  <p>Your appointment request has been received.</p>

  <table cellpadding="8" border="1" cellspacing="0">
    <tr>
      <td><b>Department</b></td>
      <td>${department}</td>
    </tr>

    <tr>
      <td><b>Doctor</b></td>
      <td>${doctor}</td>
    </tr>

    <tr>
      <td><b>Date</b></td>
      <td>${appointment_date}</td>
    </tr>

    <tr>
      <td><b>Time</b></td>
      <td>${appointment_time}</td>
    </tr>
  </table>

  <br>

  <p>
    Our front desk will contact you shortly to confirm your appointment.
  </p>

  <br>

  <b>Shree Balaji Life Line Hospital</b>
`,
    });

    if (result.error) {
      console.error("Resend Error:", result.error);

      return new Response(JSON.stringify(result.error), {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
      }),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      },
    );
  } catch (err) {
    console.error("Function Error:", err);

    return new Response(
      JSON.stringify({
        error: String(err),
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      },
    );
  }
});
