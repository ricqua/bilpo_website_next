import React, { useState } from "react";
import { originalBiltong } from "../../data/recipeData.js";

const spicecalc = () => {
  const [meatInput, setMeatInput] = useState(0);
  const [spices, setSpices] = useState(originalBiltong);

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
            type="text"
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
                    key={spice.id}
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
            {/* <hr color="#b8b8b8" /> */}
            <div className="spiceCalc__est">
              <strong>Estimations:</strong>
              <ul>
                <li># of 60g bags: {meatInput * 6.5}</li>
                <li>Final dry weight: {(meatInput / 2.4).toFixed(2)} kg</li>
              </ul>
            </div>

            {/* <hr color="#b8b8b8" /> */}
          </React.Fragment>
        )}
        <p className="copyrightNotice spiceCalc__copyrightNotice ">
          Copyright @ Bilpo 2021
        </p>
      </main>
    </React.Fragment>
  );
};

export default spicecalc;
