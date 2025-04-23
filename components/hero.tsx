import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transform Your Marketing with HERO marketing
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Clarify your message so customers will listen. Create compelling narratives that convert using the
                proven StoryBrand framework.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="gap-1" size="lg">
                <a href="https://app.hero.marketing/">
                Start Building Your Hero <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hoplite2-removebg-preview-cGPZOS71pz1KFekpQ9NvPfHCPV15m0.png"
                alt="Hero Marketing Warrior"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

