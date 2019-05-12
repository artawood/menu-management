import React from "react";
import ToggleSwitch from "../ToggleSwitch";

const EditModifierList = props => (
  <tbody>
    <tr>
      <td>
        {props.name} ({props.calories + " calories"}){" "}
      </td>
      <td className="text-center">{props.price}</td>
      <td>{props.groupName}</td>
      <td className="text-center">{props.groupMin}</td>
      <td className="text-center">{props.groupMax}</td>
      <td className="text-center">
        {/* {props.soldOut ? (
          <i class="fas fa-check" />
        ) : (
          <i class="far fa-square" />
        )} */}
        <ToggleSwitch />
      </td>
    </tr>
  </tbody>
);

export default EditModifierList;
