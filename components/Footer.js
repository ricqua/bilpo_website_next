import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <main className="footerSection">
        <div className="footerSection__wrapper">
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
            <strong>Follow us:</strong>

            <a
              className="socialCard"
              target="_blank"
              href="https://www.instagram.com/bilpofood/"
            >
              <img
                src="./socialIcons/instagramIcon(colorGradients_simple).svg"
                alt="Instagram icon"
              />
              <label> /BilpoFood</label>
            </a>

            <a
              className="socialCard"
              target="_blank"
              href="https://www.facebook.com/BilpoFoods/"
            >
              <img src="./socialIcons/facebookIcon.svg" alt="Facebook icon" />
              <label> /BilpoFoods</label>
            </a>
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
        <p className="copyrightNotice">Copyright @ Bilpo 2021</p>
      </main>
    </React.Fragment>
  );
};

export default Footer;
