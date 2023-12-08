import { useState } from "react";
import { db } from "./fbconfig";
import { collection, addDoc } from "firebase/firestore";

const AddPallet = ({ currentUser }) => {
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState(0);
  const [delivered, setDelivered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "pallets"), {
      description,
      weight,
      createdAt: new Date(),
      delivered,
      userID: currentUser.uid
    });
    setDescription("");
    setWeight(0);
    setDelivered(false);
  };
  return (
    <div className="alert alert-secondary" role="alert">
      <form onSubmit={handleSubmit}>
        <h3>Add a Pallet for Shipping</h3>
        <div className="input_container">
          <input
            type="text"
            placeholder="Describe the shipping contents..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter pallet weight (in KG)..."
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="btn_container">
          <button>Add Pallet to shipment</button>
        </div>
      </form>
    </div>
  );
};

export default AddPallet;
