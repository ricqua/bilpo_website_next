import React, { useState } from "react";
import Head from "next/head";
import emailjs from "emailjs-com";
import Modal from "react-modal";

// import firebase from "firebase/app";
// import initFirebase from "../components/firebase";
// initFirebase();
// const db = firebase.database();

const backorder = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gbnx6zl",
        "template_br67bbm",
        e.target,
        "user_lJcArVfFvxowZmvIrQxgV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setModalIsOpen(true);

    // const backorderList = db.ref("backorderList");
    // const newBackorderList = backorderList.push();
    // newBackorderList
    //   .set({
    //     name: isBackorder.name,
    //     email: isBackorder.email,
    //     phone: isBackorder.phone,
    //     address: isBackorder.address,
    //     details: isBackorder.details,
    //   })
    //   .then(() => {
    //     alert("Succsessful");
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
  };

  return (
    <React.Fragment>
      <Head>
        <title>Bilpo - Backorder</title>
      </Head>
      <main className="backorder">
        <img
          src="/bilpoLogos/Bilpo Logo Hv4 (Full-black).svg"
          alt="Bilpo logo"
          className="backorder__logo"
        />
        <h2 className="backorder__title">Backorder Form</h2>

        <form className="backorder__form" onSubmit={handleSubmit}>
          <div className="inputBox_effect1">
            <input type="text" required name="name" />
            <span>Name</span>
          </div>
          <div className="inputBox_effect1">
            <input type="text" required name="email" />
            <span>Email</span>
          </div>
          <div className="inputBox_effect1">
            <input type="text" required name="phone" />
            <span>Phone</span>
          </div>
          <div className="inputBox_effect1">
            <input type="text" required name="address" />
            <span>Delivery Address</span>
          </div>
          <div className="inputBox_effect1">
            <textarea type="text" required name="details" />
            <span>Order details</span>
          </div>
          <button className="button__lightPrimary">Submit</button>
        </form>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          ariaHideApp={false}
          className="modal"
        >
          <img src="/tick.svg" alt="tick icon" />
          <strong>Success!!!</strong>
          <p>Thank you for your order. We will ship as soon as possible</p>
          <button
            onClick={() => setModalIsOpen(false)}
            className="button_light--black"
          >
            <p>
              Continue <span>❯</span>
            </p>
          </button>
        </Modal>
        {/* <p className="copyrightNotice backorder__copyrightNotice ">
          Copyright @ Bilpo 2021
        </p> */}
      </main>
    </React.Fragment>
  );
};

export default backorder;
