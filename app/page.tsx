import { Hero } from "@/components/hero"
import { Header } from "@/components/header"
import { StoryBrandChat } from "@/components/storybrand-chat"
import { FrameworkSteps } from "@/components/framework-steps"
import { Benefits } from "@/components/benefits"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <FrameworkSteps />
        <Benefits />
        <StoryBrandChat />
      </main>
      <Footer />
    </div>
  )
}

