import { ResultsTable } from "@/components/tables/resultstable";

type Props = {
  masterSheet: any
}

export default function Results({masterSheet}: Props) {
  return (
    <div>
    <h1>Results</h1>
    <ResultsTable masterSheet={masterSheet}/>
    </div>
  )
}