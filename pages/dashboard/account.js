import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import firebase from "firebase/app";
import { UserContext } from "../_app";

export default function account() {
  const { isContext, setContext } = useContext(UserContext);

  function handleResetPassword(e) {
    e.preventDefault();
    const payload = isContext.email;
    firebase
      .auth()
      .sendPasswordResetEmail(payload)
      .then(() => {
        console.log(`Reset password email sent to: ${payload}`);
        alert(
          `Email sent to ${payload}.  Follow the email instructions to reset your password.`
        );
      })
      .catch((error) => {
        console.log("Error resetting password:", error);
        setResetPasswordError(error.message);
        alert(
          `Email sent to ${payload}.  Follow the email instructions to reset your password.`
        );
      });
  }

  function handleModifyField(e) {
    e.preventDefault();
    const id = e.target.id;
    let value = e.target.value.value;
    if (!e.target.value.value) {
      value = "_";
    }
    // const preValue = isContext[id]
    console.log(`Changing ${id} from ${isContext[id]} to ${value}`);
    firebase
      .firestore()
      .collection("Users")
      .doc(isContext.uid)
      .set({
        ...isContext,
        [id]: value,
      })
      .then(() => {
        alert(`Changed ${id} from ${isContext[id]} to ${value}`);
      })
      .then(() => {
        window.location.reload();
      });
  }

  const ProfileItem = ({ title, value, id }) => {
    return (
      <div className="profileItem">
        <form onSubmit={handleModifyField} id={id}>
          <label>{title}</label>
          <input defaultValue={value} name="value" />
          {id === "email" ? (
            <button disabled>Modify</button>
          ) : (
            <button>Modify</button>
          )}
        </form>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="dashboard">
        <h1>Account</h1>

        <section className="dashboard__account">
          <ProfileItem title="Email: " value={isContext.email} id="email" />
          <ProfileItem
            title="Company name: "
            id="companyName"
            value={isContext.companyName}
          />
          <ProfileItem
            title="Contact person: "
            value={isContext.contactPerson}
            id="contactPerson"
          />
          <ProfileItem title="Mobile: " value={isContext.phone} id="phone" />
          <ProfileItem
            title="Company address: "
            value={isContext.companyAddress}
            id="companyAddress"
          />
          <ProfileItem
            title="Delivery address: "
            value={isContext.deliveryAddress}
            id="deliveryAddress"
          />
          <button className="button__light" onClick={handleResetPassword}>
            Reset password
          </button>
          {/* <ProfileItem item="UserID: " value={isContext.uid} /> */}

          <pre>{JSON.stringify(isContext, null, 1)}</pre>
        </section>
        {/* <hr width="500px" /> */}
        <Link href="/dashboard">
          <button className="button__light">Dashboard</button>
        </Link>
      </div>
    </React.Fragment>
  );
}
