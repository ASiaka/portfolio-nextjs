'use client';

import styles from "@/app/ui/styles/nav.module.scss";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import logoAsDevB from "../../../../public/img/logoAsDevB.png";
import logoAsDevG from "../../../../public/img/logoAsDevG.png";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 850) {
        setBurgerMenu(false);
        setIsOpen(false);
      } else {
        setBurgerMenu(true);
      }
    };

    // Exécuter au premier rendu
    handleResize();

    // Ajouter l'écouteur d'événement
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navStyle = {
    backgroundColor:
    burgerMenu && isOpen ? "#0c2f40" : "rgba(255, 255, 255, 0.5)",
    color: burgerMenu && isOpen ? "#F5F5F5" : "#0c2f40",
    height: burgerMenu && isOpen ? "100%" : "70px",
  };

  return (
    <nav className={styles.nav} style={navStyle}>
      <div className={styles.navContent}>
        <div className={styles.reseaux}>
          <Link
            href="/"
            className={styles.link}
          >
            <Image 
              src={burgerMenu && isOpen ? logoAsDevG : logoAsDevB}
              alt="logo AsDev"
              className={styles.reseau}
              onClick={() => setIsOpen(false)}
            />
          </Link>
        </div>

        {burgerMenu && (
          <FontAwesomeIcon
            icon={isOpen ? faXmark : faBars}
            className={styles.burgerMenu}
            onClick={() => setIsOpen((prev) => !prev)}
          />
        )}

        <ul
          className={`${styles.lists} ${burgerMenu ? styles.listsBM : ""}`}
          style={{ display: burgerMenu && !isOpen ? "none" : "flex" }}
        >
          <li className={`${styles.list} ${burgerMenu ? styles.listBM : ""}`}>
            <Link
              href="#acceuil"
              className={`${styles.link} ${burgerMenu ? styles.linkBM : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Acceuil
            </Link>
          </li>
          <li className={`${styles.list} ${burgerMenu ? styles.listBM : ""}`}>
            <Link
              href="#parcours"
              className={`${styles.link} ${burgerMenu ? styles.linkBM : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Parcours
            </Link>
          </li>
          <li className={`${styles.list} ${burgerMenu ? styles.listBM : ""}`}>
            <Link
              href="#projets"
              className={`${styles.link} ${burgerMenu ? styles.linkBM : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Projets
            </Link>
          </li>
          <li className={`${styles.list} ${burgerMenu ? styles.listBM : ""}`}>
            <Link
              href="#contact"
              className={`${styles.link} ${burgerMenu ? styles.linkBM : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
