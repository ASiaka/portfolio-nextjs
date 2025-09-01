import styles from "./page.module.scss";
import Nav from "./ui/components/nav";
import Acceuil from "./acceuil/acceuil";
import Home from "./home/page";
import Parcours from "./parcours/page";
import Projets from "./projets/page";
import Contact from "./contact/page";

export default function App() {
  
  return (
    <div className={styles.app}>
      <Nav />
      {/* <Acceuil /> */}
      <Home />
      <Parcours />
      <Projets />
      <Contact />
    </div>
  );
}
