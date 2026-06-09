import AboutLinks from "@/components/about-box/about-links";
import { Boxes } from "@/components/about-box/boxes";

function AboutBox({ name, description, links }) {
  return (
    <section className="w-full h-screen -mt-12">
      <div className="relative overflow-hidden w-full mx-auto h-full px-5">
        <div className="absolute inset-0 z-20 container h-full ">
          <Boxes />
        </div>
        <div className="relative top-0 bottom-32 inset-x-0 h-full px-5">
          <div className="absolute bottom-4 inset-x-0 px-5">
            <div className="space-y-2 relative z-20">
              <p className="font-light tracking-wider text-2xl">Hi There!</p>
              <h2 className="font-semibold text-6xl">
                I'm{" "}
                <p className="font-bold tracking-tighter text-6xl text-transparent bg-clip-text inline-block bg-gradient-to-r from-indigo-400 to-rose-400">
                  {name}!
                </p>
              </h2>
              <p className="max-w-[400px] text-sm font-medium">{description}</p>
              <div className="flex flex-wrap gap-2 pb-10">
                {links.map((link, index) => (
                  <AboutLinks title={link.title} link={link.link} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBox;
