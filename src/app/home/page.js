'use client'

import styles from "@/app/home/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faHtml5, faJs, faLaravel, faPhp, faReact, faSass, faSymfony } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import html from "../../../public/img//html.svg";
import css from "../../../public/img//css.svg";
import js from "../../../public/img//js.svg";
import react from "../../../public/img//react.svg";
import sass from "../../../public/img//sass.svg";
import tailwindcss from "../../../public/img//tailwindcss.svg";
import php from "../../../public/img//php.svg";
import symfony from "../../../public/img//symfony.svg";
import laravel from "../../../public/img//laravel.svg";

export default function Home() {
    const [intitule, setIntitule] = useState("alternance");

    useEffect(() => {
        const interval = setInterval(() => {
            setIntitule(prev => prev === "alternance" ? "emploi" : "alternance");
        }, 40000);

        return () => clearInterval(interval);
    }, []);

    return (
        <main id="accueil" className={styles.home}>
            <div className={styles.homeTop}>
                <div className={styles.topContent}>
                    <FontAwesomeIcon icon={faLaptopCode} className={styles.laptop} />
                    <h1 className={styles.title}>DevInProgress</h1>
                    <div className={styles.langages}>
                        <Image src={html} style={{height: "1.3em", width: "auto"}} alt="html" className={styles.language} />
                        <Image src={css} style={{height: "1.3em", width: "auto"}} alt="css" className={styles.language} />
                        <Image src={js} style={{height: "1.3em", width: "auto"}} alt="js" className={styles.language} />
                        <Image src={react} style={{height: "1.3em", width: "auto"}} alt="react" className={styles.language} />
                        <Image src={sass} style={{height: "1.3em", width: "auto"}} alt="sass" className={styles.language} />
                        <Image src={tailwindcss} style={{height: "1.1em", width: "auto"}} alt="Tailwind CSS" className={styles.language} />
                        <FontAwesomeIcon icon={faDatabase} className={styles.language} />
                        <Image src={php} style={{height: "1.3em", width: "auto"}} alt="php" className={styles.language} />
                        <Image src={symfony} style={{height: "1.3em", width: "auto"}} alt="symfony" className={styles.language} />
                        <Image src={laravel} style={{height: "1.3em", width: "auto"}} alt="laravel" className={styles.language} />
                    </div>
                </div>
            </div>
            <div className={styles.homeBottom}>
                <div className={styles.bottomContent}>
                    <div className={styles.prev} onClick={() => setIntitule(prev => prev === "alternance" ? "emploi" : "alternance")}>&lt;</div>
                    <div className={styles.next} onClick={() => setIntitule(prev => prev === "alternance" ? "emploi" : "alternance")}>&gt;</div>
                    <div className={styles.titleContent}>
                        {
                            intitule === "emploi" && 
                                <h1 className={styles.title}><span className={styles.titleSpan}>DÉVELOPPEUR</span> WEB ET WEB MOBILE</h1>
                        }
                        {
                            intitule === "alternance" && 
                                <>
                                    <h1 className={styles.title}>CONCEPTEUR D&apos;APPLICATIONS WEB</h1>
                                    <h2 className={styles.subtitle}>ALTERNANCE <span className={styles.dates}>Durée: 12 mois, Rentrées toute l&apos;année</span></h2>
                                    <p className={styles.info}>Rythme: 1-2 semaine(s) en formation / 4-6 semaines en entreprise</p>
                                </>
                        }
                    </div>
                        {
                            intitule === "emploi" && 
                                <p className={styles.presentation}>
                                    Après une première formation en développement web et une
                                    expérience pratique, j&apos;ai continué à développer des projets personnels
                                    en JavaScript, React, Next.js et PHP afin de maintenir et d&apos;élargir mes
                                    compétences. Aujourd&apos;hui, je souhaite intégrer une entreprise en tant
                                    que développeur web afin de mettre à profit mes connaissances,
                                    renforcer et augmenter mes compétences, découvrir de nouvelles
                                    technologies et contribuer activement aux projets de l&apos;équipe.
                                </p>
                        }
                        {
                            intitule === "alternance" && 
                                <p className={styles.presentation}>
                                    Après une première formation en développement web et une expérience
                                    pratique, j&apos;ai continué à développer des projets personnels en JavaScript,
                                    React, Next.js et PHP afin de maintenir et d&apos;élargir mes compétences.
                                    Aujourd&apos;hui, je souhaite intégrer une entreprise dans le cadre d&apos;une alternance
                                    en Conception et Développement d&apos;Applications afin de mettre à profit
                                    mes connaissances, renforcer et augmenter mes compétences, découvrir
                                    de nouvelles technologies et contribuer activement aux projets de l&apos;équipe.
                                </p>
                        }
                </div>
            </div>
        </main>
    )
}