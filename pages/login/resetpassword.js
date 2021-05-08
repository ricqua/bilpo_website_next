import React, { useState } from "react";
import Link from "next/link";
import firebase from "firebase/app";

import { useRouter } from "next/router";

export default function resetpassword() {
  const [resetPasswordError, setResetPasswordError] = useState("");

  const handleSubmit = (e) => {
    const email = e.target.email.value;
    e.preventDefault();
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log(`Reset password email sent to: ${email}`);
      })
      .catch((error) => {
        console.log("Error resetting password:", error);
        setResetPasswordError(error.message);
      });
    e.target.reset();
  };

  return (
    <React.Fragment>
      <div className="authPage">
        <div className="authPage__wrapper">
          <img
            src="/bilpoLogos/Bilpo Logo Hv4 (Full-white).svg"
            alt="Bilpo logo"
          />
          <h2>Reset Password</h2>
          {resetPasswordError ? <p>Error: {resetPasswordError}</p> : null}
          <form onSubmit={handleSubmit}>
            <input type="email" required placeholder="email" name="email" />
            <button className="button__light authPage__confirmButton">
              Reset
            </button>
          </form>
          <p>
            <label>Already have an account? </label>

            <Link href="/login">
              <a>Log In</a>
            </Link>
          </p>
          <p>
            <Link href="/">
              <a>Back to website</a>
            </Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
