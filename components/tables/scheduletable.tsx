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
  masterSheet: any
}

export function ScheduleTable({masterSheet}: Props) {
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
  
  return (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead>Week</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Visitor</TableHead>
                <TableHead>Home</TableHead>
                <TableHead>Field</TableHead>
                <TableHead>Field #</TableHead>
                <TableHead>Start Time</TableHead>
                <TableHead>Umpire/s</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {masterSheet.map((item: any) => (
                <TableRow key={item._id}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{formatDate(item.date)}</TableCell>
                    <TableCell>{item.visitor?.title}</TableCell>
                    <TableCell>{item.home?.title}</TableCell>
                    <TableCell>{item.field?.title}</TableCell>
                    <TableCell>{item.fieldNumber}</TableCell>
                    <TableCell>{formatTime(item.startTime)}</TableCell>
                    <TableCell>{Array.isArray(item.umpire) ? item.umpire.map((u: any) => u?.title ?? "").filter(Boolean).join(", ") : item.umpire?.title ?? ""}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
  );
}