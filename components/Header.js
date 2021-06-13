import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
// import { useUser } from "../firebase/auth/useUser";
import { UserContext } from "../pages/_app";
import firebase from "firebase/app";

const Header = () => {
  // const { user, logout } = useUser();
  const auth = firebase.auth();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { isContext, setContext } = useContext(UserContext);

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
                <label>HOME</label>
              </Link>
            </li>
            <li>
              <Link className="link" href="/giftsets">
                <label>GIFTSETS</label>
              </Link>
            </li>
            <li>
              <Link className="link" href="/#biltong">
                <label>BILTONG BAGS</label>
              </Link>
            </li>
            <li>
              <Link className="link" href="/#biltong">
                <label>BILTONG STICKS</label>
              </Link>
            </li>
            <li>
              <Link className="link" href="/#biltong">
                <label>SALAMI</label>
              </Link>
            </li>
            <li>
              <Link className="link" href="/#merchandise">
                <label>MERCHANDISE</label>
              </Link>
            </li>
            {/* <li>
              <Link className="link" href="/about">
                <label>ABOUT</label>
              </Link>
            </li> */}
            <li>
              <Link className="link" href="/#contactSection">
                <label>CONTACT</label>
              </Link>
            </li>
          </ul>
        </nav>
        {firebase.auth().currentUser ? (
          <Link className="link" href="./dashboard">
            <div className="header__login">
              {isContext.companyName} dashboard
            </div>
          </Link>
        ) : (
          <Link className="link" href="./login">
            <div className="header__login">Login</div>
          </Link>
        )}
      </div>
    </React.Fragment>
  );
};

export default Header;
