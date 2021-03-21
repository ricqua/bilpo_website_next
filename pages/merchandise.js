import React from "react";
import styles from "../styles/merch.module.css";

function Footer() {
  return (
    <React.Fragment>
      <main className={styles.merch_main}>
        <h2>상품</h2>
        <div className={styles.merch_cards}>
          <div className={styles.merch_card}>
            <img
              src="./merchandise/bottleOpeners.jpg"
              alt="Bilpo bottle openers"
            />
            <p>빌포 우드 오프너 (미니 병따개)</p>
            <p>₩7,800</p>
          </div>
          <div className={styles.merch_card}>
            <img
              src="./merchandise/coaster.jpg"
              alt="Bilpo laser engraved coasters"
            />
            <p>빌포 코르크 코스터 컵받침대</p>
            <p>₩2,800</p>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Footer;
