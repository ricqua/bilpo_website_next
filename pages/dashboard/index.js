import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import { useUser } from "../../firebase/auth/useUser";

function index() {
  const { user, logout } = useUser();

  return (
    <React.Fragment>
      <Header />
      <div className="dashboard">
        <h1>Dashboard</h1>
        {user ? <h2>Welcome back, {user.name}</h2> : null}
        {user ? <p>UserID: {user.email}</p> : null}
        <div className="dashboard__tools">
          <h2>Admin tools:</h2>
          <Link href="./dashboard/b2b">
            <p>Wholesale order form</p>
          </Link>
          <Link href="./dashboard/spicecalc">
            <p>Spice calculator</p>
          </Link>
          <div className="dashboard__tools__backorder">
            <strong>Backorder tools:</strong>
            <div>
              <Link href="./dashboard/backorder">
                <p>Form</p>
              </Link>
              <Link href="./dashboard/backorderLog">
                <p>Log</p>
              </Link>
            </div>
          </div>
        </div>

        <button
          className="button__lightPrimary"
          onClick={() => {
            logout();
          }}
        >
          Log Out
        </button>
      </div>
    </React.Fragment>
  );
}

export default index;
