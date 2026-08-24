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
    const body = await req.json()

    // Basic validation
    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
    }

    const { title, author, description, image } = body as any
    if (!title || !author) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Insert into Wix collection (server-side)
    const newPost = await (myWixClient as any).items.insert(
      "LostAndFound",
      { title: title, author: author, description: description, image: image },
    )

    return NextResponse.json({ ok: true , post: newPost})
  } catch (err) {
    console.error("/api/submit-lost-and-found error:", err)
    return NextResponse.json({ error: "Message failed" }, { status: 500 })
  }
}
