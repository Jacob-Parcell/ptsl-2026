import { NextResponse } from "next/server"
import { items } from "@wix/data"
import { createClient, OAuthStrategy } from "@wix/sdk"

const myWixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_STUDIO_HEADLESS_CMS_CLIENT_ID || "",
  }),
})

export async function POST(req: Request) {
  try {
    const body = await req.formData()

    // Basic validation
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
    }

    const title = body.get("title")
    const author = body.get("author")
    const description = body.get("description")
    const imageFile = body.get("image")

    if (typeof title !== "string" || typeof author !== "string" || !title || !author) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    let image = ""
    if (imageFile instanceof File && imageFile.size > 0) {
      if (!imageFile.type.startsWith("image/")) {
        return NextResponse.json({ error: "Image must be an image file" }, { status: 400 })
      }

      const imageBuffer = Buffer.from(await imageFile.arrayBuffer())
      image = `data:${imageFile.type};base64,${imageBuffer.toString("base64")}`
    }

    // Insert into Wix collection (server-side)
    const newPost = await (myWixClient as any).items.insert(
      "LostAndFound",
      { title, author, description: typeof description === "string" ? description : "", image, resolved: false },
    )

    return NextResponse.json({ ok: true , post: newPost})
  } catch (err) {
    console.error("/api/submit-lost-and-found error:", err)
    return NextResponse.json({ error: "Message failed" }, { status: 500 })
  }
}
