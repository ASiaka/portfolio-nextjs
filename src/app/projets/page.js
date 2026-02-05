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

const projets = [
    {
        intitule: "Projet 01",
        title: "RevisionHelp v2",
        description: "Application d'aide à la révision du vocabulaire avec synthèse vocale, authentification utilisateur et stockage cloud. Intègre un système hybride localStorage/Supabase permettant un mode invité et un mode connecté avec synchronisation des données.",
        technos: ["React", "Next.js", "Tailwind css", "Supabase"],
        link: "https://revisionhelp-v2.vercel.app/",
    },
    {
        intitule: "Projet 02",
        title: "RevisionHelp v1",
        description: "Version initiale de l'application d'aide à la révision du vocabulaire avec synthèse vocale. Interface simple, construite avec les technologies web fondamentales. Système de répétition espacée pour une mémorisation optimale.",
        technos: ["Javascript", "HTML", "CSS"],
        link: "https://help-beta-liard.vercel.app/",
    },
    {
        intitule: "Projet 03",
        title: "Alifab",
        description: "Plateforme éducative interactive pour l'apprentissage de l'alphabet arabe et français destinée aux enfants. Approche ludique et progressive avec enregistrements audio authentiques, exercices interactifs adaptés à l'âge et tableau de bord pour le suivi parental.",
        technos: ["React", "Next.js", "SCSS"],
        link: "https://alifab.vercel.app/",
    },
    {
        intitule: "Projet 04",
        title: "PUB",
        description: "Site vitrine professionnel pour une entreprise spécialisée en signalétique et publicité. Présentation complète des services : enseignes lumineuses, création graphique, flocage et solutions visuelles sur mesure. Design moderne et entièrement responsive.",
        technos: ["React", "Next.js", "SCSS"],
        link: "https://pub-nextjs.vercel.app/",
    },
    {
        intitule: "Projet 05",
        title: "JalQart",
        description: "Blog avec système complet de gestion de contenu. Dashboard administrateur permettant la création, modification et suppression d'articles. Interface utilisateur optimisée pour une expérience de lecture agréable.",
        technos: ["PHP", "SQL", "phpMyAdmin", "CSS"],
        link: "#",
    },
]

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
               <h2 className={styles.projetsTitle}>Mes Projets</h2>
               {
                    projets.map((e, i) => {
                        return (
                            <div className={styles.projet} key={i}>
                                    <div className={styles.projetImg} style={{order: `${i % 2 !== 0 ? "1" : "0"}`}}></div>
                                    <div className={styles.projetDescription}>
                                        <p className={styles.intitule}>{e.intitule}</p>
                                        <h3 className={styles.title}>{e.title}</h3>
                                        <p className={styles.description}>{e.description}</p>
                                        <div className={styles.technos}>
                                            {
                                                e.technos.map((x, k) => {
                                                    return <p className={styles.techno} key={k}>{x}</p>
                                                })
                                            }
                                        </div>
                                        <a href={e.link} className={styles.link}>Découvrir le projet</a>
                                    </div>
                            </div>
                        )
                    })
               }
            </div>
        </main>
    )
}