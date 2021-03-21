import React from "react";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <React.Fragment>
      <main className={styles.footerSection_main}>
        <div className={styles.footerSection_wrapper}>
          <div>
            <strong>Bilpo Foods</strong>
            <p>Tel. 010-4295-2928</p>
            <p>info@bilpo.co.kr</p>
            <p>서울시 송파구 백제고분로 36길 26, 1~4층</p>
            <p>Biz License: 828-49-00601</p>
            <p>Online License: 2020-서울송파-2829</p>
          </div>
          <div>
            <strong>Bank Account</strong>
            <p>신한은행 </p>
            <p>계좌 번호: 110-453-949540</p>
            <p>황문성 (빌포푸드) </p>
          </div>
          <div>
            <p>
              <label>/BilpoFood</label>
            </p>
            <p>
              <label>/BilpoFoods</label>
            </p>
          </div>
          <div>
            <p>
              <a>Terms of Use</a>
            </p>
            <p>
              <a>Personal Information Processing Policy</a>
            </p>
          </div>
        </div>
        <p className={styles.copyrightNotice}>Copyright @ Bilpo 2021</p>
      </main>
    </React.Fragment>
  );
}

export default Footer;
