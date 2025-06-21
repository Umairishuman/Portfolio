import { useState } from "react";
import styles from "./NavBar.module.css";

interface NavBarProps {
    items: string[];
}

const NavBar = ({ items }: NavBarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex , setActiveIndex] = useState(0);
    const [firstRender, setFirstRender] = useState(true);

    let changeState = () => {
        setIsOpen(!isOpen);
        const navBar = document.querySelector(`.${styles.NavBar}`);
        if (firstRender) {
            setFirstRender(false);
        }
        if (isOpen && navBar instanceof HTMLElement) {
            navBar.style.transition = "opacity 0.3s";
            navBar.style.opacity = "0";
            setTimeout(() => {
            navBar.style.display = "none";
            }, 300);
        } else if (!isOpen && navBar instanceof HTMLElement) {
            navBar.style.display = "flex";
            navBar.style.transition = "opacity 0.3s";
            setTimeout(() => {
            navBar.style.opacity = "1";
            }, 10);
        }
    };
    
    const OpenImage = "/assets/navBarDisplayIcon.svg";
    const CloseImage = "/assets/navBarCloseIcon.svg";

    let navBarItems = items.map((item, index) => {
        return (
            <a
                key={index}
                href={`#`}
                className={`${styles.NavItem} ${activeIndex === index ? styles.active : ""}`}
                onClick={() => {
                    setActiveIndex(index);
                    // changeState();
                }}
            >
                {item}
            </a>
        );
    });


    return (
        <>
            <button className={styles.NavButton} onClick={changeState}>
                {isOpen ? (
                    <img 
                        src={CloseImage}
                        alt="Close Navigation"
                        className={styles.NavIcon}
                    />
                ) : (
                    <img
                        src={OpenImage}
                        alt="Open Navigation"
                        className={styles.NavIcon}
                    />
                )}
            </button>
            {!firstRender && <nav className={styles.NavBar}>{navBarItems}</nav>}
        </>
    );
};

export default NavBar;
