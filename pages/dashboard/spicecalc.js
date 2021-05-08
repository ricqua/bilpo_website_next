import React, { useState, useEffect } from "react";
import firebase from "firebase/app";

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
            console.log(newEntry);
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
          <img
            src="/bilpoLogos/Bilpo Logo Hv4 (Full-white).svg"
            alt="Bilpo logo"
          />

          <hr color="#b8b8b8" />
          <p>Biltong Spice Calculator</p>
          <hr color="#b8b8b8" />
        </div>
        <form className="spiceCalc__form">
          <lable>Amount of wet meat?</lable>
          <input
            type="number"
            id="meatInput"
            onChange={(e) => {
              setMeatInput(e.target.value);
            }}
          ></input>
          <lable>kg</lable>
        </form>
        {!meatInput >= 1 ? null : (
          <React.Fragment>
            <div className="spiceCalc__outputArea">
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
            </div>
            <div className="spiceCalc__est">
              <strong>Estimations:</strong>
              <ul>
                <li># of 60g bags: {meatInput * 6.5}</li>
                <li>Final dry weight: {(meatInput / 2.4).toFixed(2)} kg</li>
              </ul>
            </div>
          </React.Fragment>
        )}
        <p className="copyrightNotice spiceCalc__copyrightNotice ">
          Copyright @ Bilpo 2021
        </p>
      </main>
    </React.Fragment>
  );
}
