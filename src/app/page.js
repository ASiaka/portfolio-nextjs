import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "./page.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from "next/image";
import html from "../../public/img/html.svg";
import css from "../../public/img/css.svg";
import js from "../../public/img/js.svg";
import react from "../../public/img/react.svg";
import sass from "../../public/img/sass.svg";
import Nav from "./ui/components/nav";

export default function Home() {
  
  return (
    <div className={styles.page}>
      <Nav />
      <main className={styles.main}>
        <div className={styles.titleContent}>
          <p className={styles.nom}>ASia</p>
          <div className={styles.subtitleContent}>
            <p className={styles.activite}>Développeur web front-end</p>
            <p className={styles.specialite}>Spécialisé ReactJs - Javascript</p>
          </div>
        </div>
        <p className={styles.devise}>Dev In Progress ...</p>
        <div className={styles.languages}>
          <Image src={html} alt="iconHtml" width={25} />
          <Image src={css} alt="iconCss" width={25} />
          <Image src={js} alt="iconJs" width={25} />
          <Image src={react} alt="iconReact" width={25} />
          <Image src={sass} alt="iconSass" width={25} />
        </div>
        <div className={styles.projets}>
          <div className={styles.projet}></div>
          <div className={styles.projet}></div>
          <div className={styles.projet}></div>
          <div className={styles.projet}></div>
          <div className={styles.projet}></div>
        </div>
        {/* <p className={styles.slogan}>DevIn<span>Progress</span></p>
        <div id={styles.progressBloc}><div className={styles.progress}></div></div> */}
      </main>
    </div>
  );
}
