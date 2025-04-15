import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, history } = await request.json()

    if (!email || !history || !Array.isArray(history)) {
      return NextResponse.json({ error: true, message: "Missing email or history" }, { status: 400 })
    }

    // This would normally call your Cloudflare function to send an email
    // For now, we'll simulate the response

    // Format the chat transcript
    const chatTranscript = history
      .map((entry) => {
        const label = entry.role === "user" ? "You" : "StoryBrand Assistant"
        return `${label}: ${entry.content}`
      })
      .join("\n\n")

    // In a real implementation, you would send the email here
    console.log(`Sending email to ${email} with transcript`)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email API error:", error)
    return NextResponse.json({ error: true, message: "Failed to send email" }, { status: 500 })
  }
}

