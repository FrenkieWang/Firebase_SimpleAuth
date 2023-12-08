import React, {useState} from "react";
import EditPallet from "./EditPallet";
import palletpic from "./pallet.png";

const DisplayPallet = (props) => {
  //const Task = ({ task, toggleComplete, handleDelete }) => {
  const [showEditButton, setEditButton] = useState(false);

  function toggleEditButton() {
    setEditButton(!showEditButton);
  }

  return (
    <div className="alert alert-secondary" role="alert">
      <div className="DisplayPallet">
        <img src={palletpic} alt="This is a pallet pic for decoration" />
        <br />
        <b>UserID:</b> {props.palletToDisplay.userID}
        <br />
        <b>Description:</b> {props.palletToDisplay.description}
        <br />
        <b>Shipping Weight(kg):</b> {props.palletToDisplay.weight}kg
        <br />
        <b>Delivery Status:</b>{" "}
        {props.palletToDisplay.delivered && <b>DELIVERED</b>}
        {!props.palletToDisplay.delivered && <b>In Progress</b>}
        <br />
        <b>Firebase ID:</b> {props.palletToDisplay.id}
        <br />
        <button onClick={() => props.handleDeletePallet(props.palletToDisplay.id)}>
          Delete Pallet
        </button>
        <button onClick={toggleEditButton}>Show/Hide Edit</button>
        {!props.palletToDisplay.delivered && (
          <button onClick={() => props.handlePalletDelivered(props.palletToDisplay)}>
            Set as delivered
          </button>
        )}
        {showEditButton && !props.palletToDisplay.delivered && (
          <EditPallet
            key={props.palletToDisplay.id}
            palletToEdit={props.palletToDisplay}
          />
        )}
      </div>
    </div>
  );  
}

export default DisplayPallet;
