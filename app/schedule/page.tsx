import { ScheduleTable } from "@/components/tables/scheduletable";

type Props = {
  masterSheet: any
}

export default function Schedule({masterSheet}: Props) {
  return (
    <div>
    <h1>Schedule</h1>
    <ScheduleTable masterSheet={masterSheet}></ScheduleTable>
    </div>
  )
}