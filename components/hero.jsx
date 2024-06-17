import { Button } from "./ui/button";
// import { Box } from "@material-ui/core";
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
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-hero_dark bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:mb-0">
            <span className="text-md font-semibold mb-4 text-primary tracking-[4px]">
              Hii, my name is
            </span>
            <h1 className="h1 mb-2 text-lg">{name}</h1>
            <h2 className="h2 mb-2">I build websites and mobile apps.</h2>

            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Enthusiastic developer skilled in crafting dynamic web pages and
              mobile apps with Flutter and Android Studio. Currently diving deep
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
            {/* <Box bgcolor="red" width={100} height={100}></Box> */}
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              // endCountNum={0}
              badgeText="Year Of Experience"
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              // endCountNum={0}
              // endCountText="k"
              badgeText="Finished Projects"
            />
            {/* badge 3 */}
            <Badge
              containerStyles="absolute top-[55%] -right-8"
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
