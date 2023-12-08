import { useEffect, useState } from "react";
import AddPallet from "./AddPallet";
import DisplayPallet from "./DisplayPallet";

import {
  collection,
  query,
  onSnapshot,
  doc,
  where,
  updateDoc,
  deleteDoc
} from "firebase/firestore";
import { db } from "./fbconfig";

const PalletDashboard = ({ currentUser }) => {
  const [pallets, setPallets] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  //By using this Hook, you tell React that your
  // component needs to do something after render.
  // By default, it runs both after the first render and after every update.
  // Giving it an empty array acts like componentDidMount as in, it only runs once.
  useEffect(() => {
    const q = query(
      collection(db, "pallets"),
      where("userID", "==", currentUser.uid)
    );
    const unsub = onSnapshot(q, (querySnapshot) => {
      let palletsArrayFromFirebase = [];
      querySnapshot.forEach((doc) => {
        palletsArrayFromFirebase.push({ ...doc.data(), id: doc.id });
        console.log(doc.data());
        console.log(doc.id );
      });
      // using the useState from above
      console.log(palletsArrayFromFirebase);
      setPallets(palletsArrayFromFirebase);
    });
    return () => unsub();
  }, [currentUser]);

  async function handlePalletDelivered(docu) {
    await updateDoc(doc(db, "pallets", docu.id), {
      delivered: !docu.delivered
    });
  }

  async function handleDeletePallet(id) {
    await deleteDoc(doc(db, "pallets", id));
  }

  function getWeightTotal(acc, obj) {
    return acc + Number(obj.weight);
  }

  return (
    <div className="container">
      <AddPallet currentUser={currentUser} />
      <div className="AppClass">
        {pallets.length === 0 && (
          <p>
            You have {pallets.length} pallets with us. Why not make a shipment
            now?
          </p>
        )}
        {pallets.length > 0 && (
          <div>
            <h2>Your pallet shipment summary</h2>

            <p>You have {pallets.length} pallets with us</p>
            <p>
              Total Shipment Weight (kg): {pallets.reduce(getWeightTotal, 0.0)}
              kg
            </p>
          </div>
        )}

        {pallets.map((p, index) => (
          <div key={p.id}>
            <DisplayPallet
              palletToDisplay={p}
              handleDeletePallet={handleDeletePallet}
              handlePalletDelivered={handlePalletDelivered}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PalletDashboard;
