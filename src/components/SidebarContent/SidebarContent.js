import React from "react";
import PropTypes from "prop-types";
import "./SidebarContent.css";

// Modal Components
import FetchData from "../Modals/FetchDataModal";
import PushChanges from "../Modals/PushChangesModal";
import SorryNoAddModal from "../Modals/SorryNoAddModal";
import FeatureNotAvailableModal from "../Modals/FeatureNotAvailableModal";
import FeatureNotAvailableModal2 from "../Modals/FeatureNotAvailableModal2";

const styles = {
  sidebar: {
    width: 300,
    height: "100%",
    padding: "150px 0px 0px 0px"
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "#04A89B",
    textDecoration: "none"
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#C7C7C7"
  },
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "#4A4A4A"
  },
  option: {
    padding: "30px 50px 10px"
  },
  navLink: {
    fontWeight: 500,
    color: "#6F6D6D",
    fontSize: 22
  },
  isActive: {
    color: "#04A89B"
  }
};

const newTimeStamp = new Date().getTime();

const SidebarContent = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  return (
    <div style={style}>
      <nav class="d-none d-md-block bg-gray sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column option">
            <li className="nav-item">
              <a className="nav-link active">
                <span className="isActive" data-feather="home">
                  <i class="fas fa-home" />{" "}
                </span>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <FetchData />
            <PushChanges
              onClick={() => this.props.pushTimeStamp(newTimeStamp)}
            />
            <SorryNoAddModal />
          </ul>
          <div class="dropdown-divider" />
          <ul className="nav flex-column mb-2 other-option">
            <FeatureNotAvailableModal />
            <FeatureNotAvailableModal2 />
          </ul>
        </div>
      </nav>
    </div>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object
};

export default SidebarContent;
