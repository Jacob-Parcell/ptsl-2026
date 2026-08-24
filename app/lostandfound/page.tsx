// import LostAndFoundPost from "@/components/lostandfoundpost";

// type Props = {
//   lostAndFound: any,
// }

// export default function LostAndFound({lostAndFound}: Props) {
  
//   return (
//     <div>
//       {lostAndFound.map((item: any) => {
//         if(item._id != lostAndFound[lostAndFound.length -1]._id)
//         {
//           return (
//             <div key={item.title}>
//               <LostAndFoundPost initialPost={item} key={item._id}/>
//               <hr className="solid"/>
//             </div>
//         )
//         }
//         else
//         {
//           return <LostAndFoundPost initialPost={item} key={item._id}/>
//         }
//       })}
//     </div>)

// }

//------------------------------------------AI version-------------------------------

"use client"

import * as React from "react"
import {
  ChevronDown,
  ChevronUp,
  LoaderCircle,
  MessageCircle,
  Send,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Field, FieldLabel } from "@/components/ui/field"
import { toast } from "sonner"
import LostAndFoundForm from "@/components/lostandfoundform"

type Props = {
  lostAndFound: any,
  lostAndFoundReplies: any
}

const defaultAvatar = "/lost-found/ptsl-avatar.png"

//bool open/close for replies
function makeOpenState(lostAndFound: any[], lostAndFoundReplies: any[]) {
  return Object.fromEntries(lostAndFound.map((item) => [item._id, lostAndFoundReplies.filter((reply) => reply.LostAndFound_replies._id == item._id).length > 0]))
}

type DraftReply = {
  author: string,
  message: string
};

//assign a reply string value to each thread instead of having a global reply
function makeDraftState(lostAndFound: any[]): Record<string, DraftReply>{
  return Object.fromEntries(lostAndFound.map((item) => [item._id, {author: "", message: "" }]))
}

//initials for users
function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

