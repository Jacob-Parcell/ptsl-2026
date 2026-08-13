import { StandingsTable } from "@/components/tables/standingstable"
import { TeamResultsTable } from "@/components/tables/teamresultstable"

type Props = {
  masterSheet: any,
  teamList: any
}

export default function Standings({masterSheet, teamList}: Props) {
  return (
    <div>
      <div>
        <h1>Season Standings</h1>
        <StandingsTable masterSheet={masterSheet} teamList={teamList}></StandingsTable>
      </div>

      <div>
        <h1>Team Results</h1>
        {teamList.map((teamName: any) => {
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