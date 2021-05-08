import React from "react";
import Link from "next/link";
import { useUser } from "../../firebase/auth/useUser";

export default function account() {
  const { user, logout } = useUser();

  const ProfileItem = ({ item, value }) => {
    return (
      <div className="profileItem">
        <p className="profileItem__item">{item}</p>
        <p className="profileItem__value">{value}</p>
        <button className="profileItem__changeBtn">Change</button>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="dashboard">
        <h1>Account</h1>

        <section className="dashboard__profile">
          {user ? <h2>{user.name}</h2> : null}
          <ProfileItem item="Email:" value={user ? user.email : null} />
          <ProfileItem item="Account name:" value={user ? user.name : null} />
          <ProfileItem item="Mobile:" value={user ? user.phone : null} />
          <ProfileItem
            item="Business address:"
            value={user ? user.addressBusiness : null}
          />
          <ProfileItem
            item="Shipping address:"
            value={user ? user.addressShipping : null}
          />
        </section>
        <hr width="500px" />
        <Link href="/dashboard">
          <p>Dashboard</p>
        </Link>
      </div>
    </React.Fragment>
  );
}
