import styles from "@/app/ui/styles/nav.module.scss";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Nav() {

    return (
        <nav className={styles.nav}>
            <div className={styles.navContent}>
                <div className={styles.reseaux} >
                    <FontAwesomeIcon icon={faLinkedin} className={styles.reseau}/>
                    <FontAwesomeIcon icon={faGithub} className={styles.reseau}/>
                </div>
                <ul className={styles.lists}>
                    <li className={styles.list}><Link href="" className={styles.link}>Acceuil</Link></li>
                    <li className={styles.list}><Link href="" className={styles.link}>Parcours</Link></li>
                    <li className={styles.list}><Link href="" className={styles.link}>Projets</Link></li>
                    <li className={styles.list}><Link href="" className={styles.link}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}