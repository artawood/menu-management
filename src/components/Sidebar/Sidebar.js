import React from "react";
import FetchData from "../Modals/FetchDataModal";
import PushChanges from "../Modals/PushChangesModal";
import "./Sidebar.css";

const Sidebar = props => (
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
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span data-feather="add-item">
              <i class="fas fa-plus" />{" "}
            </span>
            Add Items
          </a>
        </li>
      </ul>
      <div class="dropdown-divider" />
      <ul className="nav flex-column mb-2 other-option">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span data-feather="file-text">
              <i class="fas fa-cog" />{" "}
            </span>
            Setting
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span data-feather="file-text">
              <i class="fas fa-sign-out-alt" />{" "}
            </span>
            Log Out
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Sidebar;
