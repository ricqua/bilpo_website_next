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
          <h2>메세지 남기기</h2>
          <p>
            고객님들의 의견을 소중하게 생각합니다. 문의사항이나 피드백을
            남겨주세요. 대량주문 및 기업체 선물세트 주문도 받고있습니다.
          </p>
          <p>페이스북, 인스타그램, 카카오톡, 이메일 연락도 환영합니다!</p>
        </div>
        {/* <div className="contact__form"> */}
        <form onSubmit={handleSubmit}>
          <div className="inputBox_effect1">
            <input type="text" required name="name" />
            <span>이름</span>
          </div>
          <div className="inputBox_effect1">
            <input type="text" required name="phone" />
            <span>Phone</span>
          </div>
          <div className="inputBox_effect1">
            <textarea type="text" required name="message" />
            <span>내용</span>
          </div>
          <button className="button__lightPrimary">
            작성 <span>❯</span>
          </button>
        </form>
        {/* </div> */}
      </section>
    </React.Fragment>
  );
};

export default ContactComponent;
