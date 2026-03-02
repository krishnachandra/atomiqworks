import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
// Make sure to add RESEND_API_KEY to your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key');

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, company, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'AtomiqWorks Contact Form <onboarding@resend.dev>', // Use verified domain in production
            to: ['atomiqworks@gmail.com'],
            subject: `New Requirement from ${name}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                    <h2 style="color: #4F46E5; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
                    
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Company:</strong> ${company || 'Not Provided'}</p>
                    
                    <h3 style="color: #333; margin-top: 20px;">Requirement Details:</h3>
                    <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #4F46E5; border-radius: 0 5px 5px 0;">
                        <p style="margin: 0; white-space: pre-wrap;">${message.replace(/\n/g, '<br />')}</p>
                    </div>
                    
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0 20px;" />
                    <p style="font-size: 12px; color: #888; text-align: center;">This email was sent from the AtomiqWorks Website contact form.</p>
                </div>
            `,
            replyTo: email, // This allows you to hit "Reply" and email the user directly
        });

        if (data.error) {
            console.error('Error sending email:', data.error);
            return NextResponse.json(
                { error: 'Failed to send email. Please try again later.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: 'Email sent successfully', data },
            { status: 200 }
        );

    } catch (error) {
        console.error('API Route Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
