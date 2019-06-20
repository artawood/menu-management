import React from "react";
import SelectSearch from "react-select-search";
import "./LocationSelector.css";

import data from "../../models/data.json";

class LocationSelector extends React.Component {
  state = {
    location: "AL0193"
  };

  render() {
    return (
      <SelectSearch
        name="location"
        mode="input"
        value={this.state.location}
        options={data.location}
        placeholder="Select Location"
      />
    );
  }
}

export default LocationSelector;
