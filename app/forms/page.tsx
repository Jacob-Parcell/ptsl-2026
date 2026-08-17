import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

type Props = {
  formList: any
}

export default function Forms({formList}: Props) {
  
  return(
    <div>
      <h1>Forms</h1>

      {formList.map((item: any) => {
        if(item.title != formList[formList.length - 1].title)
        {
          return(
            <div key={item._id}>
              <div className="flex justify-center">
                <div className="flex-col">
                  <h2>{item.title}</h2>
                  <div className="flex justify-center">
                    <a target="_blank" href={item.url} rel="noopener noreferrer"><Button><DownloadIcon className="inline"/> Download</Button></a>
                  </div>
                </div>
              </div>
              <hr className="solid"/>
            </div>
          );
        }
        else{
          return(
            <div key={item._id}>
              <div className="flex justify-center">
                <div className="flex-col">
                  <h2>{item.title}</h2>
                  <div className="flex justify-center">
                    <a target="_blank" href={item.url} rel="noopener noreferrer"><Button><DownloadIcon className="inline"/> Download</Button></a>
                  </div>
                </div>
              </div>
            </div>
          );        
        }
      })}
    </div>
  );
}