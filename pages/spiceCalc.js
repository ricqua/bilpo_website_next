import React, { useState } from "react";
import { originalBiltong } from "../data/recipeData.js";

const spiceCalc = () => {
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
          <lable>Amount of meat?</lable>
          <input
            type="text"
            id="meatInput"
            onChange={(e) => {
              setMeatInput(e.target.value);
            }}
          ></input>
          <lable>kg</lable>
        </form>
        {!meatInput >= 1 ? (
          ""
        ) : (
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
        )}
        <p className="copyrightNotice spiceCalc__copyrightNotice ">
          Copyright @ Bilpo 2021
        </p>
      </main>
    </React.Fragment>
  );
};

export default spiceCalc;
