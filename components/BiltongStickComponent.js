import React from "react";
import Image from "next/image";
import BiltongStickTablesComponent from "./BiltongStickTablesComponent";

export default function BiltongStickComponent() {
  return (
    <section className="biltongSticks">
      <div className="biltongSticks__wrapper">
        <div className="biltongSticks__imageDiv">
          <Image
            src="/biltong/KakaoTalk_20210611_171202711.jpg"
            alt="Biltong bag image"
            loading="eager"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="biltongSticks__table">
          <h2>Biltong Stick orders</h2>
          <p>
            Our sticks are amazing/ Select the stick you want at the bottom and
            proceed to purchase.
          </p>
          <BiltongStickTablesComponent />
        </div>
      </div>
    </section>
  );
}
