"use client"

import { useState } from "react"
import { NavBar } from "@/components/navbar"
import RichContentViewer from "@/components/richcontentviewer"

import Schedule from "@/app/schedule/page"
import Results from "@/app/results/page"
import TeamRegistration from "@/app/teamregistration/page"
import Contact from "@/app/contact/page"


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
  masterSheet: any[],
  siteContents: any[]
) {
  const headline = sectionTitles[section]

  let announcementsContent = siteContents.find(item => item.title == "Announcements");
  let fieldInfoContent = siteContents.find(item => item.title == "Field Info");
  let formsContent = siteContents.find(item => item.title == "Forms");
  let rulesContent = siteContents.find(item => item.title == "Rules of the Game");
  let leagueHistoryContent = siteContents.find(item => item.title == "League History");

  switch(section)
  {
    case "home":
      return(
      <div className="w-full min-w-60">
        <RichContentViewer content={announcementsContent.content}/>
      </div>
      );

    case "schedule":
      return(<div className="w-full min-w-60">
        <Schedule masterSheet={masterSheet}/>
        </div>);
      
    case "standings":
      return(<div>test standings</div>);

    case "results":
      return(<div className="w-full min-w-60">
        <Results masterSheet={masterSheet}/>
        </div>);
    /*case "fieldinfo":
      return(
      <div className="w-full min-w-60">
        <RichContentViewer content={fieldInfoContent.content}/>
      </div>
      );*/
    case "forms":
      return(<div>test forms</div>);

    case "rules":
      return(
      <div className="w-full min-w-60">
        <RichContentViewer content={rulesContent.content}/>
      </div>
      );
    case "leaguehistory":
      return(
      <div className="w-full min-w-60">
        <RichContentViewer content={leagueHistoryContent.content}/>
      </div>
      );
    case "teamregistration":
      return (<div className="w-full min-w-60 flex justify-center">
        <TeamRegistration />
      </div>);

    case "lostandfound":
      return(<div>test lostandfound</div>);

    case "contact":
      return (<div className="w-full min-w-60 flex justify-center">
        <Contact />
      </div>);
    default:
      return(<div>test default</div>);
  }
}

export function SpaApp({
  teamList,
  masterSheet,
  siteContents,
}: {
  teamList: any[]
  masterSheet: any[]
  siteContents: any[]
}) {
  const [activeSection, setActiveSection] = useState<SectionKey>("home")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex justify-center">
        <h1 className="site-title">Welcome to <br/> Prime Time Softball League</h1>
      </div>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex justify-center">
        <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className="mx-auto w-full px-10 flex justify-center">
          {getSectionContent(activeSection, teamList, masterSheet, siteContents)}
        </div>
      </main>
    </div>
  )
}
