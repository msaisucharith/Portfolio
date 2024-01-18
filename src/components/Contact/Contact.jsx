import styles from "./Contact.module.css";

import { getImageUrl } from "../../utils";

function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>Contact</h1>
        <p> feel free to reach</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email" />
          <a href="mailto:msaisucharith">msaisucharith@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="email" />
          <a href="https://www.linkedin.com/in/venkata-naga-sai-sucharith-6255001a4/">
            venkata naga sai sucharith
          </a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="email" />
          <a href="https://github.com/msaisucharith">Saisucharith</a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
