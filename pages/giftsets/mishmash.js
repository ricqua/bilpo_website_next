import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import LayoutPublic from "../../components/LayoutPublic";
import { giftsets } from "../../data/productData";

import mishmashGiftsetImages from "../../public/giftsets/mishmash/mishmashGiftsetImages";

export default function index() {
  const data = giftsets[0].products[0];
  const logo = giftsets[0].logo;

  const galleryImage = (
    <img
      src="/giftsets/Bilpo-biltongGiftsetAv1.jpg"
      alt="description"
      className="giftset__galleryItem"
    />
    // <div className="giftset__galleryItem">
    //   <Image
    //     src="/giftsets/Bilpo-biltongGiftsetAv1.jpg"
    //     alt="description"
    //     key={index}
    //     loading="eager"
    //     layout="fill"
    //     objectFit="contain"
    //   />
    // </div>
  );

  return (
    <LayoutPublic>
      <Head>
        <title>Bilpo - Mishmash giftset</title>
      </Head>
      <main className="giftset">
        <div className="giftset__imageDiv">
          <Image
            src={data.img}
            alt="Biltong bag image"
            loading="eager"
            layout="fill"
            objectFit="cover"
            // quality={30}
          />
        </div>
        {/* <h2>{data.company}</h2>
        <h3>{data.products[0].title}</h3>
        <div className="biltongSticks__imageDiv">
          <Image
            src="/biltong/KakaoTalk_20210611_171202711.jpg"
            alt="Mishmash logo"
            loading="eager"
            layout="fill"
            objectFit="contain"
            // quality={30}
          />
        </div> */}

        <div className="giftset__logoDiv">
          <Image
            src={logo}
            alt=""
            loading="eager"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <section className="giftset__infoDiv">
          <h3 className="giftset__title">{data.title}</h3>
          <hr />
          {/* <div>
            <p className="giftset__sale">{data.sale}</p>
            <p className="giftset__price">{data.price}</p>
          </div> */}
          <p className="giftset__description">{data.description}</p>
          <strong>선물세트 상품구성</strong>
          <ul className="giftset__inventory">
            {data.inventory.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="giftset__links">
            {/* <Link href={data.naver}>
              <img
                src="socialIcons/NaverButtonAv1.svg"
                alt="Link to Naver smart store"
              />
            </Link> */}
            {/* <Link href={data.coupang}>
              <img
                src="socialIcons/CoupangButtonAv1.svg"
                alt="Link to Naver smart store"
              />
            </Link> */}
            {/* <Link href="">
              <button className="button__light">Find out more</button>
            </Link> */}

            <p>
              <strong>[개인주문] </strong>
              {data.orderNote}
            </p>
            <p>
              <strong>[단체주문] </strong>
              {data.wholesaleNote}
            </p>
            <p>
              <strong>[otherNote] </strong>
              {data.otherNote}
            </p>
          </div>
        </section>

        <section className="giftset__galleryItems">
          {mishmashGiftsetImages.map((image) => {
            <img
              src="/giftsets/mishmash/Bilpo-biltongGiftsetAv1.jpg"
              alt="description"
              className="giftset__galleryItem"
            />;
          })}

          <img
            src="/giftsets/Bilpo-biltongGiftsetAv1.jpg"
            alt="description"
            className="giftset__galleryItem"
          />
          <img
            src="/giftsets/Bilpo-biltongGiftsetAv1.jpg"
            alt="description"
            className="giftset__galleryItem"
          />
          <img
            src="/giftsets/Bilpo-biltongGiftsetAv1.jpg"
            alt="description"
            className="giftset__galleryItem"
          />
          {galleryImage}
          {galleryImage}
        </section>
      </main>
    </LayoutPublic>
  );
}
