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

    const { title, managerName, email, cellPhone } = body as any
    if (!title || !managerName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Insert into Wix collection (server-side)
    await (myWixClient as any).items.insert(
      "TeamRegistrationSubmissions",
      { title, managerName, cellPhone, email },
    )

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("/api/submit-registration error:", err)
    return NextResponse.json({ error: "Submission failed" }, { status: 500 })
  }
}
