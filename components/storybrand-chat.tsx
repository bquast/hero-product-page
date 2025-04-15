"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type Message = {
  role: "user" | "assistant"
  content: string
}

type Memory = {
  name?: string
  company?: string
  product?: string
  audience?: string
  email?: string
}

export function StoryBrandChat() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<Message[]>([])
  const [memory, setMemory] = useState<Memory>({})
  const [isLoading, setIsLoading] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  useEffect(() => {
    const savedHistory = localStorage.getItem("hqg-history")
    const savedMemory = localStorage.getItem("hqg-memory")

    if (savedHistory) {
      setHistory(JSON.parse(savedHistory))
    }

    if (savedMemory) {
      setMemory(JSON.parse(savedMemory))
    }

    if (!savedHistory) {
      sendMessage("")
    }
  }, [])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [history])

  const sendMessage = async (message: string) => {
    try {
      setIsLoading(true)

      const newHistory = message ? [...history, { role: "user", content: message }] : [...history]

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ history: newHistory, memory }),
      })

      const data = await response.json()

      if (data.error) {
        throw new Error(data.message || "Failed to get response")
      }

      const updatedHistory = [...newHistory, { role: "assistant", content: data.reply }]

      setHistory(updatedHistory)
      setMemory(data.memory || memory)

      localStorage.setItem("hqg-history", JSON.stringify(updatedHistory))
      localStorage.setItem("hqg-memory", JSON.stringify(data.memory || memory))
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !isLoading) {
      sendMessage(input.trim())
      setInput("")
    }
  }

  const handleEmailTranscript = async () => {
    const email = prompt("Enter your email address:")
    if (!email) return

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, history }),
      })

      const data = await response.json()

      if (data.error) {
        throw new Error(data.message || "Failed to send email")
      }

      toast({
        title: "Success",
        description: "Email sent successfully!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send email. Please try again.",
        variant: "destructive",
      })
      console.error(error)
    }
  }

  return (
    <section id="chat" className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Build Your StoryBrand Framework
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Our AI assistant will guide you through creating a compelling StoryBrand framework for your product.
            </p>
          </div>
        </div>

        <Card className="mx-auto max-w-3xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>StoryBrand Assistant</CardTitle>
            <Button variant="outline" size="sm" onClick={handleEmailTranscript}>
              <Download className="h-4 w-4 mr-2" />
              Email Transcript
            </Button>
          </CardHeader>
          <CardContent>
            <div ref={chatContainerRef} className="h-[400px] overflow-y-auto space-y-4 p-4 rounded-md border">
              {history.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg px-4 py-2 bg-muted">
                    <p>Thinking...</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSubmit} className="flex w-full gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

