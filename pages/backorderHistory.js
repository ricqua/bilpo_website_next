import React from "react";
import { firebase } from "../components/firebase";

const db = firebase.database();

function backorderHistory() {
  var newData = {};
  //   var backorderHistoryData = [];

  const ref = db.ref("backorderList");
  ref.on("value", gotData, errData); //on is always checking.  once is only once

  function gotData(data) {
    newData = Object.values(data.val());

    // console.log(newData[0]);
  }

  function errData(err) {
    console.log("error");
    console.log(err);
  }

  return (
    <React.Fragment>
      <main>
        <div>
          <h1>Backorder History</h1>
          {/* {newData[0].name} */}

          {/* {newData[2].name.length >= 1 ? "good" : null} */}
          {/* {newData.map((order) => {
            return <p>help</p>;
          })} */}
        </div>
      </main>
    </React.Fragment>
  );
}

export default backorderHistory;
