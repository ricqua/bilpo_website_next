import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import LayoutPublic from "../components/LayoutPublic";
import Modal from "react-modal";

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const sendData = (props) => {
    try {
      firebase
        .firestore()
        .collection("Giveaway")
        .doc(props.name.value)
        .set({
          date: new Date().toLocaleString(),
          name: props.name.value,
          email: props.email.value,
        })
        .then(console.log("Sent to Firestore"));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = e.target;
    sendData(payload);
    e.target.reset();
    // console.alert("giveaway entered");
    setModalIsOpen(true);
  };

  return (
    <LayoutPublic>
      <Head>
        <title>Bilpo - Home</title>
      </Head>
      <main className="home">
        <section className="home__heroSection">
          <div>Hero section</div>
        </section>

        <section className="home__giveawaySection">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            ariaHideApp={false}
            className="modal"
          >
            <img src="/tick.svg" alt="tick icon" />
            <strong>Success!!!</strong>
            <p>
              Thank you for entering the giveaway. Winner will be contacted
              directly using the email provided and an announcement will be
              posted to Instagram.
            </p>
            <button
              onClick={() => setModalIsOpen(false)}
              className="button_light--black"
            >
              <p>
                Continue <span>❯</span>
              </p>
            </button>
          </Modal>

          <div>
            {/* <div className="home__giveawaySection__img">
              <Image
                src="/giveawayImages/307A0400 edit01.png"
                alt=""
                width={1200}
                height={800}
                loading="lazy"
              />
            </div> */}
            <div className="home__giveawaySection__info">
              <h2>Giveaway</h2>
              <p>- 무료 빌통 응모하기 -</p>

              <p>(2월 1일 ~ 2월 28일)</p>
              <p>
                빌포팀이 고객님께 선물하는 빌통! 경품응모하고 무료 빌통 2봉을
                받아가세요. 추첨발표는 마감일 다음에 발표됩니다.
              </p>
              <form className="backorder__form" onSubmit={handleSubmit}>
                <div className="inputBox_effect1">
                  <input type="text" required name="name" />
                  <span>Name</span>
                </div>
                <div className="inputBox_effect1">
                  <input type="text" required name="email" />
                  <span>Email</span>
                </div>

                <button className="button__lightPrimary">Enter Giveaway</button>
              </form>
            </div>
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
