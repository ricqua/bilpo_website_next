// import React from "react";

export default function BiltongVsJerkyComponent() {
  return (
    <section className="biltongVsJerky">
      <section>
        <table>
          <thead>
            <tr>
              <th>
                <h3>JERKY</h3>
              </th>
              <th>
                <h3>BILTONG</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>USA</td>
              <td>South Africa</td>
            </tr>
            <tr>
              <td>Bulgogi</td>
              <td>Steak</td>
            </tr>
            <tr>
              <td>Sugar, Soy sauce</td>
              <td>Salt, Pepper</td>
            </tr>
            <tr>
              <td>Dry</td>
              <td>Soft & fresh</td>
            </tr>
            <tr>
              <td>Lots of sugar</td>
              <td>Sugar free</td>
            </tr>
            <tr>
              <td>Fast, Heat dried</td>
              <td>Slow, Cold dried</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <div className="biltongVsJerky__videoDiv">
          <iframe
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/ieOMtTYUAmA"
            title="YouTube video player"
            frameBorder="0"
            background="none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </section>
  );
}
