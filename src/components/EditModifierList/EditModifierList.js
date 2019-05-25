import React from "react";
import ToggleSwitch from "../ToggleSwitch";
import { ReactComponent as DeleteIcon } from "../../models/images/icon-delete.svg";

//Bootstrap Components
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

//dummy data
import data from "../../models/data.json";

class EditModifierList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      itemName: props.itemName,
      name: props.modifierName,
      calories: props.calories,
      modifierLabel: props.modifierName,
      price: props.price,
      groupName: props.groupName,
      groupMin: props.groupMin,
      groupMax: props.groupMax,
      soldOut: props.soldOut,
      modifiers: data.menu.modifiers,
      milkShakeModifiers: data.menu.milkShakeModifiers
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const nameCalories =
      this.state.name + " ( " + this.state.calories + " calories ) ";
    return (
      <tbody>
        <tr>
          <td>
            <InputGroup size="sm">
              <FormControl
                as="select"
                value={this.state.name}
                name="name"
                onChange={this.handleInputChange}
                placeholder="name"
                aria-label="name"
              >
                <option>{nameCalories}</option>
                {this.state.itemName === "Milkshakes"
                  ? this.state.milkShakeModifiers.map(modifier => (
                      <option>
                        {modifier.name} ( {modifier.calories} calories )
                      </option>
                    ))
                  : this.state.modifiers.map(modifier => (
                      <option>
                        {modifier.name} ( {modifier.calories} )
                      </option>
                    ))}
              </FormControl>
            </InputGroup>
          </td>
          <td className="text-center">
            <InputGroup size="sm">
              <FormControl
                value={this.state.price}
                name="price"
                onChange={this.handleInputChange}
                placeholder="price"
                aria-label="price"
              />
            </InputGroup>
          </td>
          <td>{this.state.groupName}</td>
          <td className="text-center">
            <InputGroup size="sm">
              <FormControl
                value={this.state.groupMin}
                name="groupMin"
                onChange={this.handleInputChange}
                placeholder="groupMin"
                aria-label="groupMin"
              />
            </InputGroup>
          </td>
          <td className="text-center">
            <InputGroup size="sm">
              <FormControl
                value={this.state.groupMax}
                name="groupMax"
                onChange={this.handleInputChange}
                placeholder="groupMax"
                aria-label="groupMax"
              />
            </InputGroup>
          </td>
          <td className="text-center">
            {/* {props.soldOut ? (
          <i class="fas fa-check" />
        ) : (
          <i class="far fa-square" />
        )} */}
            <ToggleSwitch />
          </td>
          <td className="text-muted text-center">
            <span>
              <DeleteIcon
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete " + this.state.name + "?"
                    )
                  )
                    this.props.removeModifier(this.state.id);
                }}
              />
            </span>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default EditModifierList;
