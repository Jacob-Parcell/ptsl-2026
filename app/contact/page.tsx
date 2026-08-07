"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

const formSchema = z.object({
  name: z.string(),
  email: z.email(),
  message: z.string()
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    
    try{

      const res = await fetch("/api/submit-contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({title: data.name, email:data.email, message:data.message}),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
      }

      setIsSubmitted(true)
      toast.success("Message submitted successfully")

    } catch(error) {
      console.error('Error submitting form:', error);
      toast.error("Message failed. Please try again.")
    }
  
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="space-y-4">
            <p className="text-lg font-semibold">Message Sent!</p>
          </div>
        ) : (
          <form id="team-registration" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="team-registration-name">
                    Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="team-registration-name"
                    aria-invalid={fieldState.invalid}
                    required
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="team-registration-email">
                    Email
                  </FieldLabel>
                  <Input
                    {...field}
                    id="team-registration-email"
                    aria-invalid={fieldState.invalid}
                    required
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="team-registration-message">
                    Message
                  </FieldLabel>
                  <Input
                    {...field}
                    id="team-registration-message"
                    aria-invalid={fieldState.invalid}
                    required
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <CardFooter>
            <Field orientation="horizontal">
              <Button type="button" variant="outline" onClick={() => form.reset()}>
                Reset
              </Button>
              <Button type="submit">
                Submit
              </Button>
            </Field>
          </CardFooter>
        </form>
      )}
      </CardContent>
    </Card>
  )
}
