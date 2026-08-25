import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type Props = {
  masterSheet?: any[],
  teamList?: any[]
}

export function StandingsTable({ masterSheet = [], teamList = [] }: Props) {

  const calculateWins = (teamName: any) => {
    return masterSheet.filter((game: any) => {
      return (game.home.title == teamName && game.homeScore > game.visitorScore) ||
             (game.visitor.title == teamName && game.visitorScore > game.homeScore)
    }).length
  }

  const calculateLosses = (teamName: any) => {
    return masterSheet.filter((game: any) => {
      return (game.home.title == teamName && game.homeScore < game.visitorScore) ||
             (game.visitor.title == teamName && game.visitorScore < game.homeScore)
    }).length
  }

  const calculateTies = (teamName: any) => {
    return masterSheet.filter((game: any) => {
      return (game.home.title == teamName && game.homeScore == game.visitorScore) ||
             (game.visitor.title == teamName && game.visitorScore == game.homeScore)
    }).length
  }
  
  if (!teamList.length) {
    return (
      <section className="ptsl-results-card" aria-labelledby="ptsl-game-results-title">
        <header className="ptsl-results-card__header">
          <div className="ptsl-results-card__logo-badge">
            <img className="ptsl-results-card__logo" src="./ptsl-monogram.png" alt="Prime Time Softball League" />
          </div>
          <img className="ptsl-results-card__stitches ptsl-results-card__stitches--left" src="./softball-stitches.svg" alt="" aria-hidden="true" />
          <h1 className="ptsl-results-card__title" id="ptsl-game-results-title">Season Standings</h1>
          <img className="ptsl-results-card__stitches ptsl-results-card__stitches--right" src="./softball-stitches.svg" alt="" aria-hidden="true" />
        </header>
        <div className="ptsl-results-card__table-wrap">
          <p className="p-4 text-slate-500">Standings will appear once team data is available.</p>
        </div>
      </section>
    );
  }

  let teamRecords: any = [];

  teamList.map((teamName: any) => {
    teamRecords.push({
      _id: teamName._id,
      name: teamName.title, 
      wins: calculateWins(teamName.title), 
      losses: calculateLosses(teamName.title), 
      ties: calculateTies(teamName.title)});
  });

  teamRecords.sort((teamA: any, teamB: any) => {
    if(teamA.wins != teamB.wins)
    {
      return teamB.wins - teamA.wins;
    }
    else if(teamB.ties != teamA.ties)
    {
      return teamB.ties - teamA.ties;
    }
    else if(teamB.losses != teamA.losses)
    {
      return teamA.losses - teamB.losses;
    }
    else
    {
      //figure out which team most recently beat the other
      masterSheet.reverse().map((game: any) =>
      {
        if(game.home.title == teamA.name && game.visitor.title == teamB.name 
           && game.homeScore != game.visitorScore)
        {
          //team A is home team, team B is visitor
          return game.homeScore - game.visitorScore;
        }
        else if(game.visitor.title == teamA.name && game.home.title == teamB.name 
                && game.homeScore != game.visitorScore)
        {
          //team B is home team, team A is visitor
          return game.visitorScore - game.homeScore;
        }
      });

      //no games against each other, should be impossible but returning something just in case
      return 0;
    }
  });

  return (
    <section className="ptsl-results-card" aria-labelledby="ptsl-game-results-title">
      <header className="ptsl-results-card__header">
        <div className="ptsl-results-card__logo-badge">
          <img
            className="ptsl-results-card__logo"
            src="./ptsl-monogram.png"
            alt="Prime Time Softball League"
          />
        </div>

        <img
          className="ptsl-results-card__stitches ptsl-results-card__stitches--left"
          src="./softball-stitches.svg"
          alt=""
          aria-hidden="true"
        />

        <h1 className="ptsl-results-card__title" id="ptsl-game-results-title">Season Standings</h1>

        <img
          className="ptsl-results-card__stitches ptsl-results-card__stitches--right"
          src="./softball-stitches.svg"
          alt=""
          aria-hidden="true"
        />
      </header>

      <div className="ptsl-results-card__table-wrap" role="region" aria-label="Season Standings table">
        <Table className="ptsl-results-card__table">
          <caption>Prime Time Softball League Season Standings</caption>
          <colgroup>
            <col style={{ width: "40%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "20%" }} />
          </colgroup>
          <TableHeader>
            <TableRow>
                <TableHead>Team</TableHead>
                <TableHead>Wins</TableHead>
                <TableHead>Losses</TableHead>
                <TableHead>Ties</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
              {teamRecords.map((item: any) => (
                  <TableRow key={item._id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.wins}</TableCell>
                      <TableCell>{item.losses}</TableCell>
                      <TableCell>{item.ties}</TableCell>
                  </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}