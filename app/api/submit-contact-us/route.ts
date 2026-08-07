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

    const { title, email, message } = body as any
    if (!title || !message || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Insert into Wix collection (server-side)
    await (myWixClient as any).items.insert(
      "ContactUsSubmissions",
      { title, email, message },
    )

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("/api/submit-contact-us error:", err)
    return NextResponse.json({ error: "Message failed" }, { status: 500 })
  }
}
