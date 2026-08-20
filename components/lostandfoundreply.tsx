
type Props = {
  reply: any
}

export default function LostAndFoundReply({reply}: Props) {

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
        <div className="lostAndFoundWrapper" key={reply._id}>
            <div className="lostAndFoundReply">
                <div className="lostAndFoundReply--left">
                    <img
                        className="lostAndFoundReply_image"
                        src="/ptsl-monogram.png"
                        alt="Prime Time Softball League"
                    />
                </div>
                <div className="lostAndFoundReply--right">
                    <span className="lostAndFoundReply_details">
                        <h3 className="italic opacity-85 font-normal">{reply.author} &#183; </h3>
                        <p>{formatDate(reply._createdDate)}</p>
                    </span>
                    <p>{reply.message}</p>
                </div>
            </div>
        </div>
    );
}