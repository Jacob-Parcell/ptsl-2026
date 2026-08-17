"use client"

import { useEffect, useState } from "react"
import { items } from "@wix/data"
import { createClient, OAuthStrategy, media } from "@wix/sdk"
import { NavBar } from "@/components/navbar"
import RichContentViewer from "@/components/richcontentviewer"

import Schedule from "@/app/schedule/page"
import Results from "@/app/results/page"
import TeamRegistration from "@/app/teamregistration/page"
import Contact from "@/app/contact/page"
import Standings from "@/app/standings/page"
import Forms from "@/app/forms/page"
import FieldInfo from "@/app/fieldinfo/page"

const myWixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_STUDIO_HEADLESS_CMS_CLIENT_ID!,
  }),
})

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

async function fetchWixData() {
  const [teamList, masterSheet, siteContents, fieldList, formList] = await Promise.all([
    myWixClient.items.query("TeamList").find(),
    myWixClient.items
      .query("MasterSheet")
      .ascending("title", "startTime")
      .include("visitor", "home", "field", "umpire")
      .find(),
    myWixClient.items.query("SiteContents").find(),
    myWixClient.items.query("FieldList").find(),
    myWixClient.items.query("Forms").find(),
  ])

  return {
    teamList: teamList.items,
    masterSheet: masterSheet.items,
    siteContents: siteContents.items,
    fieldList: fieldList.items,
    formList: formList.items
  }
}

function getSectionContent(
  section: SectionKey,
  teamList: any[],
  masterSheet: any[],
  siteContents: any[],
  fieldList: any[],
  formList: any[]
) {
  const headline = sectionTitles[section]

  const announcementsContent = siteContents.find((item) => item.title === "Announcements")
  const rulesContent = siteContents.find((item) => item.title === "Rules of the Game")
  const leagueHistoryContent = siteContents.find((item) => item.title === "League History")

  let formLinks: any = [];

  formList.map((form: any) => {
    formLinks.push({
      _id: form._id,
      title: form.title,
      url: media.getDocumentUrl(form.formFile).url
    })
  })

  switch (section) {
    case "home":
      return (
        <div className="w-full min-w-60">
          <RichContentViewer content={announcementsContent?.content} />
        </div>
      )

    case "schedule":
      return (
        <div className="w-full min-w-60">
          <Schedule masterSheet={masterSheet} />
        </div>
      )

    case "standings":
      return (
        <div className="w-full min-w-60">
          <Standings masterSheet={masterSheet} teamList={teamList} />
        </div>
      )
    case "results":
      return (
        <div className="w-full min-w-60">
          <Results masterSheet={masterSheet} />
        </div>
      )
    case "fieldinfo":
      return (
      <div className="w-full min-w-60">
          <FieldInfo fieldList={fieldList} />
      </div>
      );
    case "forms":
      return (
        <div className="w-full min-w-60">
          <Forms formList={formLinks} />
        </div>
      )
    case "rules":
      return (
        <div className="w-full min-w-60">
          <RichContentViewer content={rulesContent?.content} />
        </div>
      )
    case "leaguehistory":
      return (
        <div className="w-full min-w-60">
          <RichContentViewer content={leagueHistoryContent?.content} />
        </div>
      )
    case "teamregistration":
      return (
        <div className="w-full min-w-60 flex justify-center">
          <TeamRegistration />
        </div>
      )

    case "lostandfound":
      return <div>test lostandfound</div>

    case "contact":
      return (
        <div className="w-full min-w-60 flex justify-center">
          <Contact />
        </div>
      )
    default:
      return <div>test default</div>
  }
}

export function SpaApp() {
  const [activeSection, setActiveSection] = useState<SectionKey>("home")
  const [teamList, setTeamList] = useState<any[]>([])
  const [masterSheet, setMasterSheet] = useState<any[]>([])
  const [fieldList, setFieldList] = useState<any[]>([])
  const [formList, setFormList] = useState<any[]>([])
  const [siteContents, setSiteContents] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let ignore = false

    async function load() {
      setIsLoading(true)

      try {
        const data = await fetchWixData()

        if (!ignore) {
          setTeamList(data.teamList)
          setMasterSheet(data.masterSheet)
          setSiteContents(data.siteContents)
          setFieldList(data.fieldList)
          setFormList(data.formList)
        }
      } finally {
        if (!ignore) {
          setIsLoading(false)
        }
      }
    }

    load()

    return () => {
      ignore = true
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex justify-center">
        <h1 className="site-title">
          Welcome to <br /> Prime Time Softball League
        </h1>
      </div>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex justify-center">
        <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className="mx-auto w-full px-10 flex justify-center">
          {isLoading ? <div>Loading...</div> : getSectionContent(activeSection, teamList, masterSheet, siteContents, fieldList, formList)}
        </div>
      </main>
    </div>
  )
}
