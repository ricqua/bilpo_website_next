import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { useUser } from "../firebase/auth/useUser";
import firebase from "firebase/app";

const Header = () => {
  // const { user, logout } = useUser();
  const auth = firebase.auth();
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.matches("label")) {
        const navBar = document.getElementById("navToggleInput");
        navBar.checked = false;
      }
    });
  }, []);

  // useEffect(() => {},[])

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
              <Link className="link" href="/#biltong">
                <label>빌통</label>
              </Link>
            </li>
            <li>
              <Link className="link" href="/#merchandise">
                <label>상품</label>
              </Link>
            </li>
            <li>
              <Link className="link" href="/about">
                <label>회사소개</label>
              </Link>
            </li>
            <li>
              <Link className="link" href="/#contactSection">
                <label>고객센터</label>
              </Link>
            </li>

            {firebase.auth().currentUser ? (
              <Link className="link" href="./dashboard">
                <div className="header__login">Dashboard</div>
              </Link>
            ) : (
              <Link className="link" href="./login">
                <div className="header__login">Login</div>
              </Link>
            )}
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
