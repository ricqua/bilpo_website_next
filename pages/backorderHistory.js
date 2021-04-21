import React, { useState, useEffect } from "react";
import Link from "next/link";

import firebase from "firebase/app";
import "firebase/firestore";
import initFirebase from "../firebase/initFirebase";

initFirebase();

export default function backorderHistory() {
  const [isData, setData] = useState([]);

  useEffect(() => {
    async function readData() {
      const dataRef = firebase.firestore().collection("Backorders");
      const snapshot = await dataRef.get();
      snapshot.forEach((doc) => {
        var order = doc.data();
        // console.log(doc.data());

        setData((prevState) => [...prevState, doc.data()]);
      });
    }
    readData();
  }, []);

  return (
    <React.Fragment>
      <main className="backorderHistory">
        <button onClick={() => window.location.reload()}>Refresh</button>
        <Link href="/backorder">
          <button>Backorder Form</button>
        </Link>
        <h1>Backorder History</h1>
        <section className="backorderHistory__list">
          {!isData
            ? null
            : isData.map((order) => {
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
        </div>
        <div>
          {/* <strong>Order details:</strong> */}
          <p>{order.details}</p>
        </div>
      </div>
    </React.Fragment>
  );
};
