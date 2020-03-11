import React, { Component } from "react";

class DataCompleteCorrect extends Component {
  render() {
    return (
      <div className="form_layout border-grid">
        <p>Data Complete/Correct</p>
        <div className="padding-left-right">
          <span>
            <b>vs MODM complete</b>
          </span>
          <div className="progress">
            <div className="progress-bar bg-success" style={{ width: "80%" }}>
              80%
            </div>
          </div>
          <span>
            <b>vs MODM correct</b>
          </span>
          <div className="progress">
            <div className="progress-bar bg-info" style={{ width: "85%" }}>
              85%
            </div>
          </div>
          <span>
            <b>vs RODS complete</b>
          </span>
          <div className="progress">
            <div className="progress-bar bg-warning" style={{ width: "90%" }}>
              90%
            </div>
          </div>
          <span>
            <b>vs RODS correct</b>
          </span>
          <div className="progress">
            <div className="progress-bar bg-warning" style={{ width: "90%" }}>
              90%
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DataCompleteCorrect;
