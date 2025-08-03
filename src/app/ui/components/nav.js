'use client'

import styles from "@/app/ui/styles/nav.module.scss";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [burgerMenu, setBurgerMenu] = useState();

    useEffect(() => {

        if(window.innerWidth > 850) {
            setBurgerMenu(false)
        } else {
            setBurgerMenu(true)
        };

        window.addEventListener("resize", () => {
            if(window.innerWidth > 850) {
                setBurgerMenu(false)
                // console.log("superieur", window.innerWidth)
                setIsOpen(false)
            } else {
                setBurgerMenu(true)
                // console.log("inferieur", window.innerWidth)
            }
        });
    }, [])

    return (
        <nav className={styles.nav} style={{backgroundColor: burgerMenu === true & isOpen === true ? "#2F4558" : "rgba(255, 255, 255, 0.5)", color: burgerMenu === true & isOpen === true ? "#F5F5F5" : "#2F4558", height: burgerMenu === true & isOpen === true ? "100%" : "70px"}}>
            <div className={styles.navContent}>
                <div className={styles.reseaux} >
                    <Link href="https://www.linkedin.com/in/siakaandhum/" className={styles.link} target="blank">
                        <FontAwesomeIcon icon={faLinkedin} className={styles.reseau} style={{color: burgerMenu === true & isOpen === true ? "#F5F5F5" : "#2F4558"}}/>
                    </Link>
                    <Link href="https://github.com/ASiaka" className={styles.link} target="blank">
                        <FontAwesomeIcon icon={faGithub} className={styles.reseau} style={{color: burgerMenu === true & isOpen === true ? "#F5F5F5" : "#2F4558"}}/>
                    </Link>
                </div>
                {
                    burgerMenu === true &&
                        (
                            isOpen === false ?
                                <FontAwesomeIcon
                                    icon={faBars}
                                    className={styles.burgerMenu}
                                    onClick={() => setIsOpen(true)}
                                />
                            :
                                <FontAwesomeIcon
                                icon={faXmark}
                                className={styles.burgerMenu}
                                onClick={() => setIsOpen(false)}
                                />
                        )
                }
                <ul className={styles.lists + `${burgerMenu === true ? "BM" : ""}`} style={{display: burgerMenu === true & isOpen === false ? "none" : "flex"}}>
                    <li className={styles.list + `${burgerMenu === true ? "BM" : ""}`}><Link href="#acceuil" className={styles.link + `${burgerMenu === true ? "BM" : ""}`} onClick={() => setIsOpen(false)}>Acceuil</Link></li>
                    <li className={styles.list + `${burgerMenu === true ? "BM" : ""}`}><Link href="#services" className={styles.link + `${burgerMenu === true ? "BM" : ""}`} onClick={() => setIsOpen(false)}>Services</Link></li>
                    <li className={styles.list + `${burgerMenu === true ? "BM" : ""}`}><Link href="#projets" className={styles.link + `${burgerMenu === true ? "BM" : ""}`} onClick={() => setIsOpen(false)}>Projets</Link></li>
                    <li className={styles.list + `${burgerMenu === true ? "BM" : ""}`}><Link href="#contact" className={styles.link + `${burgerMenu === true ? "BM" : ""}`} onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}