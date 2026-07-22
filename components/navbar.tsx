import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import Link from "next/link"

export function NavBar() {
  return (
    <div className="flex left">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              render={<Link href="/">Home</Link>}
              className={navigationMenuTriggerStyle()}
            />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              render={<Link href="/schedule">Game Schedule</Link>}
              className={navigationMenuTriggerStyle()}
            />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              render={<Link href="/standings">Season Standings and Team Records</Link>}
              className={navigationMenuTriggerStyle()}
            />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              render={<Link href="/results">Game Results</Link>}
              className={navigationMenuTriggerStyle()}
            />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              render={<Link href="/fieldinfo">Field Information</Link>}
              className={navigationMenuTriggerStyle()}
            />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              render={<Link href="/forms">Forms</Link>}
              className={navigationMenuTriggerStyle()}
            />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              render={<Link href="/rules">Rules of the Game</Link>}
              className={navigationMenuTriggerStyle()}
            />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              render={<Link href="/leaguehistory">League History</Link>}
              className={navigationMenuTriggerStyle()}
            />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              render={<Link href="/teamregistration">Team Registration</Link>}
              className={navigationMenuTriggerStyle()}
            />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              render={<Link href="/lostandfound">Lost and Found</Link>}
              className={navigationMenuTriggerStyle()}
            />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              render={<Link href="/contact">Contact Us</Link>}
              className={navigationMenuTriggerStyle()}
            />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
