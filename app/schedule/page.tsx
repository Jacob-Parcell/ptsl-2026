import { ScheduleTable } from "@/components/tables/scheduletable";
import { items } from '@wix/data';
import { createClient, OAuthStrategy } from "@wix/sdk";


const myWixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_STUDIO_HEADLESS_CMS_CLIENT_ID!
  })
})

const dataItemsList = await myWixClient.items.query("TeamList").find();

const masterList = await myWixClient.items.query("MasterSheet").ascending("title", "startTime").include("visitor", "home", "field", "umpire").find();


export default function Schedule() {
  return (
    <div>
    <h1>Schedule</h1>
    <ScheduleTable masterList={masterList}></ScheduleTable>
    </div>
  )
}