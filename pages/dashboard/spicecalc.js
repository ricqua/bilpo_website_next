import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import Link from "next/link";

export default function spicecalc() {
  const [meatInput, setMeatInput] = useState(0);
  const [spices, setSpices] = useState([]);

  useEffect(
    () => {
      const db = firebase.firestore();
      db.collection("recipe_originalBiltong")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            const newEntry = doc.data();
            setSpices((oldArray) => [...oldArray, newEntry]);
          });
        });
    },
    [],
    2
  );

  return (
    <React.Fragment>
      <main className="spiceCalc">
        <div className="spiceCalc__header">
          <Link href="/dashboard">
            <img
              src="/bilpoLogos/Bilpo Logo Hv4 (Full-white).svg"
              alt="Bilpo logo"
            />
          </Link>

          <hr color="#b8b8b8" />
          <p>Biltong Spice Calculator</p>
          <hr color="#b8b8b8" />
        </div>
        <form className="spiceCalc__form">
          <label>Amount of wet meat?</label>
          <input
            type="number"
            id="meatInput"
            onChange={(e) => {
              setMeatInput(e.target.value);
            }}
          ></input>
          <label>kg</label>
        </form>
        <section className="spiceCalc__est">
          <strong>Estimations:</strong>
          <ul>
            <li># of 60g bags: {meatInput * 6.5}</li>
            <li>Final dry weight: {(meatInput / 2.4).toFixed(2)} kg</li>
          </ul>
        </section>
        {!meatInput >= 1 ? null : (
          <React.Fragment>
            <section className="spiceCalc__outputArea">
              {spices.map((spice) => {
                return (
                  <div
                    key={spice.item}
                    className="spiceCalc__outputArea__spiceItem"
                  >
                    <label className="spiceCalc__outputArea__spiceItem__qty">
                      {Math.round(spice.qty * meatInput * 10) / 10}
                    </label>
                    <label className="spiceCalc__outputArea__spiceItem__unit">
                      {spice.unit}
                    </label>
                    <div>
                      <label className="spiceCalc__outputArea__spiceItem__item">
                        {spice.item}
                      </label>
                    </div>
                  </div>
                );
              })}
            </section>
          </React.Fragment>
        )}
        <p className="copyrightNotice spiceCalc__copyrightNotice ">
          Copyright @ Bilpo 2021
        </p>
      </main>
    </React.Fragment>
  );
}
