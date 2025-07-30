import styles from "@/app/projets/projets.module.scss";

export default function Projets() {
    
    return (
        <main id="projets" className={styles.projets}>
            <div className={styles.projetsContent}>
                <div className={styles.titleContent}>
                    <h1 className={styles.title}>Project title</h1>
                    <p className={styles.subTitle}>Description lorem Ipsum is simply dummy text of the printing</p>
                </div>
                <div className={styles.projet + " " + styles.projetOne}>
                    <h3 className={styles.title}>Projet 1</h3>
                    <p className={styles.paragraph}>Lorem Ipsum is simply dummy text of the printing.</p>
                    <p className={styles.paragraph}>Lorem Ipsum has been the industry's standard.</p>
                    <button className={styles.button}>Voir plus</button>
                </div>
                <div className={styles.projet + " " + styles.projetTwo}>
                    <h3 className={styles.title}>Projet 1</h3>
                    <p className={styles.paragraph}>Lorem Ipsum is simply dummy text of the printing.</p>
                    <p className={styles.paragraph}>Lorem Ipsum has been the industry's standard.</p>
                    <button className={styles.button}>Voir plus</button>
                </div>
                <div className={styles.projet + " " + styles.projetThree}>
                    <h3 className={styles.title}>Projet 1</h3>
                    <p className={styles.paragraph}>Lorem Ipsum is simply.</p>
                    <p className={styles.paragraph}>Lorem Ipsum has been.</p>
                    <button className={styles.button}>Voir plus</button>
                </div>
                <div className={styles.projet + " " + styles.projetFour}>
                    <h3 className={styles.title}>Projet 1</h3>
                    <p className={styles.paragraph}>Lorem Ipsum is simply.</p>
                    <p className={styles.paragraph}>Lorem Ipsum has been.</p>
                    <button className={styles.button}>Voir plus</button>
                </div>
                <div className={styles.projet + " " + styles.projetFive}>
                    <h3 className={styles.title}>Projet 1</h3>
                    <p className={styles.paragraph}>Lorem Ipsum is simply.</p>
                    <p className={styles.paragraph}>Lorem Ipsum has been.</p>
                    <button className={styles.button}>Voir plus</button>
                </div>
            </div>
        </main>
    )
}