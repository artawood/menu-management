import React from "react";

const ModifierList = props => (
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
        {props.soldOut ? (
          <span className="itemSoldOut">Sold Out</span>
        ) : (
          <span className="itemAvailable">
            <i className="fas fa-check" />
          </span>
        )}
      </td>
    </tr>
  </tbody>
);

export default ModifierList;
