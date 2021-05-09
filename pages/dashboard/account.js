import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import firebase from "firebase/app";
import { UserContext } from "../_app";

export default function account() {
  const { isContext, setContext } = useContext(UserContext);

  const ProfileItem = ({ item, value }) => {
    return (
      <div className="profileItem">
        <p className="profileItem__item">{item}</p>
        <p className="profileItem__value">{value}</p>
        <button className="profileItem__changeBtn ">Change</button>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="dashboard">
        <h1>Account</h1>

        <section className="dashboard__account">
          <ProfileItem item="Company name: " value={isContext.companyName} />
          <ProfileItem item="Email: " value={isContext.email} />
          <ProfileItem item="Mobile: " value={isContext.phone} />
          <ProfileItem
            item="Contact person: "
            value={isContext.contactPerson}
          />
          <ProfileItem
            item="Company address: "
            value={isContext.companyAddress}
          />
          <ProfileItem
            item="Delivery address: "
            value={isContext.deliveryAddress}
          />
          {/* <ProfileItem item="UserID: " value={isContext.uid} /> */}

          {/* <pre>{JSON.stringify(isContext, null, 1)}</pre> */}
        </section>
        {/* <hr width="500px" /> */}
        <Link href="/dashboard">
          <button className="button__light">Dashboard</button>
        </Link>
      </div>
    </React.Fragment>
  );
}
