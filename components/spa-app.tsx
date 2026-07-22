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

const sectionBlurb: Record<SectionKey, string> = {
  home: "This app now runs as a single-page experience using client-side React state.",
  schedule: "See the current schedule section without a full page reload.",
  standings: "Standings are shown in the same shell using React navigation state.",
  results: "Review game results here without route changes.",
  fieldinfo: "Field information is rendered inside the same page.",
  forms: "All forms are available through the same SPA interface.",
  rules: "Rules are displayed with instant state-based navigation.",
  leaguehistory: "League history is shown as part of the single-page shell.",
  teamregistration: "Register your team without leaving the current page.",
  lostandfound: "Lost and found details appear instantly in this SPA.",
  contact: "Contact information is shown inside the same stateful application.",
}

function getSectionContent(
  section: SectionKey,
  teamList: any[],
  masterList: any[]
) {
  const headline = sectionTitles[section]
  const blurb = sectionBlurb[section]

  if (section === "home") {
    return (
      <div className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
            {headline}
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            {blurb}
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Loaded team items: {teamList.length}. Master sheet entries: {masterList.length}.
          </p>
        </div>
        {teamList.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {teamList.map((item) => (
              <div
                key={item._id ?? item.id ?? item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <h2 className="text-lg font-semibold text-slate-900">
                  {item.title ?? item.name ?? "Team item"}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.subtitle ?? item.description ?? "Wix data item"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
        {headline}
      </h1>
      <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{blurb}</p>
      <div className="mt-6 space-y-3 text-sm text-slate-500">
        <p>
          This content is rendered through React state instead of route navigation.
        </p>
        <p>
          Use the buttons above to switch sections instantly inside the same page shell.
        </p>
        {section === "schedule" && (
          <p>There are currently {teamList.length} team records loaded.</p>
        )}
        {section === "standings" && (
          <p>Master sheet data is available with {masterList.length} rows.</p>
        )}
      </div>
    </div>
  )
}

export function SpaApp({
  teamList,
  masterList,
}: {
  teamList: any[]
  masterList: any[]
}) {
  const [activeSection, setActiveSection] = useState<SectionKey>("home")

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="sticky top-0 z-20 border-b border-slate-200 bg-slate-50/95 backdrop-blur">
        <NavBar activeSection={activeSection} onSelect={setActiveSection} />
      </div>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {getSectionContent(activeSection, teamList, masterList)}
      </main>
    </div>
  )
}
