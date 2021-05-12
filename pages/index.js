import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import LayoutPublic from "../components/LayoutPublic";
import Modal from "../components/Modal";
import firebase from "firebase/app";

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
            src="/bilpoLogos/Bilpo Logo Hv4 (Full-white).svg"
            alt="Bilpo logo"
          />
          {/* <button>Go to Naver</button> */}
        </section>

        <section className="giveaway">
          <div className="giveaway__imageDiv">
            <Image
              src="/giveawayImages/307A0400 edit01.png"
              alt="marble background"
              width={1200}
              height={800}
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

            <p>(2월 1일 ~ 2월 28일)</p>
            <p>
              빌포팀이 고객님께 선물하는 빌통! 경품응모하고 무료 빌통 2봉을
              받아가세요. 추첨발표는 마감일 다음에 발표됩니다.
            </p>
            <div className="inputBox_effect1">
              <input type="text" required name="name" />
              <span>Name</span>
            </div>
            <div className="inputBox_effect1">
              <input type="text" required name="phone" />
              <span>Phone</span>
            </div>

            <button className="button__lightPrimary">Enter Giveaway</button>
          </form>
        </section>
        <section className="biltongVsJerky">
          <div>
            <img
              src="/homeImages/biltongVsJerky.png"
              alt="chart showing difference between Biltong and Jerky"
            />
          </div>
          <div>
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/ieOMtTYUAmA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </section>

        <section className="home__biltongVsJerkySection">
          <div>Instagram section</div>
        </section>
        <section className="home__shippingSection">
          <div>Shipping section</div>
        </section>
      </main>
    </LayoutPublic>
  );
};

export default Home;
