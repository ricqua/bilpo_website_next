import React from "react";

const Merchandise = () => {
  return (
    <React.Fragment>
      <main className="merch_main">
        <h2>상품</h2>
        <div className="merch_cards">
          <div className="merch_card">
            <img
              src="./merchandise/bottleOpeners.jpg"
              alt="Bilpo bottle openers"
            />
            <p>빌포 우드 오프너 (미니 병따개)</p>
            <p>₩7,800</p>
          </div>
          <div className="merch_card">
            <img
              src="./merchandise/coaster.jpg"
              alt="Bilpo laser engraved coasters"
            />
            <p>빌포 코르크 코스터 컵받침대</p>
            <p>₩2,800</p>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Merchandise;
