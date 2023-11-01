import { Resend } from "resend";
import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "...",
    to: "programmingwithmosh@gmail.com",
    subject: "...",
    react: <WelcomeTemplate name="Mosh" />,
  });

  return NextResponse.json({});
}
