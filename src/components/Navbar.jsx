import React, {useState} from "react";

import styles from"./Navbar.module.css";
import {getImageUrl} from "../utils";



export const Navbar = () => {
    return(
        <nav className={styles.Navbar}>
            <a className = {styles.tile} href="/"> 
            Portfoilio
            </a>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn}
                    src = "assets/nav/menuIcon.png"
                    alt = "menu-button"
                />
                <ul className={styles.menuItems}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#about">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}