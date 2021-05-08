import React, { useState, useEffect } from "react";
import Link from "next/link";

import firebase from "firebase/app";
import "firebase/auth";

// import FirebaseAuth from "../../firebase/auth/FirebaseAuth";
import { useRouter } from "next/router";

export default function resetpassword() {
  async function handleSubmit(e) {
    var auth = firebase.auth();
    e.preventDefault();
    await auth
      .sendPasswordResetEmail("info@bilpo.co.kr")
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch((error) => {
        // setError("Error resetting password:", error);
        console.log("Error resetting password:", error);
      });
  }

  return (
    <React.Fragment>
      <div className="authPage">
        <img
          src="/bilpoLogos/Bilpo Logo Hv4 (Full-white).svg"
          alt="Bilpo logo"
        />
        <h2>Reset Password</h2>
        <p>Use this page to reset your password</p>
        <div className="firebaseAuth">
          <form onSubmit={handleSubmit}>
            <input type="email" required placeholder="email" name="email" />
            {/* <div className="inputBox_effect1">
              <input type="text" required name="email" />
              <span>Email</span>
            </div> */}
            <button>Reset</button>
          </form>
        </div>
        <p>
          <Link href="/login">
            <a>Log In</a>
          </Link>
        </p>
        <p>
          <Link href="/">
            <a>Back to website ></a>
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
}
