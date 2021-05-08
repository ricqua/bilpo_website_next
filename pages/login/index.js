import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import firebase from "firebase/app";
const auth = firebase.auth();

export default function index() {
  const router = useRouter();
  // const { user, logout } = useUser();
  const [signInError, setSignInError] = useState("");

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     console.log(user);
  //   });
  // }, []);

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

    auth
      .signInWithEmailAndPassword(payload.email.value, payload.password.value)
      .then((cred) => {
        router.push("/dashboard");
        console.log(cred);
      })
      .catch((error) => {
        console.log("Error signing in: ", error.message);
        setSignInError(error.message);
      });
  }

  return (
    <React.Fragment>
      <div className="authPage">
        <img
          src="/bilpoLogos/Bilpo Logo Hv4 (Full-white).svg"
          alt="Bilpo logo"
        />
        <h2>Log In</h2>
        {/* <p>
          Note: This is a log in portal for Bilpo's wholesale clients and
          contractors only. If you do not have credentials or want to inquire
          about becoming a contractor or seeing our wholesale pricing then
          please contact Richard (English) or Moonsung (Korean) at
          info@bilpo.co.kr.
        </p> */}
        <div className="firebaseAuth">
          {/* {signInError ? <p>*Error: {signInError}</p> : null} */}
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" required placeholder="Email" />
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
            />
            <button>Log In</button>
          </form>
          <Link href="./login/signup">
            <button>Sign up</button>
          </Link>
          <Link href="./login/resetpassword">
            <button>Forgot password</button>
          </Link>
          <Link href="./login/checkuser">
            <button>Check user</button>
          </Link>
        </div>
        <p>
          <Link href="/">
            <a>Back to website ></a>
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
}
