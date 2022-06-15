import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Navbar.module.scss";
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const [size, setSize] = useState({
        width:  window.innerWidth,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleNavbar = () => {
        setMenuOpen((p) => !p);
    };

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <Link to="#home" className={classes.header__content__logo}>
                    <b > Buse Şenöz</b>
                </Link>
                <nav
                    className={`${classes.header__content__nav} ${
                        menuOpen && size.width < 768 ? classes.isMenu : ""
                    }`}
                >
                    <ul>
                        <li>
                            <Link to="#about" onClick={menuToggleNavbar} smooth> About
                            </Link>
                        </li>
                        <li>
                            <Link to="#skill" onClick={menuToggleNavbar} smooth> Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="#project" onClick={menuToggleNavbar} smooth> Projects
                            </Link>
                        </li>
                        <Link to="#contact" onClick={menuToggleNavbar} smooth> 
                            <button style={{fontSize: "20px"}}>Contact</button>
                         </Link>
                    </ul>
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleNavbar} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleNavbar} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
