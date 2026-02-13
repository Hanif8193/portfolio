import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    console.log('API Key present:', !!process.env.RESEND_API_KEY);
    console.log('Sending email from:', name, email);

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['hanifdostmuhammad8193@gmail.com'],
      replyTo: email,
      subject: `Message from ${name}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: error.message }, { status: 400 });
    }

    console.log('Email sent successfully:', data);
    return Response.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error('Unexpected error:', message);
    return Response.json({ error: message }, { status: 500 });
  }
}
