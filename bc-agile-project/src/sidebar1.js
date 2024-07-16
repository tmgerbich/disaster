import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar bg-light p-3 rounded text-center">
      <div className="profile-pic mb-3">
        <img
          src="images/cat.jpeg"
          alt="Profile"
          className="rounded-circle img-fluid"
          style={{ width: '100px', height: '100px' }}
        />
      </div>
      <div className="user-info mb-3">
        <h2 className="h5 mb-1">John Doe</h2>
        <p className="text-muted">Graphic Designer at Self Employed</p>
      </div>
      <div className="follow-info d-flex justify-content-around mb-3">
        <div className="text-center">
          <p className="mb-0">Following</p>
          <p className="font-weight-bold mb-0">34</p>
        </div>
        <div className="text-center">
          <p className="mb-0">Followers</p>
          <p className="font-weight-bold mb-0">155</p>
        </div>
      </div>
      <button className="btn btn-danger">View Profile</button>
    </div>
  );
};

export default Sidebar;
