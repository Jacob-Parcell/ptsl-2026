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
  masterSheet: any,
  teamName: string
}

export function TeamResultsTable({masterSheet, teamName}: Props) {
  const formatDate = (value: string | Date) => {
    if (!value) return "";
    const date = new Date(value);
    return new Intl.DateTimeFormat("en-US", {
      month: "numeric",
      day: "numeric",
      year: "2-digit",
    }).format(date);
  };

  const formatTime = (value: string) => {
    if (!value) return "";
    const [hours, minutes] = value.split(":");
    const date = new Date();
    date.setHours(Number(hours), Number(minutes), 0, 0);

    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }).format(date);
  };

  let filteredByTeam = masterSheet.filter((game: any) => {
    if(game.home.title == teamName || game.visitor.title == teamName)
    {
        return game;
    }
  });

  const isHomeTeam = (currentTeam: string, game: any) => {
    if(currentTeam == game.home.title)
    {
      return true;
    }
    else
    {
      return false;
    }
  };

  const isWinner = (currentTeam: string, game: any) => {
    if((isHomeTeam(currentTeam, game) && game.homeScore > game.visitorScore) ||
       (!isHomeTeam(currentTeam, game) && game.homeScore < game.visitorScore))
    {
      return true;
    }
    else
    {
      return false;
    }
  };  

  const isTie = (game: any) => {
    if(game.homeScore == game.visitorScore)
    {
      return true;
    }
    else
    {
      return false;
    }
  };

  return (
    <section className="ptsl-results-card" aria-labelledby="ptsl-game-results-title">
      <header className="ptsl-results-card__header">
        <div className="ptsl-results-card__logo-badge">
          <img
            className="ptsl-results-card__logo"
            src="/ptsl-monogram.png"
            alt="Prime Time Softball League"
          />
        </div>

        <img
          className="ptsl-results-card__stitches ptsl-results-card__stitches--left"
          src="/softball-stitches.svg"
          alt=""
          aria-hidden="true"
        />

        <h1 className="ptsl-results-card__title" id="ptsl-game-results-title">{teamName}</h1>

        <img
          className="ptsl-results-card__stitches ptsl-results-card__stitches--right"
          src="/softball-stitches.svg"
          alt=""
          aria-hidden="true"
        />
      </header>

      <div className="ptsl-results-card__table-wrap" role="region" aria-label="Game results table">
        <Table className="ptsl-results-card__table">
          <caption>Prime Time Softball League game results and current team record</caption>
          <TableHeader>
            <TableRow>
                <TableHead>Week</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Opponent</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Result</TableHead>
                <TableHead>Record</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredByTeam.map((item: any) => (
                <TableRow key={item._id}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{formatDate(item.date)}</TableCell>
                    <TableCell className="ptsl-results-card__opponent"><span className="ptsl-results-card__venue">{isHomeTeam(teamName, item) ? "vs" : "@"}</span> {isHomeTeam(teamName, item) ? item.visitor.title : item.home.title}</TableCell>
                    <TableCell><span className="ptsl-results-card__score"><span>{isHomeTeam(teamName, item) ? item.homeScore : item.visitorScore}</span><span className="ptsl-results-card__score-separator">&ndash;</span><span>{isHomeTeam(teamName, item) ? item.visitorScore : item.homeScore}</span></span></TableCell>
                    {isTie(item) ? <TableCell><abbr className="ptsl-results-card__result" title="Tie">T</abbr></TableCell>
                    
                    : <TableCell><abbr className={isWinner(teamName, item) ? "ptsl-results-card__result ptsl-results-card__result--win" : "ptsl-results-card__result"} title={isWinner(teamName, item) ? "Win" : "Loss"}>{isWinner(teamName, item) ? "W" : "L"}</abbr></TableCell>}
                    
                    <TableCell>SEASON RECORD</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}