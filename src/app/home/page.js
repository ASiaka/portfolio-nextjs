'use client'

import styles from "@/app/home/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faHtml5, faJs, faLaravel, faPhp, faReact, faSass, faSymfony } from "@fortawesome/free-brands-svg-icons";
import tailwindcss from "../../../public/img//tailwindcss.svg";
import Image from "next/image";
import { faDatabase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Home() {
    const [intitule, setIntitule] = useState("alternance");

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("yes")
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
                        <FontAwesomeIcon icon={faHtml5} className={styles.language} />
                        <FontAwesomeIcon icon={faCss3Alt} className={styles.language} />
                        <FontAwesomeIcon icon={faJs} className={styles.language} />
                        <FontAwesomeIcon icon={faReact} className={styles.language} />
                        <FontAwesomeIcon icon={faSass} className={styles.language} />
                        <Image src={tailwindcss} style={{width: "1.3em", height: "auto"}} alt="Tailwind CSS" className={styles.language} />
                        <FontAwesomeIcon icon={faDatabase} className={styles.language} />
                        <FontAwesomeIcon icon={faPhp} className={styles.language} />
                        <FontAwesomeIcon icon={faSymfony} className={styles.language} />
                        <FontAwesomeIcon icon={faLaravel} className={styles.language} />
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