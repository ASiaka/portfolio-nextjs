'use client';

import styles from "@/app/ui/styles/nav.module.scss";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      burgerMenu && isOpen ? "#2F4558" : "rgba(255, 255, 255, 0.5)",
    color: burgerMenu && isOpen ? "#F5F5F5" : "#2F4558",
    height: burgerMenu && isOpen ? "100%" : "70px",
  };

  const iconColor = burgerMenu && isOpen ? "#F5F5F5" : "#2F4558";

  return (
    <nav className={styles.nav} style={navStyle}>
      <div className={styles.navContent}>
        <div className={styles.reseaux}>
          <Link
            href="https://www.linkedin.com/in/siakaandhum/"
            className={styles.link}
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.reseau} style={{ color: iconColor }} />
          </Link>
          <Link
            href="https://github.com/ASiaka"
            className={styles.link}
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} className={styles.reseau} style={{ color: iconColor }} />
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
              href="#services"
              className={`${styles.link} ${burgerMenu ? styles.linkBM : ""}`}
              onClick={() => setIsOpen(false)}
            >
              Services
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
