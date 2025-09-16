"use client"

import { Mail, Phone, MapPin, Send, ArrowLeft } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(2, "Message must be at least 2 characters"),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactPage() {
  const router = useRouter()
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: FormValues) {
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })

      const data = await res.json()
      if (data.success) {
        toast.success("✅ Message sent successfully!")
        form.reset()
      } else {
        toast.error("❌ Failed to send message.")
      }
    } catch (error) {
      console.error(error)
      toast.error("❌ Something went wrong.")
    }
  }

  return (
    <div className="bg-slate-300 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-2 text-neutral-700 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400"
        >
          <ArrowLeft className="w-5 h-5" /> Back
        </Button>

        <h1 className="text-5xl font-bold text-center mb-12">Get in Touch</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed dark:text-neutral-200">
              I’d love to hear from you! Whether you have a project in mind,
              are interested in collaborating, or just want to say hi,
              feel free to reach out using the form or contact details below.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-600" />
                <span>+63-951-352-0909</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-600" />
                <span>johnlloydglee26@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <span>Lambingan St., Floridablanca, Pampanga</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="bg-white dark:bg-neutral-800 shadow-md rounded-2xl p-8 space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        {...field}
                        className="rounded-xl"
                      />
                    </FormControl>
                    <FormDescription>
                      Enter your full name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@email.com"
                        {...field}
                        className="rounded-xl"
                      />
                    </FormControl>
                    <FormDescription>
                      We’ll use this to get back to you.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder="Write your message..."
                        className="resize-none rounded-xl"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      What would you like to share?
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-xl transition flex justify-center items-center gap-2"
              >
                Send Message <Send className="w-5 h-5" />
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
