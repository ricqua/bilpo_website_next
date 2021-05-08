import React, { useState, useEffect } from "react";
import Link from "next/link";

import firebase from "firebase/app";

export default function backorderLog() {
  const [isData, setData] = useState([]);

  useEffect(
    () => {
      const db = firebase.firestore();
      db.collection("Backorders")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            const newEntry = doc.data();
            setData((oldArray) => [...oldArray, newEntry]);
          });
        });
    },
    [],
    2
  );

  return (
    <React.Fragment>
      <main className="backorderHistory">
        <button onClick={() => window.location.reload()}>Refresh</button>
        <Link href="/dashboard">
          <button>Dashboard</button>
        </Link>
        <h1>Backorder Log</h1>
        <section className="backorderHistory__list">
          {!isData
            ? null
            : isData
                .sort((a, b) => a.name - b.name)
                .map((order) => {
                  return (
                    <div key={order.email}>
                      <BackorderItem order={order} />
                    </div>
                  );
                })}
        </section>
      </main>
    </React.Fragment>
  );
}

const BackorderItem = (props) => {
  const order = props.order;
  // console.log(order);
  return (
    <React.Fragment>
      <div className="backorderItem">
        <div>
          <h3>{order.name}</h3>
          <p>{order.date} </p>
          <p>{order.email}</p>
          <p>{order.phone}</p>
          <p>{order.address}</p>
          <p>{order.details}</p>
        </div>
        {/* <div><strong>Order details:</strong></div> */}
      </div>
    </React.Fragment>
  );
};
