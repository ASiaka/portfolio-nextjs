import styles from "@/app/parcours/parcours.module.scss";
import parcoursData  from "../lib/data";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Parcours() {

    return (
        <main id="parcours" className={styles.parcours}>
            {/* <FontAwesomeIcon icon={faDownload} className={styles.download} /> */}
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
                        <div className={styles.competencesNiveau}>
                            <p className={styles.niveau}>Intermédiaire</p>
                            {
                                parcoursData.competences.map((i, k) => {
                                    return (
                                            (k === 0 || k == 1) &&
                                            <p className={styles.intitule} key={k}>{i}</p>
                                        )
                                    })
                                }
                        </div>
                        <div className={styles.competencesNiveau}>
                            <p className={styles.niveau}>Débutant</p>
                            {
                                parcoursData.competences.map((i, k) => {
                                    return (
                                            k === 2 &&
                                            <p className={styles.intitule} key={k}>{i}</p>
                                        )
                                    })
                                }
                        </div>
                        <div className={styles.competencesNiveau}>
                            <p className={styles.niveau}>Intermédiaire</p>
                            {
                                parcoursData.competences.map((i, k) => {
                                    return (
                                            k === 3 &&
                                            <p className={styles.intitule} key={k}>{i}</p>
                                        )
                                    })
                                }
                        </div>
                        <div className={styles.competencesNiveau}>
                            <p className={styles.niveau}>Confirmé</p>
                            {
                                parcoursData.competences.map((i, k) => {
                                    return (
                                            (k === 4 || k === 5) &&
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