import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function OnlineStoresComponent() {
  return (
    <section className="onlineStores">
      <h2>Online stores:</h2>
      <div>
        <Link href="https://smartstore.naver.com/bilpo">
          <div className="onlineStores__logoDiv">
            <Image
              src="/socialIcons/NaverButtonAv1.svg"
              alt="Background"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
        <img src="/socialIcons/CoupangButtonAv1.svg" alt="Coupang Logo" />
        <img src="" alt="11 Street Logo" />
        <img src="" alt="Gmarket Logo" />
        <img src="" alt="Market Kurly Logo" />
        <img src="" alt="Kakao Logo" />
        <img src="" alt="Indus Logo" />
      </div>
    </section>
  );
}
