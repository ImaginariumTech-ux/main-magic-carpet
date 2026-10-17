import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not set in environment variables.");
      return NextResponse.json(
        {
          error:
            "Resend API key is not configured. Please add RESEND_API_KEY to your .env.local file.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await request.json();
    const { name, company, email, projectType, description, timeline } = body;

    // Validate required fields
    if (!name || !email || !description) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, and Description)." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "business@magiccarpet.studio";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Magic Carpet Studios <onboarding@resend.dev>";

    // Build formatted HTML email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f5f7; margin: 0; padding: 24px; color: #1a1a1a; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e5e7eb; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
            .header { background: #0E121B; padding: 32px 36px; color: #ffffff; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.02em; }
            .header p { margin: 6px 0 0; font-size: 13px; color: #94a3b8; }
            .content { padding: 32px 36px; }
            .field-group { margin-bottom: 20px; }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: #64748b; font-weight: 700; margin-bottom: 4px; }
            .value { font-size: 15px; color: #0f172a; line-height: 1.5; font-weight: 500; }
            .message-box { background: #f8fafc; border-left: 4px solid #062a82; border-radius: 6px; padding: 16px; margin-top: 8px; white-space: pre-wrap; font-size: 14px; color: #1e293b; line-height: 1.6; }
            .footer { padding: 20px 36px; background: #f8fafc; border-top: 1px solid #e5e7eb; font-size: 12px; color: #64748b; text-align: center; }
            .reply-hint { display: inline-block; margin-top: 12px; padding: 8px 16px; background: #062a82; color: #ffffff; text-decoration: none; border-radius: 9999px; font-size: 12px; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Work Inquiry Received</h1>
              <p>Magic Carpet Studios Website Form Submission</p>
            </div>
            <div class="content">
              <div class="field-group">
                <div class="label">Client Name</div>
                <div class="value">${escapeHtml(name)}</div>
              </div>

              <div class="field-group">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${escapeHtml(email)}" style="color: #062a82; text-decoration: none;">${escapeHtml(email)}</a></div>
              </div>

              <div class="field-group">
                <div class="label">Company / Organization</div>
                <div class="value">${company ? escapeHtml(company) : "<em>Not provided</em>"}</div>
              </div>

              <div class="field-group">
                <div class="label">Project Type</div>
                <div class="value">${projectType ? escapeHtml(projectType) : "Not specified"}</div>
              </div>

              <div class="field-group">
                <div class="label">Timeline</div>
                <div class="value">${timeline ? escapeHtml(timeline) : "<em>Not specified</em>"}</div>
              </div>

              <div class="field-group">
                <div class="label">Project Details & Vision</div>
                <div class="message-box">${escapeHtml(description)}</div>
              </div>

              <div style="text-align: center; margin-top: 24px;">
                <a href="mailto:${escapeHtml(email)}?subject=Re: Magic Carpet Studios Project Inquiry" class="reply-hint">
                  Reply Directly to ${escapeHtml(name)}
                </a>
              </div>
            </div>
            <div class="footer">
              This email was automatically generated from the "Work With Us" inquiry form on magiccarpet.studio.
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [receiverEmail],
      replyTo: email,
      subject: `New Project Inquiry: ${projectType || "Animation"} from ${name}`,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email via Resend." },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: unknown) {
    console.error("Error processing contact form submission:", err);
    const message = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

// Simple HTML escaping to prevent injection in the email template
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
