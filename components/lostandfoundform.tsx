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
  title: z.string(),
  author: z.string(),
  description: z.string(),
  image: z.custom<File | undefined>()
});

type Props = {
  setThreads: React.Dispatch<React.SetStateAction<any[]>>
}

export default function LostAndFoundForm({ setThreads }: Props) {
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        title: "",
        author: "",
        description: "",
        image: undefined
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    
    try{

      const formData = new FormData()
      formData.append("title", data.title)
      formData.append("author", data.author)
      formData.append("description", data.description)
      if (data.image) formData.append("image", data.image)

      const res = await fetch("/api/submit-lost-and-found", {
        method: "POST",
        body: formData,
      })

      const body = await res.json()

      if (!res.ok) {
        throw new Error(body.error ?? "Message submission failed")
      }

      if (!body.post) {
        throw new Error("The API did not return the new post")
      }

      setThreads((previous) => [body.post, ...previous])

      setIsSubmitted(true)
      toast.success("Message submitted successfully")

    } catch(error) {
      console.error('Error submitting form:', error);
      toast.error("Message failed. Please try again.")
    }
  
  }

  return (
    <Card className="w-full sm:max-w-lg align-middle flex justify-self-center">
      <CardHeader>
        <CardTitle>Submit Lost And Found Post</CardTitle>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <div className="space-y-4">
            <p className="text-lg font-semibold">Message Sent!</p>
          </div>
        ) : (
          <form id="lost-and-found" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
            <Controller
              name="author"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="lost-and-found-author">
                    Your Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="lost-and-found-name"
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
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="lost-and-found-title">
                    Lost Item
                  </FieldLabel>
                  <Input
                    {...field}
                    id="lost-and-found-title"
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
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="lost-and-found-description">
                    Item Description (Optional)
                  </FieldLabel>
                  <Input
                    {...field}
                    id="lost-and-found-description"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="image"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="lost-and-found-image">
                    Item Image (Optional)
                  </FieldLabel>
                  <Input
                    id="lost-and-found-image"
                    name={field.name}
                    ref={field.ref}
                    type="file"
                    accept="image/*"
                    aria-invalid={fieldState.invalid}
                    onChange={(event) => field.onChange(event.target.files?.[0])}
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
            <Field orientation="horizontal" className="flex justify-center">
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
