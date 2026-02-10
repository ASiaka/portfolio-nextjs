'use client'

import styles from "@/app/projets/projets.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";

const projets = [
    {
        intitule: "Projet 01",
        title: "RevisionHelp v2",
        description: "Application d'aide à la révision du vocabulaire avec synthèse vocale, authentification utilisateur et stockage cloud. Intègre un système hybride localStorage/Supabase permettant un mode invité et un mode connecté avec synchronisation des données.",
        technos: ["React", "Next.js", "Tailwind css", "Supabase"],
        link: "https://revisionhelp-v2.vercel.app/",
        img: "RH_V2",
    },
    {
        intitule: "Projet 02",
        title: "RevisionHelp v1",
        description: "Version initiale de l'application d'aide à la révision du vocabulaire avec synthèse vocale. Interface simple, construite avec les technologies web fondamentales. Système de répétition espacée pour une mémorisation optimale.",
        technos: ["Javascript", "HTML", "CSS"],
        link: "https://help-beta-liard.vercel.app/",
        img: "RH_V1",
    },
    {
        intitule: "Projet 03",
        title: "PUB",
        description: "Site vitrine professionnel pour une entreprise spécialisée en signalétique et publicité. Présentation complète des services : enseignes lumineuses, création graphique, flocage et solutions visuelles sur mesure. Design moderne et entièrement responsive.",
        technos: ["React", "Next.js", "SCSS"],
        link: "https://pub-nextjs.vercel.app/",
        img: "PUB",
    },
    {
        intitule: "Projet 04",
        title: "Alifab",
        description: "Plateforme éducative interactive pour l'apprentissage de l'alphabet arabe et français destinée aux enfants. Approche ludique et progressive avec enregistrements audio authentiques, exercices interactifs adaptés à l'âge et tableau de bord pour le suivi parental.",
        technos: ["React", "Next.js", "SCSS"],
        link: "https://alifab.vercel.app/",
        img: "Alifab",
    },
    {
        intitule: "Projet 05",
        title: "JalQart",
        description: "Blog avec système complet de gestion de contenu. Dashboard administrateur permettant la création, modification et suppression d'articles. Interface utilisateur optimisée pour une expérience de lecture agréable.",
        technos: ["PHP", "SQL", "phpMyAdmin", "CSS"],
        link: "#",
        img: "JalQart",
    },
]

export default function Projets() {
    
    return (
        <main id="projets" className={styles.projets}>
            <div className={styles.projetsContent}>
               <h2 className={styles.projetsTitle}>Mes Projets</h2>
               {
                    projets.map((e, i) => {
                        return (
                            <div className={styles.projet} key={i}>
                                    <div
                                        className={styles.projetImg + " " + styles[e.img]}
                                        style={{order: `${i % 2 !== 0 ? "1" : "0"}`}}
                                    ></div>
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
                                        <Link href={e.link} className={styles.link}>Découvrir le projet</Link>
                                    </div>
                            </div>
                        )
                    })
               }
            </div>
        </main>
    )
}