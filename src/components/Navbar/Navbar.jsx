import React, { useState } from "react";

import styles from "./Navbar.module.css";

import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuopen, setmenuopen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuopen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menubtton"
          onClick={() => setmenuopen(!menuopen)}
        />
        <ul
          className={`${styles.menuitem} ${menuopen && styles.menuOpen}`}
          onClick={() => setmenuopen(!menuopen)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experiance">Experiance</a>
          </li>

          <li>
            <a href="#Projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
