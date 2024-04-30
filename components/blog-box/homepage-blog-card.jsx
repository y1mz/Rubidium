import {Button} from "@/components/ui/button"
import Link from "next/link"

function HomepageBlogCard({ title, date, link }) {
    const postDate = new Date(date).toDateString()
    const postDateStripped = postDate.split(" ").slice(1, 5).toString()
    const finalDate = postDateStripped.replace(/[.,!?]/, " ")

    return (
        <div className="relative rounded-lg backdrop-blur-md bg-white/10 hover:bg-white/20 transition duration-200 h-48 px-12 md:px-0">
            <div className="absolute p-6 top-0 bottom-0 inset-x-0">
                <div className="flex">
                    <h2 className="text-2xl font-bold my-0">{title}</h2>
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4">
                    <div className="flex justify-between items-end">
                        <Button variant="ghost-2" asChild><p className="pointer-events-none">{finalDate}</p></Button>
                        <Button variant="ghost2" asChild><Link href={link}>Read more</Link></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomepageBlogCard