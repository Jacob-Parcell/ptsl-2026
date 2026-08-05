import { items } from "@wix/data"
import { createClient, OAuthStrategy } from "@wix/sdk"
import { SpaApp } from "@/components/spa-app"

const myWixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_STUDIO_HEADLESS_CMS_CLIENT_ID!,
  }),
})

const teamList = await myWixClient.items.query("TeamList").find()
const masterSheet = await myWixClient.items.query("MasterSheet").ascending("title", "startTime").include("visitor", "home", "field", "umpire").find();
const siteContents = await myWixClient.items.query("SiteContents").find()

export default function Home() {
  return <SpaApp teamList={teamList.items} masterSheet={masterSheet.items} siteContents={siteContents.items} />
}