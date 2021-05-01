import React, { useState } from "react";

const b2b = () => {
  const [isQty, setQty] = useState({ bagsValue: 20, sliced: 3 });

  const handleChange = (e) => {
    e.preventDefault();
    setQty((prevQty) => ({
      ...prevQty,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="b2b">
      <h1>B2B</h1>
      <ul>
        <li>
          This page is to help Bilpo share pricing information easily with our
          B2B clients. We hope this helps everyone get the most up-to-date
          information so you can plan accordingly.
        </li>
        <li>
          If you have any questions, please contact us directly on our website's
          contact form, email us on info@bilpo.co.kr, DM us on
          Instagram/Facebook or Kakao message Moonsung (ID: green4life)
        </li>
        <li className="b2b__disclaimer">
          Disclaimer: All bags have oxygen and moisture absorbers, and have been
          sealed in foil bags which give them longer shelf life. We recommedn 21
          days when kept in a refridgerator. They can be kept longer but we
          prefer if you serve the Biltong fresh. If a customer purchases moldy
          Biltong it can damage the Bilpo brand. Bilpo reserves the right to
          stop sales to B2B clients who are perceved as damaging the Bilpo
          brand.
        </li>
      </ul>
      <section className="b2b__bags">
        <div className="b2b__bagsHeader">
          <h2>60g - Biltong bags</h2>
          <img src="/biltong/biltongBag_1bag.jpg" alt="Image of Biltong bag" />
          <p>
            Description: Bags of Biltong sliced to 60g. All bags have oxygen and
            moisture absorbers, and have been heat sealed in foil bags which
            give them a shelf life of 21 days.
          </p>
          {/* <button>Download PDF</button> */}
        </div>
        <div className="b2b__bagsNumbers">
          <div>
            <strong>Online (B2C):</strong>
            <p>1 bag - 11,000₩</p>
            <p>5 bags - 48,000₩</p>
            <p>8 bags - 75,000₩</p>
          </div>
          <div>
            <strong>Wholesale (B2B):</strong>
            <p>Quantity:</p>
            <input
              type="number"
              name="bagsValue"
              placeholder="How many bags?"
              value={isQty.bagsValue}
              onChange={handleChange}
            />
            <p>{(6818 * isQty.bagsValue).toLocaleString()}₩</p>
            <p>
              VAT (10%):
              <label>
                {Math.round(
                  7500 * isQty.bagsValue - (isQty.bagsValue * 7500) / 1.1
                ).toLocaleString()}
                ₩
              </label>
            </p>
            <p>
              Total:
              <label>{(isQty.bagsValue * 7500).toLocaleString()}₩</label>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default b2b;
