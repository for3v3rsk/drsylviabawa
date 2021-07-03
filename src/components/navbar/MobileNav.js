import { useSpring, animated } from "react-spring";
import { Link } from "react-scroll";
import { ReactComponent as Logo } from "../../assets/imgs/DrSylviaBawaLogoLight.svg";

const MobileNav = ({ showMenu, disMissMenu }) => {
  //* Mobile Menu Animation
  const myAnimation = useSpring(
    showMenu
      ? {
          from: { transform: `translate(0%)` },
          to: { transform: `translate(100%)` },
          config: { mass: 1 },
        }
      : {
          from: { transform: `translate(0%)` },
          to: { transform: `translate(-100%)` },
          config: { mass: 5 },
        }
  );

  // *mobile menu
  const mobileMenu = (
    <div className="relative p-5 w-4/5 h-full text-gray-800 bg-white z-50">
      {/* Branding and menu close button */}
      <div className=" flex justify-between text-gray-700">
        <Logo className="h-10 w-10" />
        <span className=" border-gray-700 p-2" onClick={disMissMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>

      {/* navigation links */}
      <ul className="mt-5">
        {/* <ul className=" p-5 w-4/5 h-full text-gray-800 bg-white"> */}
        <Link to="Hero" spy={true} smooth={true} duration={500}>
          <li className="mobileMenuLink" onClick={disMissMenu}>
            Home
          </li>
        </Link>
        <Link to="About" spy={true} smooth={true} duration={500}>
          <li className="mobileMenuLink" onClick={disMissMenu}>
            About
          </li>
        </Link>
        <Link to="Publications" spy={true} smooth={true} duration={500}>
          <li className="mobileMenuLink" onClick={disMissMenu}>
            Publications
          </li>
        </Link>
        <Link to="Contact" spy={true} smooth={true} duration={500}>
          <li
            className="mt-10 py-4 px-6 ml-3  bg-picton-blue rounded-full text-white-lilac font-semibold text-center"
            onClick={disMissMenu}
          >
            Contact
          </li>
        </Link>
      </ul>
    </div>
  );

  return (
    <>
      <animated.div
        className="fixed -left-full top-0 w-full h-full z-40 menuMask"
        style={{ ...myAnimation }}
      >
        {mobileMenu}
      </animated.div>
    </>
  );
};

export default MobileNav;
