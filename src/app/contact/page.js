'use client';

import styles from "@/app/contact/contact.module.scss";
import { faGithub, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
  e.preventDefault();

  const name = form.current.user_name.value.trim();
  const email = form.current.user_email.value.trim();
  const message = form.current.message.value.trim();

  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\- ]{2,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const messageRegex = /^.{10,}$/;

  if (!nameRegex.test(name)) {
    setError("Le nom est invalide.");
    setSent(false);
    return;
  }

  if (!emailRegex.test(email)) {
    setError("L'email est invalide.");
    setSent(false);
    return;
  }

  if (!messageRegex.test(message)) {
    setError("Le message doit contenir au moins 10 caractères.");
    setSent(false);
    return;
  }

  emailjs
    .sendForm(
      "service_9xkv74r",
      "template_j4bmokp",
      form.current,
      "h2JChoIcV98Vo9yBm"
    )
    .then(
      (result) => {
        console.log(result.text);
        setSent(true);
        setError(false);
        form.current.reset();
      },
      (err) => {
        console.error(err.text);
        setError("Une erreur est survenue lors de l'envoi.");
        setSent(false);
      }
    );
};

  return (
    <main id="contact" className={styles.contact}>
      <div className={styles.formContent}>
        <h1 className={styles.title}>Contact</h1>

        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <input type="text" name="user_name" className={styles.name} placeholder="Nom" required />
          <input type="email" name="user_email" className={styles.email} placeholder="Email" required />
          <textarea name="message" className={styles.message} placeholder="Message" required />
          <button type="submit" className={styles.button}>Envoyer</button>
        </form>

        {sent && <p className={styles.success}>Message envoyé avec succès !</p>}
        {error && <p className={styles.error}>{error}</p>}
      </div>

      <div className={styles.bottomContent}>
        <div className={styles.reseaux}>
          <Link href="https://www.linkedin.com/in/siakaandhum/" className={styles.link} target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} className={styles.reseau} />
          </Link>
          <Link href="https://github.com/ASiaka" className={styles.link} target="_blank">
            <FontAwesomeIcon icon={faGithub} className={styles.reseau} />
          </Link>
          <Link href="https://wa.me/+33665109836" className={styles.link} target="_blank">
            <FontAwesomeIcon icon={faWhatsapp} className={styles.reseau} />
          </Link>
        </div>
      </div>
    </main>
  );
}