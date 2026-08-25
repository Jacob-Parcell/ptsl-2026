import { StandingsTable } from "@/components/tables/standingstable"
import { TeamResultsTable } from "@/components/tables/teamresultstable"

type Props = {
  masterSheet?: any[],
  teamList?: any[]
}

export default function Standings({ masterSheet = [], teamList = [] }: Props) {
  return (
    <div>
      <StandingsTable masterSheet={masterSheet} teamList={teamList}></StandingsTable>
      <div>
        <h1>Team Results</h1>
        {(teamList ?? []).map((teamName: any) => {
          return (
            <div key={teamName.title + " results table"}>
              <TeamResultsTable masterSheet={masterSheet} teamName={teamName.title}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}