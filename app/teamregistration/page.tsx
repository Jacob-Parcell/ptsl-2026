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
import { phoneSchema, PhoneInput } from "@/components/ui/phone-input"

const formSchema = z.object({
  teamName: z.string(),
  managerName: z.string(),
  email: z.email(),
  phoneNumber: phoneSchema
});

export default function TeamRegistration() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
      managerName: "",
      email: "",
      phoneNumber: "",
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    
    try{

      const res = await fetch("/api/submit-team-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({title: data.teamName, managerName: data.managerName, email:data.email, cellPhone:data.phoneNumber}),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        //throw new Error(body?.error || "Submission failed")
      }

      setIsSubmitted(true)
      toast.success("Registration submitted successfully")

    } catch(error) {
      console.error('Error submitting form:', error);
      toast.error("Submission failed. Please try again.")
    }
  
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Team Registration</CardTitle>
        <CardDescription>
          Sign up your team for the 2026 season!
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="space-y-4">
            <p className="text-lg font-semibold">Registration complete!</p>
            <p>Your team registration was submitted successfully.</p>
          </div>
        ) : (
          <form id="team-registration" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
            <Controller
              name="teamName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="team-registration-teamName">
                    Team Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="team-registration-teamName"
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
              name="managerName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="team-registration-managerName">
                    Manager Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="team-registration-managerName"
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
              name="phoneNumber"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="team-registration-phoneNumber">
                    Phone Number
                  </FieldLabel>
                  <PhoneInput
                    {...field}
                    id="team-registration-phoneNumber"
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
