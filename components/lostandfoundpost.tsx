import LostAndFoundReply from "./lostandfoundreply";

type Props = {
  initialPost: any
}

export default function LostAndFoundPost({initialPost}: Props) {

    const formatDate = (value: string | Date) => {
        if (!value) return "";

        const dateValue = new Date(value);
        const formattedDate = new Intl.DateTimeFormat("en-US", {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
        }).format(dateValue);

        const formattedTime = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit"
        }).format(dateValue);

        return formattedDate + " at " + formattedTime;
    };

    return(
        <div>
            <div className="lostAndFoundPost">
                <div className="lostAndFoundPost--left">
                    <p className="lostAndFoundImage">image placeholder</p>
                </div>
                <div className="lostAndFoundPost--right">
                    <span className="lostAndFoundReply_details">
                        <h2>{initialPost.title} </h2>
                        <p>&#183; {formatDate(initialPost._createdDate)}</p>
                    </span>
                    <h3 className="italic opacity-85 font-normal">{initialPost.author}</h3>
                    <p>{initialPost.description}</p>
                </div>
            </div>
            <div className="lostAndFoundReplies">
                {initialPost.replies.length > 0 ?  initialPost.replies.map((reply: any) => {
                    return <LostAndFoundReply reply={reply}/>
                }) : <></>}
            </div>
        </div>
    );
}