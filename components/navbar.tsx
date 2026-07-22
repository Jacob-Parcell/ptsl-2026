import { cn } from "@/lib/utils"

const navItems = [
  { key: "home", label: "Home" },
  { key: "schedule", label: "Game Schedule" },
  { key: "standings", label: "Season Standings" },
  { key: "results", label: "Game Results" },
  { key: "fieldinfo", label: "Field Information" },
  { key: "forms", label: "Forms" },
  { key: "rules", label: "Rules of the Game" },
  { key: "leaguehistory", label: "League History" },
  { key: "teamregistration", label: "Team Registration" },
  { key: "lostandfound", label: "Lost and Found" },
  { key: "contact", label: "Contact Us" },
] as const

type SectionKey = (typeof navItems)[number]["key"]

interface NavBarProps {
  activeSection: SectionKey
  onSelect: (section: SectionKey) => void
}

export function NavBar({ activeSection, onSelect }: NavBarProps) {
  return (
    <nav className="flex flex-wrap gap-2 px-4 py-4 sm:px-6 lg:px-8">
      {navItems.map((item) => {
        const isActive = item.key === activeSection
        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onSelect(item.key)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-slate-400",
              isActive
                ? "bg-slate-950 text-white shadow-sm"
                : "bg-white text-slate-700 hover:bg-slate-100"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </button>
        )
      })}
    </nav>
  )
}
