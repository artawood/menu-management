import React from 'react';

const ModifierList = props =>(
  <tbody>
    <tr>
      <td>{props.name} {props.calories + " calories"} </td>
      <td>{props.price}</td>
      <td>{props.groupName}</td>
      <td>{props.groupMin}</td>
      <td>{props.groupMax}</td>
      <td>{props.soldOut ? <i class="fas fa-check"></i> : <i class="far fa-square"></i>  }</td>
    </tr>
  </tbody>
);

export default ModifierList;