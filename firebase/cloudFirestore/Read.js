// import firebase from "firebase/app";
// import "firebase/firestore";

// const ReadFromCloudFirestore = () => {
//   const readData = () => {
//     try {
//       firebase
//         .firestore()
//         .collection("Backorders")
//         .doc("Order1")
//         .onSnapshot(function (doc) {
//           console.log(doc.data()); //useState
//         });
//       console.log("Got data from Firestore");
//     } catch (error) {
//       console.log("XXX");
//     }
//   };

//   return <button onClick={readData}>Read data</button>;
// };

// export default ReadFromCloudFirestore;
