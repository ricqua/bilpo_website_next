import React from "react";
import Link from "next/link";
import firebase from "firebase/app";
import "firebase/auth";

export default function checkuser() {
  const handleCheckUser = async (e) => {
    e.preventDefault();
    const payload = e.target.email.value;
    console.log(`Checking user status: ${payload}`);
    return firebase
      .auth()
      .getUserByEmail("payload")
      .then((userRecord) => {
        console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
      });
  };

  return (
    <React.Fragment>
      <div className="authPage">
        <img
          src="/bilpoLogos/Bilpo Logo Hv4 (Full-white).svg"
          alt="Bilpo logo"
        />
        <h2>Forgot username</h2>
        <p>Use this page to check if the user exsists</p>
        <div className="firebaseAuth">
          <form onSubmit={handleCheckUser}>
            <input type="text" required placeholder="email" name="email" />
            <button>Search</button>
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
