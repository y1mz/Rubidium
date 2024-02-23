import Image from "next/image"
import AboutLinks from "@/components/about-box/about-links"

function AboutBox({ pp, name, description, links }) {
    return (
        <div className="mx-auto my-28">
            <div className="flex flex-wrap gap-5 text-center justify-center">
                <Image src={pp} width={200} height={200} alt="Avatar Image" className="rounded-full"/>
                <div className="flex flex-col gap-5">
                    <h4 className="text-2xl">{name}</h4>
                    <p className="max-w-md text-base">{description}</p>
                    <div className="justify-center flex gap-1">
                        {links.map((link) => (
                            <AboutLinks
                                title={link.title}
                                link={link.link}
                                key={link.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBox;