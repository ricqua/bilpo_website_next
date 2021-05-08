import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// import Header from "../../components/Header";
import { useUser } from "../../firebase/auth/useUser";

export default function index() {
  const { user, logout } = useUser();
  const router = useRouter();

  return (
    <React.Fragment>
      <div className="dashboard">
        <h1>Dashboard</h1>

        {user ? <h2>Welcome back, {user.name}</h2> : null}
        <Link href="./dashboard/account">
          <p>Account</p>
        </Link>

        <div className="dashboard__tools">
          <Link href="./dashboard/spicecalc">
            <p>Spice calculator</p>
          </Link>
          <Link href="./dashboard/b2b">
            <p>RFQ</p>
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
        <Link href="./">
          <p>Back to website</p>
        </Link>

        <p
          // className="button__lightPrimary"
          onClick={() => {
            router.push("/login");
            logout();
          }}
        >
          Log Out
        </p>
      </div>
    </React.Fragment>
  );
}
