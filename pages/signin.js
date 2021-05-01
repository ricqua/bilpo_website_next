import React, { useState, useEffect } from "react";
import FirebaseAuth from "../firebase/auth/FirebaseAuth";
import { useRouter } from "next/router";
import Link from "next/link";
import { useUser } from "../firebase/auth/useUser";

const signin = () => {
  const router = useRouter();
  const { user, logout } = useUser();

  function Redirect({ to }) {
    const router = useRouter();
    useEffect(() => {
      if (user) {
        router.push(to);
      }
    }, [to]);
    return "Redirecting";
  }
  if (user) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <div className="authPage">
        <img
          src="/bilpoLogos/Bilpo Logo Hv4 (Full-white).svg"
          alt="Bilpo logo"
        />
        <h2>Sign In</h2>
        <p>
          Note: This is a sign in portal for Bilpo's wholesale clients and
          contractors only. If you do not have credentials or want to inquire
          about becoming a contractor or seeing our wholesale pricing then
          please contact Richard (English) or Moonsung (Korean) at
          info@bilpo.co.kr.
        </p>
        <div className="firebaseAuth">
          <FirebaseAuth />
        </div>
        <p>
          <Link href="/">
            <a>Back to website ></a>
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
};

export default signin;
