'use client'

import styles from "./page.module.scss";
import Image from "next/image";
import html from "../../public/img/html.svg";
import css from "../../public/img/css.svg";
import js from "../../public/img/js.svg";
import react from "../../public/img/react.svg";
import sass from "../../public/img/sass.svg";
import Nav from "./ui/components/nav";
import { useState } from "react";

export default function Home() {
  const [level, setLevel] = useState();
  const [colorLevel, setColorLevel] = useState();
  
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
        <div className={styles.progressContent}>
          <div
            id={styles.levelBloc}
            style={{border: `${colorLevel} 1px solid`}}
          >
            <div
              className={(level !== "level0" ? styles.level + " " : "") + styles[level]}
              style={{backgroundColor: colorLevel}}
            ></div>
          </div>
          <p className={styles.devise} style={{color: colorLevel}}>DevInProgress ...</p>
        </div>
        <div className={styles.languages}>
          <Image 
            src={html} alt="iconHtml" width={25}
            onMouseOver={() => {
              setLevel("level60")
              setColorLevel("#FC4D18")
            }}
            onMouseLeave={() => {
              setLevel("level0")
              setColorLevel("#FC4D18")
            }}
          />
          <Image 
            src={css} alt="iconCss" width={25}
            onMouseOver={() => {
              setLevel("level50")
              setColorLevel("#0076BE")
            }}
            onMouseLeave={() => {
              setLevel("level0")
              setColorLevel("#0076BE")
            }}
          />
          <Image 
            src={js} alt="iconJs" width={25}
            onMouseOver={() => {
              setLevel("level60")
              setColorLevel("#F7E018")
            }}
            onMouseLeave={() => {
              setLevel("level0")
              setColorLevel("#F7E018")
            }}
          />
          <Image 
            src={react} alt="iconReact" width={25}
            onMouseOver={() => {
              setLevel("level60")
              setColorLevel("#00DCFF")
            }}
            onMouseLeave={() => {
              setLevel("level0")
              setColorLevel("#00DCFF")
            }}
          />
          <Image 
            src={sass} alt="iconSass" width={25}
            onMouseOver={() => {
              setLevel("level50")
              setColorLevel("#CF649A")
            }}
            onMouseLeave={() => {
              setLevel("level0")
              setColorLevel("#CF649A")
            }}
          />
        </div>
        <div className={styles.projets}>
          <div className={styles.projet}></div>
          <div className={styles.projet}></div>
          <div className={styles.projet}></div>
          <div className={styles.projet}></div>
          <div className={styles.projet}></div>
        </div>
      </main>
    </div>
  );
}
