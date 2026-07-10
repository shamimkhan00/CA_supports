import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            name,
            phone,
            email,
            city,
            service,
            message,
            website,
        } = body;

        if (website) {
            return NextResponse.json({
                success: true,
            });
        }

        if (!name || !phone || !service) {
            return NextResponse.json(
                { error: "Required fields missing" },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "CA Support India <contact@casupportindia.in>",
            to: [
                "contact@casupportindia.in",
                "admin.ca.supports@gmail.com",
            ],
            subject: `New Lead - ${service}`,
            html: `
        <h2>New Contact Request</h2>

        <p><b>Name:</b> ${name}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email || "Not Provided"}</p>
        <p><b>City:</b> ${city || "Not Provided"}</p>
        <p><b>Service:</b> ${service}</p>

        <hr/>

        <p>${message || "No Message"}</p>
      `,
        });

        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Failed" },
            { status: 500 }
        );
    }
}