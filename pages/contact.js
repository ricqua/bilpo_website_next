import React from "react";
import emailjs from "emailjs-com";
import firebase from "firebase/app";
import LayoutPublic from "../components/LayoutPublic";
import Head from "next/head";

export default function contact() {
  function sendDataToFirestore(payload) {
    try {
      firebase
        .firestore()
        .collection("ContactUsForm")
        .doc(payload.name.value)
        .set({
          date: new Date().toLocaleString(),
          name: payload.name.value,
          phone: payload.phone.value,
          message: payload.message.value,
        })
        .then(console.log("Sent to Firestore"));
    } catch (error) {
      console.log(error);
    }
  }

  function sendEmail(payload) {
    emailjs
      .sendForm(
        "service_gbnx6zl",
        "template_6p0hn8r",
        payload,
        "user_lJcArVfFvxowZmvIrQxgV"
      )
      .then(
        (result) => {
          console.log("email status:", result.text);
        },
        (error) => {
          console.log("email status:", error.text);
        }
      );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = e.target;
    sendDataToFirestore(payload);
    sendEmail(payload);
    e.target.reset();
    // setModalIsOpen(true);
    alert("message sent");
  };

  return (
    <LayoutPublic>
      <Head>
        <title>Bilpo - Contact Us</title>
      </Head>
    </LayoutPublic>
  );
}
