'use client'

import styles from "@/app/contact/contact.module.scss";
import { faGithub, faGithubAlt, faGithubSquare, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Contact() {

    return (
        <main id="contact" className={styles.contact}>
            <div className={styles.formContent}>
                <h1 className={styles.title}>Contact</h1>
                <form className={styles.form}>
                    <input type="text" name="name" className={styles.name} placeholder="nom" />
                    <input type="email" name="email" className={styles.email} placeholder="mail" />
                    <textarea name="message" className={styles.message} placeholder="message" />
                    <button type="submit" name="button" className={styles.button}>Envoyer</button>
                </form>
            </div>
            <div className={styles.bottomContent}>
                <div className={styles.reseaux} >
                    <Link href="https://www.linkedin.com/in/siakaandhum/" className={styles.link} target="blank">
                        <FontAwesomeIcon icon={faLinkedinIn} className={styles.reseau} />
                    </Link>
                    <Link href="https://github.com/ASiaka" className={styles.link} target="blank">
                        <FontAwesomeIcon icon={faGithub} className={styles.reseau} />
                    </Link>
                    <Link href="" className={styles.link} target="blank">
                        <FontAwesomeIcon icon={faWhatsapp} className={styles.reseau} />
                    </Link>
                </div>
            </div>
        </main>
    )
}