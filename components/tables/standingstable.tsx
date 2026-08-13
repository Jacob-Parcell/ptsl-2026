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
  teamList: any
}

export function StandingsTable({masterSheet, teamList}: Props) {

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
  
  let teamRecords: any = [];

  teamList.map((teamName: any) => {
    teamRecords.push({
      _id: teamName._id,
      name: teamName.title, 
      wins: calculateWins(teamName.title), 
      losses: calculateLosses(teamName.title), 
      ties: calculateTies(teamName.title)});
  });

  teamRecords.sort();
  
  return (
    <Table>
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
  );
}