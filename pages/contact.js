import React from "react";

function contact() {
  return (
    <React.Fragment>
      <section className="contact">
        <div className="contact__info">
          <h2>Contact Us</h2>
          <p>
            If you’re interested in our services, have any questions or want to
            share feedback, please send us a message using this contact form or
            email us on info@siamlocalize.com
          </p>
        </div>
        <div className="contact__form">
          <form action="submit">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea type="text" placeholder="Message" />
            <button>
              <p>
                Submit <span>❯</span>
              </p>
            </button>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
}

export default contact;
