import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function OnlineStoresComponent() {
  return (
    <main className="onlineStores">
      <h2>Visit our online stores</h2>
      <section>
        <Link href="https://smartstore.naver.com/bilpo">
          <div className="onlineStores__logoDiv">
            <Image
              src="/socialIcons/NaverlogoAv1.svg"
              alt="Naver store icon"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
        <Link href="https://smartstore.naver.com/bilpo">
          <div className="onlineStores__logoDiv">
            <Image
              src="/socialIcons/CoupangLogoAv1.svg"
              alt="Coupang store icon"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
        <Link href="https://smartstore.naver.com/bilpo">
          <div className="onlineStores__logoDiv">
            <Image
              src="/socialIcons/InstagramLogo(With text) Av1.svg"
              alt="Instagram Icon"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
        <Link href="https://smartstore.naver.com/bilpo">
          <div className="onlineStores__logoDiv">
            <Image
              src="/socialIcons/11StreetLogoAv1.svg"
              alt="11Street Icon"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
        <Link href="https://smartstore.naver.com/bilpo">
          <div className="onlineStores__logoDiv">
            <Image
              src="/socialIcons/GMarketLogoAv1.svg"
              alt="GMarket Icon"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
        {/* <img src="" alt="Market Kurly Logo" />
        <img src="" alt="Kakao Logo" />
        <img src="" alt="Indus Logo" /> */}
      </section>
    </main>
  );
}
