import "./App.css";
import React from "react";
import AddPost from "./addpost";
import PrimarySearchAppBar from "./searchnav";
import Sidebar from "./sidebar1";

function App() {
  return (
    <div className="container-fluid">
    <PrimarySearchAppBar />
    <div className="row no-gutters" style={{ marginTop: '60px' }}></div>
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>
      <div className="col-md-6">
        <AddPost />
      </div>
      <div className="col-md-3">
        <Sidebar />
      </div>
    </div>
  </div>
  );
}

export default App;
