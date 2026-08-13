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
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
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
  
  return (
    <div>
        <h2>{teamName}</h2>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Week</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Visitor</TableHead>
                    <TableHead></TableHead>
                    <TableHead>Home</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {filteredByTeam.map((item: any) => (
                    <TableRow key={item._id}>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{formatDate(item.date)}</TableCell>
                        <TableCell className={item.visitorScore > item.homeScore ? "winner" : ""}>{item.visitor?.title}</TableCell>
                        <TableCell className={item.visitorScore > item.homeScore ? "winner" : ""}>{item.visitorScore}</TableCell>
                        <TableCell className={item.homeScore > item.visitorScore ? "winner" : ""}>{item.home?.title}</TableCell>
                        <TableCell className={item.homeScore > item.visitorScore ? "winner" : ""}>{item.homeScore}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  );
}