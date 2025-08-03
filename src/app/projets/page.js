import styles from "@/app/projets/projets.module.scss";

export default function Projets() {
    
    return (
        <main id="projets" className={styles.projets}>
            <div className={styles.projetsContent}>
                <div className={styles.titleContent}>
                    <h1 className={styles.title}>Projets</h1>
                    <p className={styles.subTitle}>Projets realisés en html, css, javaScript, reactJs, scss.</p>
                </div>
                <div className={styles.projet + " " + styles.projetOne}>
                    <h3 className={styles.title}>RevisionHelp</h3>
                    <p className={styles.paragraph}>Application d&apos;aide à la révision du vocabulaire.</p>
                    <p className={styles.paragraph}>Réalisé en reactJs / scss.</p>
                    <button className={styles.button}>Voir</button>
                </div>
                <div className={styles.projet + " " + styles.projetTwo}>
                    <h3 className={styles.title}>RevisionHelp</h3>
                    <p className={styles.paragraph}>Application d&apos;aide à la révision du vocabulaire.</p>
                    <p className={styles.paragraph}>Réalisé en javaScript / html / css</p>
                    <button className={styles.button}>Voir</button>
                </div>
                <div className={styles.projet + " " + styles.projetThree}>
                    <h3 className={styles.title}>Sud Multiservices</h3>
                    <p className={styles.paragraph}>Site vitrine pour</p>
                    <p className={styles.paragraph}>un particulier</p>
                    <button className={styles.button}>Voir</button>
                </div>
                <div className={styles.projet + " " + styles.projetFour}>
                    <h3 className={styles.title}>Portfolio 1</h3>
                    <p className={styles.paragraph}>Mon premier portfolio</p>
                    <p className={styles.paragraph}>Réalisé en reactJs / scss.</p>
                    <button className={styles.button}>Voir</button>
                </div>
                <div className={styles.projet + " " + styles.projetFive}>
                    <h3 className={styles.title}>eb</h3>
                    <p className={styles.paragraph}>site immobilier.</p>
                    <p className={styles.paragraph}>Réalisé en reactJs / scss.</p>
                    <button className={styles.button}>Voir</button>
                </div>
            </div>
        </main>
    )
}