import { ResultsTable } from "@/components/tables/resultstable";

type Props = {
  masterSheet: any
}

export default function Results({masterSheet}: Props) {
  return (
    <ResultsTable masterSheet={masterSheet}/>
  )
}