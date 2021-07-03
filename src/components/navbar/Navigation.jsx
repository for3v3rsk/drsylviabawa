import { useState } from "react";
import { Link } from "react-scroll";
import { ReactComponent as Logo } from "../../assets/imgs/DrSylviaBawaLogoLight.svg";
import MobileNav from './MobileNav'

const Navigation = () =>
{
    //* toggle visibility (state) of Mobile Menu/Nav
    const [ showMenu, setShowMenu ] = useState( false );
    console.log( showMenu )

    //* dismiss mobile menu/nav on click
    const menuIsOpen = () => { setShowMenu( !showMenu ) };
    return (
        <>
            {/* mobile nav */ }
            <MobileNav menuIsOpen={ { menuIsOpen } } showMenu={ { showMenu } } />
        </>
    )
}

export default Navigation
