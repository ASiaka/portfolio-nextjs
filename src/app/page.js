import styles from "./page.module.scss";
import Nav from "./ui/components/nav";
import Acceuil from "./acceuil/acceuil";
import Services from "./services/services";
import Projets from "./projets/page";
import Contact from "./contact/page";

export default function Home() {
  
  return (
    <div className={styles.home}>
      <Nav />
      <Acceuil />
      <Services />
      <Projets />
      <Contact />
    </div>
  );
}
