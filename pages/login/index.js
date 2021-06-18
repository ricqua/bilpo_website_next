import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import firebase from "firebase/app";

export default function index() {
  const router = useRouter();
  const [signInError, setSignInError] = useState("");

  // function Redirect({ to }) {
  //   const router = useRouter();
  //   useEffect(() => {
  //     if (user) {
  //       router.push(to);
  //     }
  //   }, [to]);
  //   return "Redirecting";
  // }
  // if (user) {
  //   return <Redirect to="/dashboard" />;
  // }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = e.target;

    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email.value, payload.password.value)
      .then((cred) => {
        router.push("/dashboard");
        // console.log(cred);
      })
      .catch((error) => {
        console.log("Error signing in: ", error.message);
        setSignInError(error.message);
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
          {/* <h1>Wholesale</h1> */}
          <h1>Log In</h1>

          {/* <p>
          Note: This is a log in portal for Bilpo's wholesale clients and
          contractors only. If you do not have credentials or want to inquire
          about becoming a contractor or seeing our wholesale pricing then
          please contact Richard (English) or Moonsung (Korean) at
          info@bilpo.co.kr.
        </p> */}
          <div>
            {signInError ? (
              <p className="authPage__errorMessage">Error: {signInError}</p>
            ) : null}
            <form onSubmit={handleSubmit}>
              <input type="email" name="email" required placeholder="Email" />
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
              />
              <button className="button__light authPage__confirmButton">
                Log In
              </button>
            </form>
            {/* <hr /> */}
          </div>
          <div>
            {/* <Link href="./login/signup">
              <button className="button__light">Sign up</button>
            </Link> */}
            <Link href="./login/resetpassword">
              {/* <button className="button__light">Forgot password</button> */}
              <a>Forgot password</a>
            </Link>
            {/* <Link href="./login/checkuser">
            <button className="button__light">Check user</button>
          </Link> */}

            <Link href="https://bilpo.co.kr/">
              <a>Back to website</a>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
