import styles from "@/app/home/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss, faCss3, faCss3Alt, faHtml5, faJs, faLaravel, faPhp, faReact, faSass, faSymfony } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

export default function Home() {

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
                        <FontAwesomeIcon icon={faDatabase} className={styles.language} />
                        <FontAwesomeIcon icon={faPhp} className={styles.language} />
                        <FontAwesomeIcon icon={faSymfony} className={styles.language} />
                        <FontAwesomeIcon icon={faLaravel} className={styles.language} />
                    </div>
                </div>
            </div>
            <div className={styles.homeBottom}>
                <div className={styles.bottomContent}>
                    <div className={styles.titleContent}>
                        <h1 className={styles.title}>CONCEPTEUR D&apos;APPLICATIONS WEB</h1>
                        <h2 className={styles.subtitle}>ALTERNANCE <span className={styles.dates}>Durée: 12 mois - entrée: fin Octobre</span></h2>
                        <p className={styles.info}>Rythme: 1 semaine en formation / 2 semaines en entreprise</p>
                    </div>
                    <p className={styles.presentation}>
                        Après une première formation en développement web et une expérience 
                        pratique en React, j&apos;ai continué à développer des projets personnels 
                        pour maintenir mes compétences. Je souhaite aujourd&apos;hui intégrer 
                        une alternance en Conception et Développement d&apos;Applications 
                        afin de renforcer mes connaissances, découvrir de nouvelles 
                        technologies et contribuer activement aux projets d&apos;une entreprise.
                    </p>
                </div>
            </div>
        </main>
    )
}