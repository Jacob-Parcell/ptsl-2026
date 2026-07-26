"use client"

import { useState } from "react"
import { NavBar } from "@/components/navbar"

export type SectionKey =
  | "home"
  | "schedule"
  | "standings"
  | "results"
  | "fieldinfo"
  | "forms"
  | "rules"
  | "leaguehistory"
  | "teamregistration"
  | "lostandfound"
  | "contact"

const sectionTitles: Record<SectionKey, string> = {
  home: "Welcome",
  schedule: "Game Schedule",
  standings: "Season Standings",
  results: "Game Results",
  fieldinfo: "Field Information",
  forms: "Forms",
  rules: "Rules of the Game",
  leaguehistory: "League History",
  teamregistration: "Team Registration",
  lostandfound: "Lost and Found",
  contact: "Contact Us",
}

function getSectionContent(
  section: SectionKey,
  teamList: any[],
  masterSheet: any[]
) {
  const headline = sectionTitles[section]

  switch(section)
  {
    case "home":
      return(<div>test home</div>);

    case "schedule":
      return(<div>test schedule</div>);
      
    case "standings":
      return(<div>test standings</div>);

    case "results":
      return(<div>test results</div>);

    case "fieldinfo":
      return(<div>test fieldinfo</div>);

    case "forms":
      return(<div>test forms</div>);

    case "rules":
      return(<div>test rules</div>);

    case "leaguehistory":
      return(<div>test leaguehistory</div>);

    case "teamregistration":
      return(<div>test teamregistration</div>);

    case "lostandfound":
      return(<div>test lostandfound</div>);

    case "contact":
      return(<div>test contact</div>);

    default:
      return(<div>test default</div>);
  }
}

export function SpaApp({
  teamList,
  masterSheet,
}: {
  teamList: any[]
  masterSheet: any[]
}) {
  const [activeSection, setActiveSection] = useState<SectionKey>("home")

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="flex justify-center">
        <h1 className="text-3xl/30">Welcome to Prime Time Softball League</h1>
      </div>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex align-center">
        <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className="mx-auto">
          {getSectionContent(activeSection, teamList, masterSheet)}
        </div>
      </main>
    </div>
  )
}
