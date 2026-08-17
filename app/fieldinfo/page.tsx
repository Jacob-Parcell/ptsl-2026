import RichContentViewer from "@/components/richcontentviewer";

type Props = {
  fieldList: any
}

export default function FieldInfo({fieldList}: Props) {
  return(
    <div>
      <h1>Field Information</h1>

      {fieldList.map((item: any) => {
        if(item.title != fieldList[fieldList.length - 1].title)
        {
          return(
            <div key={item._id}>
              <RichContentViewer content={item.fieldInfo}/>
              <hr className="solid"/>
            </div>
          );
        }
        else{
          return(
            <div key={item._id}>
              <RichContentViewer content={item.fieldInfo}/>
            </div>
          );        
        }
      })}
    </div>
  );
}