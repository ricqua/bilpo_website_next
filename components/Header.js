import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <React.Fragment>
      <div className={styles.header}>
        <Link href="/about">
          <img
            src="./bilpoLogos/Bilpo Logo Hv4 (Name-black).svg"
            alt="Bilpo logo"
            className={styles.logo}
          />
        </Link>
        <input type="checkbox" className={styles.nav_toggle} id="nav_toggle" />
        <label htmlFor="nav_toggle" className={styles.nav_toggle_label}>
          <span></span>
        </label>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link className={styles.link} href="/home">
                <label>홈</label>
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/giftsets">
                <label>선물세트</label>
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/biltong">
                <label>빌통</label>
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/merchandise">
                <label>상품</label>
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/about">
                <label>회사소개</label>
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/contact">
                <label>고객센터</label>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Header;
