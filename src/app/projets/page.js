'use client'

import styles from "@/app/projets/projets.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import rhD2 from "../../../public/img/rhD2.png";
import rhM2 from "../../../public/img/rhM2.png";
import rhD1 from "../../../public/img/rhD1.png";
import rhM1 from "../../../public/img/rhM1.png";
import smD from "../../../public/img/smD.png";
import smM from "../../../public/img/smM.png";
import pfD from "../../../public/img/pfD.png";
import pfM from "../../../public/img/pfM.png";
import ebD from "../../../public/img/ebD.png";
import ebM from "../../../public/img/ebM.png";

export default function Projets() {
    const [modeMobile, setModeMobile] = useState(false);
    const [showDescription, setShowDescription] = useState("hidden");

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1000) {
                setModeMobile(true)
            } else {
                setModeMobile(false)
            }
        };

        // Exécuter au premier rendu
        handleResize();

        // Ajouter l'écouteur d'événement
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    },[]);
    
    return (
        <main id="projets" className={styles.projets}>
            <div className={styles.projetsContent}>
                <div className={styles.titleContent}>
                    <h1 className={styles.title}>Projets</h1>
                    <p className={styles.subTitle}>Techno utilisées : html, css, javaScript, React, Nextjs, scss.</p>
                    <p style={{color: "gray", fontSize: "12px"}}>Bientôt disponible : «<span style={{fontWeight: "bold"}}>Alifab</span>» React, Nextjs, SCSS / «<span style={{fontWeight: "bold"}}>JalQart</span>» PHP, SQL, PhpMyAdmin</p>
                </div>
                <div
                    className={styles.projet + " " + styles.projetOne}
                    style={{
                        backgroundImage: modeMobile === true ? `url(${rhM2.src})` : `url(${rhD2.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                    onMouseEnter={() => setShowDescription("showP1")}
                    onMouseLeave={() => setShowDescription("hidden")}
                >
                    <div
                        className={styles.projetDescription}
                        style={{visibility: showDescription === "showP1" ? "visible" : "hidden"}}
                    >
                        <h3 className={styles.title}>RevisionHelp</h3>
                        <p className={styles.paragraph}>Application d&apos;aide à la révision du vocabulaire.</p>
                        <p className={styles.paragraph}>Réalisé en reactJs / scss.</p>
                        <Link href={"https://revisionhelp-nextjs.vercel.app/"} className={styles.link} target="_blank" rel="noopener noreferrer">
                            <button className={styles.button}>Voir</button>
                        </Link>
                    </div>
                </div>
                <div
                    className={styles.projet + " " + styles.projetTwo}
                    style={{
                        backgroundImage: modeMobile === true ? `url(${rhM1.src})` : `url(${rhD1.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                    onMouseEnter={() => setShowDescription("showP2")}
                    onMouseLeave={() => setShowDescription("hidden")}
                >
                    <div
                        className={styles.projetDescription}
                        style={{visibility: showDescription === "showP2" ? "visible" : "hidden"}}
                    >  
                        <h3 className={styles.title}>RevisionHelp</h3>
                        <p className={styles.paragraph}>Application d&apos;aide à la révision du vocabulaire.</p>
                        <p className={styles.paragraph}>Réalisé en javaScript / html / css</p>
                        <Link href={"https://help-beta-liard.vercel.app/"} className={styles.link} target="_blank" rel="noopener noreferrer">
                            <button className={styles.button}>Voir</button>
                        </Link>
                    </div>
                </div>
                <div
                    className={styles.projet + " " + styles.projetThree}
                    style={{
                        backgroundImage: modeMobile === true ? `url(${smM.src})` : `url(${smD.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                    onMouseEnter={() => setShowDescription("showP3")}
                    onMouseLeave={() => setShowDescription("hidden")}
                >
                    <div
                        className={styles.projetDescription}
                        style={{visibility: showDescription === "showP3" ? "visible" : "hidden"}}
                    >  
                        <h3 className={styles.title}>Sud Multiservices</h3>
                        <p className={styles.paragraph}>Site vitrine pour</p>
                        <p className={styles.paragraph}>un particulier</p>
                        <Link href={"https://sud-multiservices.vercel.app/"} className={styles.link} target="_blank" rel="noopener noreferrer">
                            <button className={styles.button}>Voir</button>
                        </Link>
                    </div>
                </div>
                <div
                    className={styles.projet + " " + styles.projetFour}
                    style={{
                        backgroundImage: modeMobile === true ? `url(${pfM.src})` : `url(${pfD.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                    onMouseEnter={() => setShowDescription("showP4")}
                    onMouseLeave={() => setShowDescription("hidden")}
                >
                    <div
                        className={styles.projetDescription}
                        style={{visibility: showDescription === "showP4" ? "visible" : "hidden"}}
                    >  
                        <h3 className={styles.title}>Portfolio 1</h3>
                        <p className={styles.paragraph}>Mon premier portfolio</p>
                        <p className={styles.paragraph}>Réalisé en reactJs / scss.</p>
                        <Link href={"#projets"} className={styles.link}>
                            <button className={styles.button}>Voir</button>
                        </Link>
                    </div>
                </div>
                <div
                    className={styles.projet + " " + styles.projetFive}
                    style={{
                        backgroundImage: modeMobile === true ? `url(${ebM.src})` : `url(${ebD.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                    onMouseEnter={() => setShowDescription("showP5")}
                    onMouseLeave={() => setShowDescription("hidden")}
                >
                    <div
                        className={styles.projetDescription}
                        style={{visibility: showDescription === "showP5" ? "visible" : "hidden"}}
                    >  
                        <h3 className={styles.title}>eb</h3>
                        <p className={styles.paragraph}>site immobilier.</p>
                        <p className={styles.paragraph}>Réalisé en reactJs / scss.</p>
                        <Link href={"https://eb-eight.vercel.app/"} className={styles.link} target="_blank" rel="noopener noreferrer">
                            <button className={styles.button}>Voir</button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}