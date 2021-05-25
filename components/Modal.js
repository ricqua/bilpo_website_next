import React from "react";
import { useRouter } from "next/router";

export default function Modal({
  title,
  description,
  button,
  route,
  showModal,
  setShowModal,
}) {
  function handleCloseModal() {
    // console.log("closing modal");
    setShowModal(false);
    // useRouter().router.push(route);
  }

  return (
    <React.Fragment>
      <main className="modal">
        <div>
          <img src="/tick.svg" alt="tick icon" />
          <strong>{title}</strong>
          <p>{description}</p>
          <button onClick={handleCloseModal} className="button_light">
            <p>
              {button} <span>❯</span>
            </p>
          </button>
        </div>
      </main>
    </React.Fragment>
  );
}
