import styles from "@/app/parcours/parcours.module.scss";
import parcoursData  from "../lib/data";

export default function Parcours() {

    return (
        <main id="parcours" className={styles.parcours}>
            <div className={styles.parcoursLeft}>
                <div className={styles.contentLeft}>
                    <h3 className={styles.experiences}>EXPERIENCES</h3>
                    <div className={styles.experiencesContent}>
                        {
                            parcoursData.experiences.map((i, k) => {
                                return (
                                    <div className={styles.experienceBloc} key={k}>
                                        <p className={styles.intitule}>{i.intitule}</p>
                                        <p className={styles.periode}>{i.periode}</p>
                                        <p className={styles.organisme}>{i.organisme}</p>
                                        <p className={styles.taches1}>{i.taches1}</p>
                                        <p className={styles.taches2}>{i.taches2}</p>
                                    </div>
                                        )
                                    })
                        }
                    </div>
                </div>
            </div>
            <div className={styles.parcoursRight}>
                <div className={styles.contentRight}>
                    <h3 className={styles.formations}>FORMATIONS</h3>
                    <div className={styles.formationsContent}>
                        {
                            parcoursData.formations.map((i, k) => {
                                return (
                                    <div className={styles.formationBloc} key={k}>
                                        <p className={styles.intitule}>{i.intitule}</p>
                                        <p className={styles.periode}>{i.periode}</p>
                                        <p className={styles.organisme}>{i.organisme}</p>
                                        <p className={styles.taches1}>{i.taches1}</p>
                                        <p className={styles.taches2}>{i.taches2}</p>
                                    </div>
                                        )
                                    })
                        }
                    </div>
                    <h3 className={styles.competences}>COMPETENCES</h3>
                    <div className={styles.competencesContent}>
                        <div className={styles.competencesBloc}>
                            {
                                parcoursData.competences.map((i, k) => {
                                    return (
                                        <p className={styles.intitule} key={k}>{i}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}