import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import firebase from "firebase/app";
const auth = firebase.auth();
const db = firebase.firestore();

export default function signup() {
  const [isSignUpError, setSignUpError] = useState("");
  const [isBilpoTeam, setBilpoTeam] = useState(false);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    const payload = e.target;

    // if (payload.password.value !== payload.passwordCheck.value) {
    //   setSignUpError("Error: Passwords do not match");
    // }
    auth
      .createUserWithEmailAndPassword(
        payload.email.value,
        payload.password.value
      )
      .then((cred) => {
        console.log(cred);
        db.collection("Users")
          .doc(cred.user.uid)
          .set({
            companyName: payload.companyName.value,
            phone: payload.phone.value,
            contactPerson: payload.contactPerson.value,
            bilpoteam: isBilpoTeam,
          })
          .then(() => {
            router.push("/dashboard");
          });
      })
      .catch((error) => {
        console.log("Error signing up: ", error);
        setSignUpError(error.message);
      });
  }

  return (
    <React.Fragment>
      <div className="authPage">
        <div className="authPage__wrapper">
          <img
            src="/bilpoLogos/Bilpo Logo Hv4 (Full-white).svg"
            alt="Bilpo logo"
          />
          <h2>Add new account</h2>
          {/* <p>
          Note: This is a log in portal for Bilpo's wholesale clients and
          contractors only. If you do not have credentials or want to inquire
          about becoming a contractor or seeing our wholesale pricing then
          please contact Richard (English) or Moonsung (Korean) at
          info@bilpo.co.kr.
        </p> */}
          <div>
            <form onSubmit={handleSubmit}>
              {isSignUpError ? <p>Error: {isSignUpError}</p> : null}
              <input
                type="text"
                name="companyName"
                required
                placeholder="Company name"
              />
              <input
                type="text"
                name="contactPerson"
                required
                placeholder="Contact persons name"
              />

              <input type="email" name="email" required placeholder="Email" />
              <input type="text" name="phone" required placeholder="Phone" />

              <input
                type="password"
                name="password"
                required
                placeholder="Password (Temp)"
              />
              <label>Add to the Bilpo team: </label>
              <input
                type="checkbox"
                name="bilpoteam"
                onChange={() => {
                  setBilpoTeam(!isBilpoTeam);
                }}
              />
              {/* <input
            type="password"
            name="passwordCheck"
            required
            placeholder="Confirm password"
          /> */}
              <button className="button__light authPage__confirmButton">
                Create account
              </button>
            </form>
          </div>
          <div>
            {/* <label>Already have an account? </label>
            <Link href="/login">
              <a>Log in</a>
            </Link> */}
            <p>
              <Link href="/dashboard">
                <a>Back to dashboard</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
