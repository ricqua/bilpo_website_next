import React, { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";
import firebase from "firebase/app";

export default function GiveawayComponent() {
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
    <section className="giveaway">
      <Image
        src="/giveawayImages/whiteMarbleBackground.jpg"
        alt="Marble background image"
        loading="eager"
        layout="fill"
        objectFit="cover"
      />
      <div className="giveaway__imageDiv">
        <Image
          src="/giveawayImages/307A0400 edit01.png"
          alt="Biltong bag image"
          loading="eager"
          layout="fill"
          objectFit="contain"
          // quality={30}
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
        <p className="giveaway__description">
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
  );
}
