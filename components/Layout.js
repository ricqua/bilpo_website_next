import React from "react";
import styles from "../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
