import React, { Component } from "react";
import Axios from "axios";
//import data from "./jobRunningStatus";
//let toolRunningStatus = data;

let statusClass = [];

class UrlRunningList extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      dataReport: [],
      toolRunningStatus: []
    };
  }
  /* https://api.github.com/users */
  reportSheet = async (id) => {
    let response = await Axios.get(`https://reqres.in/api/users?page=${id}`);
    alert(`this is element Id=, ${id}`);
    this.setState({
      showModal: true,
      dataReport: response.data.data
    });
    console.log(this.state.dataReport)
};

  closeModel = () => {
    this.setState({ showModal: false });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.toolRunningStatus !== prevState.toolRunningStatus && nextProps.toolRunningStatus) {
      return {
        toolRunningStatus: nextProps.toolRunningStatus
      };
    }
    return null;
  }

  render() {
    let toolRunningStatus = this.props.urlRunningStatusList;

    if (toolRunningStatus) {
      toolRunningStatus.forEach(data => {
        if (data.status === "Running") {
          statusClass.push("info");
        }
        if (data.status === "Complete") {
          statusClass.push("success");
        }
        if (data.status === "Failed") {
          statusClass.push("danger");
        }
        if (data.status === "Pending") {
          statusClass.push("warning");
        }
      });
    }
    return (
      <div className="form_layout border-grid">
        <p>Running Table & URL</p>
        {toolRunningStatus !== undefined ? toolRunningStatus.map((listData, index) => {
          return (
            <div key={index} className={`alert alert-${statusClass[index]}`}>
              <span>
                URL: <b>{listData.base_url} </b>
              </span>
              <span>
                Table : <b>{listData.table}</b>
              </span>
              <div className="urlStatus">
                <span>
                  <b>{listData.status}</b>
                </span>
                {listData.status === "Running" ? (
                  <i className="url_Icon fa fa-spinner fa-spin"></i>
                ) : null}
                {listData.status === "Complete" ? (
                  <i className="url_Icon fa fa-file"
                    aria-hidden="true"
                    id={listData.id}
                    onClick={e => this.reportSheet(e.target.id)}
                  ></i>
                ) : null}
              </div>
            </div>
          );
        }) :
          <div className="alert-danger text-center">
            <span><b>Any URL and table is not Running </b></span>
          </div>
        }
        {this.state.showModal ? (
          <div id="myModal" role="dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  onClick={this.closeModel}
                  type="button"
                  className="close"
                  data-dismiss="modal"
                >
                  &times;
                </button>
                <h4 className="modal-title">Summary report</h4>
              </div>
              <div className="table-resonsive-summery">
                <table id="dataTable">
                  <thead>
                    <tr>
                      <th>Table</th>
                      <th>Base URL</th>
                      <th>vs RODS complete</th>
                      <th>vs RODS complete</th>
                      <th>vs RODS complete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.dataReport.map(data => {
                      return (
                        <tr key={data.id}>
                          <td>{data.id}</td>
                          <td>{data.email}</td>
                          <td>{data.first_name}</td>
                          <td>{data.last_name}</td>
                          <td>{data.avatar}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  onClick={this.closeModel}
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default UrlRunningList;