export default function LostAndFound({lostAndFound, lostAndFoundReplies}: Props) {
  const [threads, setThreads] = React.useState(lostAndFound)
  const [replies, setReplies] = React.useState(lostAndFoundReplies)

  const [openById, setOpenById] = React.useState<Record<string, boolean>>(() =>
    makeOpenState(lostAndFound, lostAndFoundReplies)
  )
  const [draftById, setDraftById] = React.useState<Record<string, DraftReply>>(() =>
    makeDraftState(lostAndFound)
  )
  const [pendingById, setPendingById] = React.useState<Record<string, boolean>>({})
  const [errorById, setErrorById] = React.useState<Record<string, string>>({})

  React.useEffect(() => {
    setThreads(lostAndFound)
    setReplies(lostAndFoundReplies)
    setOpenById((previous) => ({ ...makeOpenState(lostAndFound, lostAndFoundReplies), ...previous }))
    setDraftById((previous) => ({ ...makeDraftState(lostAndFound), ...previous }))
  }, [lostAndFound])

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

  //TODO replace with wixclient post submission
  async function submitReply(threadId: string) {
    try{

      if (!draftById[threadId].author.trim() || !draftById[threadId].message.trim() || pendingById[threadId]) 
      {
        return
      }

      setPendingById((previous) => ({ ...previous, [threadId]: true }));

      const res = await fetch("/api/submit-lost-and-found-reply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({author: draftById[threadId].author.trim(), message:draftById[threadId].message.trim(), LostAndFound_replies: threadId}),
      })

      const body = await res.json()

      if (!res.ok) {
        throw new Error(body.error ?? "Reply submission failed")
      }

      const addedReply = JSON.parse(JSON.stringify(body.reply))

      setReplies((previous: any) => [...previous, addedReply]);

      setPendingById((previous) => ({ ...previous, [threadId]: false }));
      toast.success("Message submitted successfully")

    } catch(error) {
      console.error('Error submitting form:', error);
      toast.error("Message failed. Please try again.")
      setPendingById((previous) => ({ ...previous, [threadId]: false }));
    }
  }


  return (
    <section
      aria-labelledby="lost-found-heading"
      className="mx-auto w-full max-w-4xl forum"
    >
      <h1
        id="lost-found-heading"
        className="mb-8 text-3xl font-bold tracking-tight text-[#071b49] sm:text-4xl"
      >
        Lost &amp; Found
      </h1>

      <div className="space-y-7">
        <LostAndFoundForm setThreads={setThreads}/>
        {threads.map((thread: any) => {
          
          const threadReplies = replies.filter((reply: any) => {
            
            const parentId =
              typeof reply.LostAndFound_replies === "string"
                ? reply.LostAndFound_replies
                : reply.LostAndFound_replies?._id

            return parentId === thread._id
          })
          
          const isOpen = Boolean(openById[thread._id])
          const isPending = Boolean(pendingById[thread._id])
          const draft = draftById[thread._id] ?? { author: "", message: "" }
          const replyCount = threadReplies.length
          const statusLabel = thread.resolved === false ? "LOST" : "RESOLVED"

          return (
            <Card
              key={thread._id}
              className=
                "overflow-hidden rounded-2xl border-slate-200 bg-white py-0 threadCard"              
            >
              <CardContent className="p-0">
                <article aria-labelledby={`${thread._id}-title`}>
                  <div className="relative grid gap-5 px-5 pt-5 sm:grid-cols-[9rem_minmax(0,1fr)_auto] sm:gap-6 sm:px-7 sm:pt-7">
                    {thread.image ? (
                      <Dialog>
                        <DialogTrigger
                          className="flex h-32 w-full items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 sm:h-36 sm:w-36"
                          nativeButton={false}
                          render={<img
                            src={thread.image}
                            alt={thread.imageAlt ?? ""}
                            className="h-full w-full object-contain cursor-zoom-in"
                            />}
                        />
                            <DialogContent className="w-[90vw] sm:max-w-xl lg:max-w-3xl" showCloseButton={false}>
                                <img
                                className="lostAndFoundPostImage"
                                src={thread.image}
                                alt="Prime Time Softball League"/>
                            </DialogContent>
                      </Dialog>
                    ) : (
                      <div className="flex h-32 w-full items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500 sm:h-36 sm:w-36">
                        No image
                      </div>
                    )}

                    <div className="min-w-0 self-center">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge
                          variant={thread.resolved === false ? "destructive" : "secondary"}
                          className={cn(
                            "rounded-md px-3 py-1 text-xs font-extrabold tracking-wide",
                            thread.resolved === false
                              ? "bg-red-600 text-white hover:bg-red-600"
                              : "bg-emerald-600 text-white hover:bg-emerald-600"
                          )}
                        >
                          {statusLabel}
                        </Badge>
                        <h2
                          id={`${thread._id}-title`}
                          className="text-xl font-bold leading-tight text-[#071b49] sm:text-2xl"
                        >
                          {thread.title}
                        </h2>
                      </div>

                      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600 sm:text-base">
                        <span className="font-medium text-slate-800">{thread.author}</span>
                        <span aria-hidden="true">•</span>
                        <p>{formatDate(thread._createdDate)}</p>
                      </div>

                      <p className="mt-3 text-base leading-relaxed text-slate-800 sm:text-lg">
                        {thread.description}
                      </p>
                    </div>

                    <div className="absolute right-5 top-5 sm:static sm:self-center">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className={cn(
                          "h-11 gap-2 rounded-xl px-3 text-base font-medium text-slate-900 hover:bg-blue-50 hover:text-[#075fc9]",
                          replyCount === 0 && "cursor-default"
                        )}
                        onClick={() => {
                          if (replyCount > 0) {
                            setOpenById((previous) => ({
                              ...previous,
                              [thread._id]: !previous[thread._id],
                            }))
                          }
                        }}
                        aria-expanded={replyCount > 0 ? isOpen : undefined}
                        aria-controls={
                          replyCount > 0 ? `${thread._id}-replies` : undefined
                        }
                        aria-label={
                          replyCount > 0
                            ? `${isOpen ? "Hide" : "Show"} ${replyCount} replies to ${thread.title}`
                            : `No replies to ${thread.title}`
                        }
                      >
                        <MessageCircle
                          aria-hidden="true"
                          className="size-6 stroke-[1.8] text-[#0969da]"
                        />
                        <span>{replyCount}</span>
                        {replyCount > 0 ? (
                          isOpen ? (
                            <ChevronUp aria-hidden="true" className="ml-1 size-5" />
                          ) : (
                            <ChevronDown aria-hidden="true" className="ml-1 size-5" />
                          )
                        ) : null}
                      </Button>
                    </div>
                  </div>

                  {replyCount > 0 && isOpen ? (
                    <div
                      id={`${thread._id}-replies`}
                      className="mx-5 mt-6 rounded-xl border border-blue-100 px-4 py-1 sm:mx-7 sm:px-7 replyPanel"
                    >
                      <div className="timeline">
                        {threadReplies.map((reply: any, index: number) => (
                          <div
                            key={reply._id}
                            className={cn(
                              "relative grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 py-5 pl-7 sm:grid-cols-[4.25rem_minmax(0,1fr)] sm:gap-5 sm:pl-8",
                              index !== threadReplies.length - 1 &&
                                "border-b border-slate-200/80"
                            )}
                          >
                            <span
                              aria-hidden="true"
                              className="timelineDot"
                            />

                            <Avatar className="size-14 border-2 border-[#071b49] bg-white sm:size-16">
                              <AvatarImage
                                src={reply.avatarSrc ?? defaultAvatar}
                                alt=""
                                className="object-cover"
                              />
                              <AvatarFallback className="bg-white font-semibold text-[#071b49]">
                                {initials(reply.author)}
                              </AvatarFallback>
                            </Avatar>

                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:text-base">
                                <span className="font-semibold text-slate-900">
                                  {reply.author}
                                </span>
                                <span aria-hidden="true" className="text-slate-500">
                                  •
                                </span>
                                <p>
                                  {formatDate(reply._createdDate)}
                                </p>
                              </div>

                              <div className="mt-3 rounded-xl border border-blue-100 bg-white/65 px-4 py-3 text-base leading-relaxed text-slate-900 sm:text-lg">
                                {reply.message}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {thread.resolved === false ? (<form
                    className="mt-6 flex items-center gap-3 border-t border-slate-200 px-5 py-5 sm:gap-5 sm:px-7 sm:py-6"
                    onSubmit={(event) => {
                      event.preventDefault()
                      void submitReply(thread._id)
                    }}
                  >
                    <Avatar className="size-12 shrink-0 border-2 border-[#071b49] bg-white sm:size-14">
                      <AvatarImage
                        src={ defaultAvatar}
                        alt=""
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-white text-sm font-semibold text-[#071b49]">
                        {initials("Test User")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="min-w-0 flex-1">
                      <label htmlFor={`${thread._id}-reply`} className="sr-only">
                        Reply to {thread.title}
                      </label>
                      <Field>
                        <FieldLabel htmlFor={`${thread._id}-name`}>Your Name</FieldLabel>
                      <Textarea
                        id={`${thread._id}-name`}
                        value={draft.author}
                        onChange={(event) =>
                          setDraftById((previous) => ({
                            ...previous,
                            [thread._id]: {...previous[thread._id], author: event.target.value},
                          }))
                        }
                        onKeyDown={(event) => {
                          if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
                            event.preventDefault()
                            void submitReply(thread._id)
                          }
                        }}
                        placeholder="Your name"
                        rows={1}
                        disabled={isPending}
                        className="min-h-14 resize-none rounded-xl border-slate-300 bg-white px-4 py-4 text-base shadow-none placeholder:text-slate-400 focus-visible:border-[#0969da] focus-visible:ring-[#0969da]/20 sm:text-lg"
                      />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor={`${thread._id}-reply`}>Message</FieldLabel>
                        <Textarea
                          id={`${thread._id}-reply`}
                          value={draft.message}
                          onChange={(event) =>
                            setDraftById((previous) => ({
                              ...previous,
                              [thread._id]: {...previous[thread._id], message: event.target.value},
                            }))
                          }
                          onKeyDown={(event) => {
                            if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
                              event.preventDefault()
                              void submitReply(thread._id)
                            }
                          }}
                          placeholder="Write a reply..."
                          rows={1}
                          disabled={isPending}
                          className="min-h-14 resize-none rounded-xl border-slate-300 bg-white px-4 py-4 text-base shadow-none placeholder:text-slate-400 focus-visible:border-[#0969da] focus-visible:ring-[#0969da]/20 sm:text-lg"
                        />
                      </Field>
                      {errorById[thread._id] ? (
                        <p className="mt-2 text-sm text-red-600" role="alert">
                          {errorById[thread._id]}
                        </p>
                      ) : null}
                    </div>

                    <Button
                      type="submit"
                      size="icon"
                      disabled={!draft.author.trim() || !draft.message.trim() || isPending}
                      className="size-14 shrink-0 rounded-xl bg-[#071b49] text-white shadow-sm hover:bg-[#0b2b66] disabled:opacity-45 sm:size-16"
                      aria-label={`Post reply to ${thread.title}`}
                    >
                      {isPending ? (
                        <LoaderCircle aria-hidden="true" className="size-6 animate-spin" />
                      ) : (
                        <Send aria-hidden="true" className="size-6" />
                      )}
                    </Button>
                  </form>): null}
                </article>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
