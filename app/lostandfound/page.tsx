import LostAndFoundPost from "@/components/lostandfoundpost";

type Props = {
  lostAndFound: any,
}

export default function LostAndFound({lostAndFound}: Props) {
  
  return (
    <div>
      {lostAndFound.map((item: any) => {
        if(item._id != lostAndFound[lostAndFound.length -1]._id)
        {
          return (
            <div key={item.title}>
              <LostAndFoundPost initialPost={item} key={item._id}/>
              <hr className="solid"/>
            </div>
        )
        }
        else
        {
          return <LostAndFoundPost initialPost={item} key={item._id}/>
        }
      })}
    </div>)

}