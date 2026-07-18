import { NavigationMenu } from '@/components/ui/navigation-menu';
import { NavBar } from '@/components/navbar';
import { items } from '@wix/data';
import { createClient, OAuthStrategy } from "@wix/sdk";

const myWixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_STUDIO_HEADLESS_CMS_CLIENT_ID!
  })
})

const dataItemsList = await myWixClient.items.query("TeamList").find();

// const masterList = await myWixClient.items.query("MasterSheet").find();

const masterList = await myWixClient.items.query("MasterSheet").find();



// export default function Home() {
//   return (
//       <div>
//         <div id="header">
//           <h1>Hello World</h1>
//         </div>
//         <div id="body">
//           <NavBar></NavBar>
//           <div id="content">

//           </div>
//         </div>
//       </div>
//   );
// }

export default function Home() { 
  return (
      <div>
        <div id="header">
          <h1>Hello World</h1>
        </div>
        <div id="body">
          <NavBar></NavBar>
          <div id="content">

          </div>
        </div>
        {dataItemsList.items.map((item: any) => (
          <div key={item._id}>
            <h2>{item.title}</h2>
          </div>
        ))}
      </div>
  );
}

// export default function Home() {
//   return (
//       <div className='flex left' >
//           <NavBar></NavBar>
//       </div>
//   );
// }
