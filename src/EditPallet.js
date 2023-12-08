import { useState } from "react";
import { db } from "./fbconfig";
import { doc, updateDoc } from "firebase/firestore";

const EditPallet = ({ palletToEdit }) => {
  const [description, setDescription] = useState(palletToEdit.description);
  const [weight, setWeight] = useState(Number(palletToEdit.weight));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, "pallets", palletToEdit.id), {
      description,
      weight,
      delivered: palletToEdit.delivered,
      createdAt: palletToEdit.createdAt,
      userID: palletToEdit.userID
    });
  };
  //* We need to write defaultValue
  return (
    <form onSubmit={handleSubmit}>
      <b>Edit this pallet</b>
      <div className="input_container">
        <input
          type="text"
          placeholder="Edit the shipping contents..."
          defaultValue={palletToEdit.description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter edited pallet weight (in KG)..."
          defaultValue={palletToEdit.weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
      </div>
      <button>Edit Pallet</button>
    </form>
  );
};

export default EditPallet;
