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
const masterList = await myWixClient.items.query("MasterSheet").find()

export default function Home() {
  return <SpaApp teamList={teamList.items} masterList={masterList.items} />
}

// export default function Home() {
//   return (
//       <div className='flex left' >
//           <NavBar></NavBar>
//       </div>
//   );
// }
