import Socials from "./socials";
const Footer = () => {
  return (
    <footer className="py-8 bg-white dark:bg-[#3b4354] border-t-4 border-black/10 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconStyles="dark:text-white/70 text-[20px] hover:text-primary dark:hover:text-primary transition-all"
          />
          {/* copyright */}
          <div className=" dark:text-white/70 hover:text-primary dark:hover:text-primary transition-all">
            Copyright &copy; Jerald Joyson. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
