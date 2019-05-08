import React from "react";

// Modal Components
import FetchData from "../Modals/FetchDataModal";
import PushChanges from "../Modals/PushChangesModal";
import SorryNoAddModal from "../Modals/SorryNoAddModal";
import FeatureNotAvailableModal from "../Modals/FeatureNotAvailableModal";
import FeatureNotAvailableModal2 from "../Modals/FeatureNotAvailableModal2";
import "./Sidebar.css";

const Sidebar = () => (
  <nav class="d-none d-md-block bg-gray sidebar">
    <div className="sidebar-sticky">
      <ul className="nav flex-column option">
        <li className="nav-item">
          <a className="nav-link active" href="#">
            <span className="isActive" data-feather="home">
              <i class="fas fa-home" />{" "}
            </span>
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <FetchData />
        <PushChanges />
        <SorryNoAddModal />
      </ul>
      <div class="dropdown-divider" />
      <ul className="nav flex-column mb-2 other-option">
        <FeatureNotAvailableModal />
        <FeatureNotAvailableModal2 />
      </ul>
    </div>
  </nav>
);

export default Sidebar;
