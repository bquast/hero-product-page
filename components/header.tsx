"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">HERO marketing</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#framework" className="text-sm font-medium hover:text-primary">
            Framework
          </Link>
          <Link href="#benefits" className="text-sm font-medium hover:text-primary">
            Benefits
          </Link>
          <Link href="#chat" className="text-sm font-medium hover:text-primary">
            StoryBrand Chat
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ModeToggle />
            <Button asChild>
              <Link href="https://app.hero.marketing">Get Started</Link>
            </Button>
        </div>
      </div>
    </header>
  )
}

