import AboutLinks from "@/components/about-box/about-links"
import HomeHeader from "@/components/about-box/header"
import {Boxes} from "@/components/about-box/boxes"

function AboutBox({ pp, name, description, links, header }) {
    return (
        <div className="w-full h-screen">
            <div className="relative overflow-hidden w-full mx-auto h-full px-5">
                <div className="absolute inset-0 z-20 container h-full ">
                    <Boxes />
                </div>
                <div className="relative top-0 bottom-32 inset-x-0 h-full px-5">
                    <div className="absolute top-6 inset-x-0 z-30">
                        <HomeHeader header={header} />
                    </div>
                    <div className="absolute bottom-4 inset-x-0 px-5">
                        <div className="flex flex-wrap items-center relative z-20">
                            <div className="flex-col">
                                <p className="font-light tracking-wider text-2xl">Hi There!</p>
                                <h2 className="flex gap-3 items-center font-semibold text-6xl">I'm <p
                                    className="font-bold tracking-tighter text-6xl text-transparent bg-clip-text inline-block bg-gradient-to-r from-indigo-400 to-rose-400"
                                >
                                    {name}!
                                </p>
                                </h2>
                                <p className="md:max-w-xl text-sm font-medium">
                                    {description}
                                </p>
                                <div className="flex mt-2 gap-2">
                                    {links.map((link, index) => (
                                        <AboutLinks
                                            title={link.title}
                                            link={link.link}
                                            key={index}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-b from-0% to-gray-900 h-10">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBox;