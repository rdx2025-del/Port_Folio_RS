import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Log the contact submission (in production, you would send this to an email service)
    console.log("Contact form submission:", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    })

    // Placeholder for email integration
    // In production, integrate with services like:
    // - Resend
    // - SendGrid
    // - AWS SES
    // - Nodemailer

    return NextResponse.json(
      { success: true, message: "Message received successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
