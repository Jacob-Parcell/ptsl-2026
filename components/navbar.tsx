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
import { SectionKey } from "./spa-app"

type NavBarProps = {
  activeSection: SectionKey
  setActiveSection?: (s: SectionKey) => void
}

export function NavBar({ activeSection, setActiveSection }: NavBarProps) {
  return (
    <div className="flex mx-5">
      <NavigationMenu className="items-start">
        <NavigationMenuList className="navbar">
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Home</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => setActiveSection?.("home")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Schedule</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => setActiveSection?.("schedule")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Season Standings <br/> and Team Records</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => setActiveSection?.("standings")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Game Results</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => setActiveSection?.("results")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Field Information</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => setActiveSection?.("fieldinfo")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Forms</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => setActiveSection?.("forms")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Rules of the Game</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => setActiveSection?.("rules")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>League History</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => setActiveSection?.("leaguehistory")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Team Registration</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => setActiveSection?.("teamregistration")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Lost and Found</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => setActiveSection?.("lostandfound")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Contact Us</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => setActiveSection?.("contact")}
            />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
