import React from "react";
import { Dropdown } from "semantic-ui-react";
import "./LocationSelector.css";

import data from "../../models/data.json";

class LocationSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "AL0193"
    };
  }
  render() {
    return (
      <Dropdown
        search
        selection
        defaultValue={this.state.value}
        options={data.location}
        placeholder="Select Location"
        name="Location"
        tabIndex="0"
      />
    );
  }
}

export default LocationSelector;
