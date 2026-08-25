import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

type Props = {
  formList?: any[]
}

export default function Forms({ formList = [] }: Props) {
  
  return(
    <div>
      <h1>Forms</h1>

      {(formList ?? []).map((item: any, index: number) => {
        const isLast = index === formList.length - 1;

        return(
          <div key={item._id ?? index}>
            <div className="flex justify-center">
              <div className="flex-col">
                <h2>{item.title}</h2>
                <div className="flex justify-center">
                  <a target="_blank" href={item.url} rel="noopener noreferrer"><Button><DownloadIcon className="inline"/> Download</Button></a>
                </div>
              </div>
            </div>
            {!isLast && <hr className="solid" />}
          </div>
        );
      })}
    </div>
  );
}