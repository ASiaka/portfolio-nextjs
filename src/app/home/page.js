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
                        <h1 className={styles.title}>CONCEPTEUR DÉVELOPPEUR <span className={styles.titleSpan}>D&apos;APPLICATIONS</span></h1>
                    </div>
                    <p className={styles.presentation}>
                        Après une première formation en développement web et une expérience pratique en React, 
                        j&apos;ai poursuivi mon apprentissage en réalisant différents projets personnels afin de consolider et d&apos;actualiser mes compétences. 
                        Aujourd&apos;hui, je souhaite intégrer la formation Concepteur Développeur d&apos;Applications afin de renforcer mes connaissances, 
                        approfondir mes compétences et découvrir de nouvelles technologies. 
                        Mon objectif est de devenir un concepteur-développeur capable de créer des applications performantes et adaptées aux besoins des entreprises.
                    </p>
                </div>
            </div>
        </main>
    )
}