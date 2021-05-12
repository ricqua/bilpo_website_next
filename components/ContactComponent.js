import React from "react";
import emailjs from "emailjs-com";
import firebase from "firebase/app";

const ContactComponent = () => {
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
    <React.Fragment>
      <section id="contactSection" className="contact">
        <div className="contact__info">
          <div className="contact__info__headerLine" />
          <h2>Contact Us</h2>
          <p>
            If you’re interested in our services, have any questions or want to
            share feedback, please send us a message using this contact form or
            email us on info@bilpo.co.kr
          </p>
        </div>
        {/* <div className="contact__form"> */}
        <form onSubmit={handleSubmit}>
          <div className="inputBox_effect1">
            <input type="text" required name="name" />
            <span>Name</span>
          </div>
          <div className="inputBox_effect1">
            <input type="text" required name="phone" />
            <span>Phone</span>
          </div>
          <div className="inputBox_effect1">
            <textarea type="text" required name="message" />
            <span>Message</span>
          </div>
          <button>
            <p>
              Submit <span>❯</span>
            </p>
          </button>
        </form>
        {/* </div> */}
      </section>
    </React.Fragment>
  );
};

export default ContactComponent;
