import RichContentViewer from "@/components/richcontentviewer";

type Props = {
  fieldList?: any[]
}

export default function FieldInfo({ fieldList = [] }: Props) {
  return(
    <div>
      <h1>Field Information</h1>

      {(fieldList ?? []).map((item: any, index: number) => {
        const isLast = index === fieldList.length - 1;

        return (
          <div key={item._id ?? index}>
            <RichContentViewer content={item.fieldInfo} />
            {!isLast && <hr className="solid" />}
          </div>
        );
      })}
    </div>
  );
}