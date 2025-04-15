import { CheckCircle } from "lucide-react"

export function Benefits() {
  return (
    <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Use StoryBrand?</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Companies that clarify their message using the StoryBrand framework see immediate results.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-start gap-2">
            <div className="rounded-full bg-primary/10 p-2">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Increased Conversions</h3>
            <p className="text-muted-foreground">
              When customers can clearly understand your offer, they're more likely to buy.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="rounded-full bg-primary/10 p-2">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Unified Messaging</h3>
            <p className="text-muted-foreground">
              Create consistency across all marketing channels with a clear, compelling message.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="rounded-full bg-primary/10 p-2">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Simplified Marketing</h3>
            <p className="text-muted-foreground">Stop wasting time and money on marketing that doesn't work.</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="rounded-full bg-primary/10 p-2">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Better Team Alignment</h3>
            <p className="text-muted-foreground">
              Get everyone in your organization on the same page with a clear message.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="rounded-full bg-primary/10 p-2">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Clearer Website Copy</h3>
            <p className="text-muted-foreground">
              Transform your website into a sales tool that actually converts visitors.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="rounded-full bg-primary/10 p-2">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Memorable Brand Story</h3>
            <p className="text-muted-foreground">
              Create a narrative that sticks in customers' minds and differentiates you from competitors.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

