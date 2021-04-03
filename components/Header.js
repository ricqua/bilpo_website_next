import React from "react";
import Link from "next/link";

const Header = () => {
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
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;
