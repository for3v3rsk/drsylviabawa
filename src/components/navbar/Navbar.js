// import { useState } from "react";
import { Link } from "react-scroll";
import { ReactComponent as Logo } from "../../assets/imgs/DrSylviaBawaLogoLight.svg";

const Navbar = ( { menuIsOpen } ) =>
{
  //* toggle visibility (state) of Mobile Menu/Nav
  // const [ showMenu, setShowMenu ] = useState( false );

  //* dismiss mobile menu/nav on click
  // const menuIsOpen = () => { setShowMenu( !showMenu ) };

  return (

    <>
      <nav >
        <div className="z-10 fixed top-0 left-0 w-full bg-white-lilac
    text-gray-700 text-lg font-medium py-4 lg:py-4 px-4 shadow">
          <div className="container mx-auto flex justify-between">
            {/* Branding */ }
            <div className="">
              <Logo className="h-10 w-10" />
            </div>

            {/* primary navbar links */ }
            <ul className="hidden lg:flex items-center">
              <Link
                activeClass="active"
                to="Hero"
                spy={ true }
                smooth={ true }
                offset={ -150 }
                duration={ 500 }
              >
                <li className="nav_link hvr-underline-from-left">Home</li>
              </Link>
              <Link
                activeClass="active"
                to="About"
                spy={ true }
                smooth={ true }
                offset={ -370 }
                duration={ 500 }
              >
                <li className="nav_link hvr-underline-from-left">About</li>
              </Link>
              <Link
                activeClass="active"
                to="Publications"
                spy={ true }
                smooth={ true }
                offset={ -360 }
                duration={ 500 }
              >
                <li className="nav_link hvr-underline-from-left">Publications</li>
              </Link>
              <Link
                to="Contact"
                spy={ true }
                smooth={ true }
                offset={ -370 }
                duration={ 500 }
              >
                <li className="px-10 py-3 cursor-pointer bg-picton-blue-500 text-white-lilac font-semibold rounded-full hover:bg-picton-blue-700 transition duration-300 lg:ml-5">
                  Contact
                </li>
              </Link>
            </ul>


            {/* mobile menu */ }
            <div className="lg:hidden text-gray-700" onClick={ menuIsOpen }>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={ 2 }
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
