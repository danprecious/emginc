import CustomButton from "../customButton";
import Logo from "../logo";
import { MobileNavBody } from "../nav/mobileNav";
import NavLinks from "../nav/navLinks/navLinks";
import MobileNavContextProvider from "../nav/mobileNav/context";
import { MobileNavButton } from "../nav/mobileNav";

const Header = () => {
  return (
    <header className="md:flex items-center w-full px-16 py-5 lg:py-3 relative">
      <MobileNavContextProvider>
        <div className="lg:w-[50%]">
          <Logo />
        </div>

        <div className="lg:w-[50%] hidden lg:flex justify-center">
          <NavLinks />
        </div>

        <MobileNavButton />
        <MobileNavBody />

        <div className="lg:w-[50%] lg:flex hidden justify-end">
          <CustomButton href="/contactUs" text="Get in touch" />
        </div>
      </MobileNavContextProvider>
    </header>
  );
};

export default Header;
