import React from 'react';
import './Sidebar.css';

const Sidebar = props => (
  <nav class="d-none d-md-block bg-gray sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column option">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <span className="isActive" data-feather="home"><i class="fas fa-home"></i> </span>
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="fetch-data"><i class="fas fa-sync"></i> </span>
              Fetch Data
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="push-changes"><i class="fas fa-location-arrow"></i> </span>
              Push Changes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="add-item"><i class="fas fa-plus"></i> </span>
              Add Items
            </a>
          </li>
        </ul>
        <div class="dropdown-divider"></div>
        <ul className="nav flex-column mb-2 other-option">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file-text"><i class="fas fa-cog"></i> </span>
              Setting
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file-text"><i class="fas fa-sign-out-alt"></i> </span>
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </nav>
)

export default Sidebar;