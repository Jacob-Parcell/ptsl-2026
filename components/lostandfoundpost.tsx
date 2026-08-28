import LostAndFoundReply from "./lostandfoundreply";
import {   
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
 } from "./ui/dialog";

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
                    {initialPost.image ? 
                        <Dialog>
                            <DialogTrigger className="lostAndFoundPostImage" nativeButton={false} render={<img
                                        className="lostAndFoundPostImage cursor-zoom-in"
                                        src={initialPost.image}
                                        alt="Prime Time Softball League"/>} />
                            <DialogContent className="w-50%" showCloseButton={false}>
                                <img
                                className="lostAndFoundPostImage"
                                src={initialPost.image}
                                alt="Prime Time Softball League"/>
                            </DialogContent>
                        </Dialog>
                        : <div className="lostAndFoundImagePlaceholder">No Image Provided</div>}
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
                }) : ""}
            </div>
        </div>
    );
}