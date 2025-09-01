import styles from "@/app/home/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss, faCss3, faCss3Alt, faHtml5, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";

export default function Home() {

    return (
        <main id="accueil" className={styles.home}>
            <div className={styles.homeTop}>
                <div className={styles.topContent}>
                    {/* <h1 className={styles.title}>DevInProgress</h1> */}
                    <div className={styles.langages}>
                        <FontAwesomeIcon icon={faHtml5} className={styles.language} />
                        <FontAwesomeIcon icon={faCss3Alt} className={styles.language} />
                        <FontAwesomeIcon icon={faJs} className={styles.language} />
                        <FontAwesomeIcon icon={faReact} className={styles.language} />
                        <FontAwesomeIcon icon={faSass} className={styles.language} />
                    </div>
                </div>
            </div>
            <div className={styles.homeBottom}>
                <div className={styles.bottomContent}>
                    <div className={styles.titleContent}>
                        <h3 className={styles.title}>CONCEPTEUR D&apos;APPLICATIONS WEB</h3>
                        <h4 className={styles.subtitle}>EN ALTERNANCE <span className={styles.dates}>(12 mois - entrée : fin Octobre)</span></h4>
                    </div>
                    <p className={styles.presentation}>
                        Passionné par le développement web, j&apos;ai suivi une formation il y a deux 
                        ans pour acquérir les bases du métier. Depuis, j&apos;ai continué à développer 
                        des projets personnels en HTML, CSS, JavaScript et React, afin de 
                        maintenir et d&apos;approfondir mes compétences. Aujourd&apos;hui, je souhaite 
                        concrétiser mon projet professionnel en intégrant une alternance pour 
                        renforcer mes connaissances et apprendre de nouveaux langages.
                    </p>
                </div>
            </div>
        </main>
    )
}