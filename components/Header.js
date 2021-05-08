import React, { useEffect } from "react";
import Link from "next/link";
// import { useUser } from "../firebase/auth/useUser";

const Header = () => {
  // const { user, logout } = useUser();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.matches("label")) {
        const navBar = document.getElementById("navToggleInput");
        navBar.checked = false;
      }
    });
  }, []);

  return (
    <React.Fragment>
      <div className="header">
        <Link href="/">
          <img
            src="./bilpoLogos/Bilpo Logo Hv4 (Name-black).svg"
            alt="Bilpo logo"
            className="logo"
          />
        </Link>
        <input
          type="checkbox"
          className="header__navToggleInput"
          id="navToggleInput"
        />
        <label htmlFor="navToggleInput" className="header__navToggleLabel">
          <span></span>
        </label>
        <nav>
          <ul>
            <li>
              <Link className="link" href="/">
                <label>홈</label>
              </Link>
            </li>
            <li>
              <Link className="link" href="/giftsets">
                <label>선물세트</label>
              </Link>
            </li>
            <li>
              <Link className="link" href="/biltong">
                <label>빌통</label>
              </Link>
            </li>
            <li>
              <Link className="link" href="/merchandise">
                <label>상품</label>
              </Link>
            </li>
            <li>
              <Link className="link" href="/about">
                <label>회사소개</label>
              </Link>
            </li>
            <li>
              <Link className="link" href="#contactSection">
                <label>고객센터</label>
              </Link>
            </li>
            <Link className="link" href="./login">
              <div className="header__login">Dashboard</div>
            </Link>
            {/* <div>
              {user ? (
                <Link className="link" href="./dashboard">
                  <div className="header__login">Dashboard</div>
                </Link>
              ) : (
                <Link className="link" href="./auth">
                  <div className="header__login">Wholesale</div>
                </Link>
              )}
            </div> */}
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
