import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import LayoutPublic from "../components/LayoutPublic";
import Modal from "../components/Modal";
import firebase from "firebase/app";
import Link from "next/link";
import InstagramFeed from "../components/InstagramFeed";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  function sendDataToFirestore(props) {
    try {
      firebase
        .firestore()
        .collection("Giveaway")
        .doc(props.name.value)
        .set({
          date: new Date().toLocaleString(),
          name: props.name.value,
          phone: props.phone.value,
        })
        .then(console.log("Sent to Firestore"));
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = e.target;
    sendDataToFirestore(payload);
    e.target.reset();
    setShowModal(true);
  };

  return (
    <LayoutPublic>
      <Head>
        <title>Bilpo - Home</title>
      </Head>
      <main className="home">
        <section className="home__heroSection">
          <img
            className="home__heroSection__logo"
            src="/bilpoLogos/Bilpo Logo Hv4 (Full-white).svg"
            alt="Bilpo logo"
          />
          {/* <div className="home__heroSection__links">
            <Link href="https://smartstore.naver.com/bilpo">
              <img
                src="socialIcons/NaverButtonAv1.svg"
                alt="Link to Naver smart store"
              />
            </Link>
            <Link href="https://store.coupang.com/vp/vendors/A00419049/products?vendorName=%EB%B9%8C%ED%8F%AC%ED%91%B8%EB%93%9C&productId=0&outboundShippingPlaceId=3473799&freeShipOverAmount=0">
              <img
                src="socialIcons/CoupangButtonAv1.svg"
                alt="Link to Coupang store"
              />
            </Link>
          </div> */}
        </section>

        <section className="giveaway">
          <div className="giveaway__imageDiv">
            <Image
              src="/giveawayImages/307A0400 edit01.png"
              alt="marble background"
              width={958}
              height={768}
              loading="eager"
            />
          </div>
          {showModal ? (
            <Modal
              id="giveawayModal"
              title="Success"
              description="Thank you for entering the giveaway. Winner will be contacted
            directly using the email provided and an announcement will be posted
            to Instagram."
              button="Continue"
              route=""
              showModal={showModal}
              setShowModal={setShowModal}
            />
          ) : null}

          <form onSubmit={handleSubmit}>
            <h2>Giveaway</h2>
            <p>- 무료 빌통 응모하기 -</p>

            <p>(5월 1일 ~ 5월 31일)</p>
            <p>
              빌포팀이 고객님께 선물하는 빌통! 경품응모하고 무료 빌통 2봉을
              받아가세요. 추첨발표는 마감일 다음에 발표됩니다.
            </p>
            <div className="inputBox_effect1">
              <input type="text" required name="name" />
              <span>이름</span>
            </div>
            <div className="inputBox_effect1">
              <input type="text" required name="phone" />
              <span>Phone</span>
            </div>

            <button className="button__lightPrimary">
              경품응모하기 <span>❯</span>
            </button>
          </form>
        </section>

        <section className="instagram">
          <InstagramFeed counterStart="0" counterEnd="6" />
        </section>

        <section className="biltongVsJerky">
          <div>
            <img
              src="/homeImages/biltongVsJerky.png"
              alt="chart showing difference between Biltong and Jerky"
            />
          </div>
          <div>
            <div>
              <iframe
                // width="560"
                // height="315"
                src="https://www.youtube.com/embed/ieOMtTYUAmA"
                title="YouTube video player"
                frameBorder="0"
                background="none"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section className="instagram">
          {/* <h2>Instagram</h2> */}
          <InstagramFeed counterStart="7" counterEnd="13" />
        </section>

        <section className="shipping">
          <img src="/homeImages/shippingImage.png" alt="shipping image" />
          <div>
            <h2>무료배송</h2>
            <p>5봉/ 8봉 묶음상품 주문시</p>
          </div>
        </section>

        <section className="instagram">
          <InstagramFeed counterStart="14" counterEnd="20" />
        </section>
      </main>
    </LayoutPublic>
  );
};

export default Home;
