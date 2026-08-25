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
  masterSheet?: any[]
}

export function ResultsTable({ masterSheet = [] }: Props) {
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

  if (!masterSheet.length) {
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
          <img className="ptsl-results-card__stitches ptsl-results-card__stitches--left" src="/softball-stitches.svg" alt="" aria-hidden="true" />
          <h1 className="ptsl-results-card__title" id="ptsl-game-results-title">Game Results</h1>
          <img className="ptsl-results-card__stitches ptsl-results-card__stitches--right" src="/softball-stitches.svg" alt="" aria-hidden="true" />
        </header>
        <div className="ptsl-results-card__table-wrap">
          <p className="p-4 text-slate-500">No game results available yet.</p>
        </div>
      </section>
    );
  }

  let tableWithGaps = [];
  tableWithGaps.push(masterSheet[0]);

  for(let i = 1; i < masterSheet.length; i++)
  {
      if(masterSheet[i - 1].title == masterSheet[i].title)
      {
        tableWithGaps.push(masterSheet[i]);
      }
      else
      {
        const gap = {
          _id: "gap before " + masterSheet[i]._id,
          title: "",
          date: "",
          visitor: {title: ""},
          home: {title: ""},
          visitorScore: "",
          homeScore: ""
        };

        tableWithGaps.push(gap);
        tableWithGaps.push(masterSheet[i]);
      }
  }

  const isWinner = (currentTeam: string, game: any) => {
    if((currentTeam == game.home.title && game.homeScore > game.visitorScore) ||
       (currentTeam == game.visitor.title && game.homeScore < game.visitorScore))
    {
      return true;
    }
    else
    {
      return false;
    }
  };  
  
  // return (
  //   <Table>
  //       <TableHeader>
  //           <TableRow>
  //               <TableHead>Week</TableHead>
  //               <TableHead>Date</TableHead>
  //               <TableHead>Visitor</TableHead>
  //               <TableHead></TableHead>
  //               <TableHead>Home</TableHead>
  //               <TableHead></TableHead>
  //           </TableRow>
  //       </TableHeader>
  //       <TableBody>
  //           {tableWithGaps.map((item: any) => (
  //               <TableRow key={item._id}>
  //                   <TableCell>{item.title}</TableCell>
  //                   <TableCell>{formatDate(item.date)}</TableCell>
  //                   <TableCell className={item.visitorScore > item.homeScore ? "winner" : ""}>{item.visitor?.title}</TableCell>
  //                   <TableCell className={item.visitorScore > item.homeScore ? "winner" : ""}>{item.visitorScore}</TableCell>
  //                   <TableCell className={item.homeScore > item.visitorScore ? "winner" : ""}>{item.home?.title}</TableCell>
  //                   <TableCell className={item.homeScore > item.visitorScore ? "winner" : ""}>{item.homeScore}</TableCell>
  //               </TableRow>
  //           ))}
  //       </TableBody>
  //   </Table>
  // );

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

        <h1 className="ptsl-results-card__title" id="ptsl-game-results-title">Game Results</h1>

        <img
          className="ptsl-results-card__stitches ptsl-results-card__stitches--right"
          src="/softball-stitches.svg"
          alt=""
          aria-hidden="true"
        />
      </header>

      <div className="ptsl-results-card__table-wrap" role="region" aria-label="Season Standings table">
        <Table className="ptsl-results-card__table">
          <caption>Prime Time Softball League Season Standings</caption>
          <TableHeader>
            <TableRow>
                <TableHead>Week</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Visitor</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Home</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
              {tableWithGaps.map((item: any) => (
                  <TableRow key={item._id}>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{formatDate(item.date)}</TableCell>
                      <TableCell>{item.visitor?.title}</TableCell>
                      <TableCell><span className=""><span className={isWinner(item.visitor?.title, item) ? "ptsl-results-card__result ptsl-results-card__result--win" : ""}>{item.visitorScore}</span><span className="ptsl-results-card__score-separator"> &ndash; </span><span className={isWinner(item.home?.title, item) ? "ptsl-results-card__result ptsl-results-card__result--win" : ""}>{item.homeScore}</span></span></TableCell>
                      <TableCell>{item.home?.title}</TableCell>
                  </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}