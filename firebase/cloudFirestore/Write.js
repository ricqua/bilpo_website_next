import firebase from "firebase/app";
import "firebase/firestore";

const WriteToCloudFirestore = () => {
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection("Backorders")
        .doc("Order1")
        .set({ name: "Cats", address: "cats alley", email: "cats@gmail.com" })
        .then(console.log("SENT"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={sendData}>Send Data</button>
    </div>
  );
};

export default WriteToCloudFirestore;
