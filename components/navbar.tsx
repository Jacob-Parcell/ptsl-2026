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
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { SectionKey } from "./spa-app"
import { Button } from "./ui/button"

type NavBarProps = {
  activeSection: SectionKey
  setActiveSection?: (s: SectionKey) => void
}

export function NavBar({ activeSection, setActiveSection }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const selectSection = (section: SectionKey) => {
    setActiveSection?.(section)
    setIsOpen(false)
  }

  return (
    <div className="navbar-container">
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="navbar-toggle"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X /> : <Menu />}
      </Button>
      <NavigationMenu className={`items-start navbar-menu${isOpen ? " navbar-menu-open" : ""}`}>
        <NavigationMenuList className={`navbar${isOpen ? " navbar-open" : ""}`}>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Home</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => selectSection("home")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Schedule</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => selectSection("schedule")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Season Standings <br/> and Team Records</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => selectSection("standings")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Game Results</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => selectSection("results")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Field Information</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => selectSection("fieldinfo")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Forms</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => selectSection("forms")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Rules of the Game</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => selectSection("rules")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>League History</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => selectSection("leaguehistory")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Team Registration</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => selectSection("teamregistration")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Lost and Found</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => selectSection("lostandfound")}
            />
          </NavigationMenuItem>
          <NavigationMenuItem className="navbar-item">
            <NavigationMenuLink
              render={<p>Contact Us</p>}
              className={navigationMenuTriggerStyle()}
              onClick={() => selectSection("contact")}
            />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
