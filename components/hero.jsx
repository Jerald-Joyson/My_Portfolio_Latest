import { Button } from "./ui/button";

import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./devImg";
import Badge from "./badge";
import Socials from "./socials";
import Link from "next/link";

const name = "Jerald Joyson".toUpperCase();

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[165vh] xl:h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-hero_dark bg-cover">
      <div className="container mx-auto relative">
        <div className="absolute top-32 md:top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="xl:hidden flex relative justify-center items-center pb-10 min-w-[320px] min-h-[50vh] md:min-h-[57vh] md:min-w-[390px]">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[14%] -left-[0rem] w-[60px] h-[60px]"
              icon={<RiBriefcase4Fill />}
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[70%] -left-[1rem] w-[60px] h-[60px]"
              icon={<RiTodoFill />}
            />
            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-1 w-[60px] h-[60px] "
              icon={<RiTeamFill />}
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[280px] h-[300px] md:w-[380px] md:h-[400px] bg-center bg-cover bg-no-repeat absolute top-3 right-50% "></div>
            <DevImg
              containerStyles="bg-hero_shape w-[311px] h-[282px] md:w-[510px] md:h-[462px] bg-no-repeat bg-center bg-cover relative"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>
        <div className="flex justify-between gap-x-8 pt-72 md:pt-[430px] lg:pt-0">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:mb-0">
            <span className="h4 font-semibold mb-4 text-primary tracking-[4px]">
              Hii, my name is
            </span>
            <h1 className="h1 mb-2 text-lg">{name}</h1>
            <h2 className="h2 mb-2">I build websites and mobile apps.</h2>

            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Enthusiastic developer skilled in crafting dynamic web pages and
              mobile apps(in Flutter and Android Studio). Currently diving deep
              into React.js to elevate user experiences. Committed to continuous
              growth in the ever-evolving tech landscape.
              <br />
              <p className="font-semibold">
                'Learning never exhausts the mind.'
              </p>
              <p className="indent-40">Leonardo da Vinci</p>
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <a
                href="./Jerald_Joyson-resume.pdf"
                target="_blank"
                alt="my cv"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </a>
            </div>
            {/* socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem] w-[200px] h-[68px]"
              icon={<RiBriefcase4Fill />}
              // endCountNum={0}
              badgeText="Year Of Experience"
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem] w-[200px] h-[68px]"
              icon={<RiTodoFill />}
              // endCountNum={0}
              // endCountText="k"
              badgeText="Finished Projects"
            />
            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-8 w-[200px] h-[68px]"
              icon={<RiTeamFill />}
              // endCountNum={0}
              // endCountText="k"
              badgeText="Happy Clients"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/developer.png"
            />
          </div>
        </div>
        {/* icons */}
        <div className="hidden xl:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
