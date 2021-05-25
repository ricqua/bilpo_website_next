import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import firebase from "firebase/app";
import { UserContext } from "../_app";
import Head from "next/head";

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

  function updateAccountDetails(e) {
    e.preventDefault();
    console.log("saved");
    const data = e.target;
    firebase
      .firestore()
      .collection("Users")
      .doc(isContext.uid)
      .set({
        ...isContext,
        email: data.email.value,
        companyName: data.companyName.value,
        contactPerson: data.contactPerson.value,
        companyAddress: data.companyAddress.value,
        deliveryAddress: data.deliveryAddress.value,
        businessLicense: data.businessLicense.value,
      })
      .then(() => {
        alert("stuff changed");
      })
      .then(() => {
        window.location.reload();
      });
  }

  return (
    <React.Fragment>
      <Head>
        <title>Bilpo - Account</title>
      </Head>
      <div className="dashboard">
        <h1>Account</h1>

        <section className="account">
          <form onSubmit={updateAccountDetails}>
            <label>Email</label>
            <input type="email" name="email" defaultValue={isContext.email} />
            <label>Company name</label>

            <input
              type="text"
              name="companyName"
              defaultValue={isContext.companyName}
            />
            <label>Mobile</label>

            <input type="text" name="phone" defaultValue={isContext.phone} />
            <label>Contact person</label>

            <input
              type="text"
              name="contactPerson"
              defaultValue={isContext.contactPerson}
            />
            <label>Company address</label>

            <input
              type="text"
              name="companyAddress"
              defaultValue={isContext.companyAddress}
            />
            <label>Delivery address</label>

            <input
              type="text"
              name="deliveryAddress"
              defaultValue={isContext.deliveryAddress}
            />
            <label>Business license</label>

            <input
              type="text"
              name="businessLicense"
              defaultValue={isContext.businessLicense}
            />
            <button type="submit" className="button__lightPrimary">
              Save changes
            </button>
          </form>
        </section>
        <section>
          <button
            className="button__light account__resetButton"
            onClick={handleResetPassword}
          >
            Reset password
          </button>
          <Link href="/dashboard">
            <button className="button__light account__dashboardButton">
              Dashboard
            </button>
          </Link>
        </section>
      </div>
    </React.Fragment>
  );
}
