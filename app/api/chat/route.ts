import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { history, memory } = await request.json()

    // This would normally call your Cloudflare function
    // For now, we'll simulate the response

    // If this is the first message (empty history or just system message)
    if (!history.length || (history.length === 1 && history[0].role === "system")) {
      return NextResponse.json({
        reply:
          "Welcome to the StoryBrand Framework assistant! I'm here to help you create a compelling marketing narrative for your product or service. Let's start by understanding your business a bit better. What's your company name and what product or service would you like to create a StoryBrand framework for?",
        memory,
      })
    }

    // Extract memory from the conversation
    const updatedMemory = { ...memory }
    const lastUserMessage = history.filter((msg) => msg.role === "user").pop()?.content || ""

    // Simple memory extraction logic (would be more sophisticated in production)
    if (lastUserMessage.includes("company") || lastUserMessage.includes("business")) {
      const companyMatch = lastUserMessage.match(/company is ([^.]+)/i) || lastUserMessage.match(/called ([^.]+)/i)
      if (companyMatch && companyMatch[1]) {
        updatedMemory.company = companyMatch[1].trim()
      }
    }

    if (lastUserMessage.includes("product") || lastUserMessage.includes("service")) {
      const productMatch = lastUserMessage.match(/product is ([^.]+)/i) || lastUserMessage.match(/selling ([^.]+)/i)
      if (productMatch && productMatch[1]) {
        updatedMemory.product = productMatch[1].trim()
      }
    }

    // Simulate a response based on conversation stage
    let reply =
      "I'm analyzing your message and will help you build your StoryBrand framework. Could you tell me more about your target audience?"

    if (updatedMemory.company && !updatedMemory.product) {
      reply = `Thanks for sharing about ${updatedMemory.company}! What specific product or service would you like to create a StoryBrand framework for?`
    } else if (updatedMemory.company && updatedMemory.product && !updatedMemory.audience) {
      reply = `Great! Now let's identify who the hero of your story is - your customer. Who is the target audience for ${updatedMemory.product}?`
    } else if (updatedMemory.company && updatedMemory.product && updatedMemory.audience) {
      reply = `Perfect! Now let's start building your StoryBrand framework for ${updatedMemory.product}.\n\nIn the StoryBrand framework, your customer (${updatedMemory.audience}) is the hero of the story, not your brand. Your brand is the guide that helps them solve a problem.\n\nWhat problem does your ${updatedMemory.product} solve for your customers?`
    }

    return NextResponse.json({
      reply,
      memory: updatedMemory,
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: true, message: "Failed to process request" }, { status: 500 })
  }
}

