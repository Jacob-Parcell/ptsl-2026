import { ScheduleTable } from "@/components/tables/scheduletable";

type Props = {
  masterSheet: any
}

export default function Schedule({masterSheet}: Props) {
  return (
    <div>
      <ScheduleTable masterSheet={masterSheet}></ScheduleTable>
    </div>
  )
}