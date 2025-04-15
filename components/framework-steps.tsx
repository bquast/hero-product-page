import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, AlertTriangle, UserCheck, Compass, ArrowRight, CheckCircle } from "lucide-react"

export function FrameworkSteps() {
  return (
    <section id="framework" className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The StoryBrand Framework</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Position your customer as the hero and your brand as the guide to create a clear and compelling message.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <Card>
            <CardHeader className="pb-2">
              <User className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>1. A Character</CardTitle>
              <CardDescription>The customer is the hero, not your brand</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Define your customer's identity and what they want. The story begins with a hero who wants something.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <AlertTriangle className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>2. Has a Problem</CardTitle>
              <CardDescription>Companies tend to sell solutions to external problems</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Identify the external, internal, and philosophical problems your customers face that your product
                solves.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <UserCheck className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>3. Meets a Guide</CardTitle>
              <CardDescription>Customers aren't looking for another hero</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Position your brand as the experienced guide who can help them overcome their challenges with empathy
                and authority.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Compass className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>4. Who Gives Them a Plan</CardTitle>
              <CardDescription>Customers trust a guide with a clear plan</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Create a clear, step-by-step plan that helps customers overcome their hesitation and makes the purchase
                feel safe.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <ArrowRight className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>5. Calls Them to Action</CardTitle>
              <CardDescription>Customers won't take action unless challenged</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Challenge your customers to take a direct action that will solve their problem through your product or
                service.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CheckCircle className="h-8 w-8 mb-2 text-primary" />
              <CardTitle>6. That Helps Them Succeed</CardTitle>
              <CardDescription>Show them how your solution transforms them</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Paint a picture of how your customer's life will improve after using your product or service.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

