import React, { Component } from "react";
import myData from "./chart/chart.json";
import axios from "axios";
import SummaryTableReport from "./SummaryTableReport";
import DetailsTableReport from "./DetailsTableReport";
import DataCompleteCorrect from "./DataCompleteCorrect";
import UrlRunningList from "./UrlRunningList";

import toolRunningDataList from "./jobRunningStatus";
import data from "./summaryTableData";

let jsondetailReportDataList = data;
let urlStatusDataList = toolRunningDataList;

let modm_connection = myData.modm_connection;
let rods_connection = myData.rods_connection;
let meds_connectionName = myData.meds_connection;
let tables = myData.tables;
let sortedTableName = tables.sort();

class UrlSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meds_connection: "",
      modm_connection: "",
      rods_connection: "",
      tables: "",
      servicesResponseData: [],
      errors: {},
      loading: false,
    };
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  handleDropdownChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleValidation() {
    let meds_connection = this.state.meds_connection;
    let modm_connection = this.state.modm_connection;
    let rods_connection = this.state.rods_connection;
    let errors = {};
    let formIsValid = true;

    if (meds_connection === "") {
      formIsValid = false;
      errors["meds_connection"] = "Select Meds Connection";
    }
    if (modm_connection === "") {
      formIsValid = false;
      errors["modm_connection"] = "Select Modm Connection";
    }
    if (rods_connection === "") {
      formIsValid = false;
      errors["rods_connection"] = "Select Rods Connection";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  /*   callApi() {
      const interval = setInterval(() => {
        if (localStorage.getItem("filename")) {
          axios
            .get("http://localhost:3000/v1/reports/fetch_data", {
              params: { filename: localStorage.getItem("filename") }
            })
            .then(response => {
              let json_data = JSON.parse(response.data.data);
              let status = response.data.status;
              this.setState({
                dbDataList: json_data,
                status: status,
                loading: false
              });
              localStorage.clear();
            })
            .catch(error => {
              console.log(error);
            });
        }
      }, 60000);
      this.setState({ interval });
    } */
  callApi() {
    this.setState({
      dbDataList: jsondetailReportDataList,
      urlRunningStatus: urlStatusDataList
    })
  }

  dbDataSearch = e => {
    e.preventDefault();
    if (this.handleValidation()) {
      e.target.reset();
      this.setState({
        meds_connection: "",
        modm_connection: "",
        rods_connection: "",
        tables: ""
      });
    } else {
      alert("Form has errors.");
      return false;
    }

    let requestData = `meds_connection=${this.state.meds_connection}&modm_connection=${this.state.modm_connection}&rods_connection=${this.state.rods_connection}&tables=${this.state.tables}`;
    axios
      .get(`http://localhost:3000/v1/reports?&${requestData}`)
      .then(response => {
        this.setState({
          servicesResponseData: response.data,
          loading: true,
        });
        localStorage.setItem("filename", response.data.filename);
        //this.callApi();
      })
      .catch(error => {
        console.log(error);
        this.callApi();
      });
  };

  render() {
    const { servicesResponseData, loading } = this.state;
    return (
      <div>
        <div className="col-sm-8">
          <div className="row form_layout border-grid">
            <p>Select Connection and run the tool</p>
            <form onSubmit={this.dbDataSearch.bind(this)}>
              <div className="col-sm-3 form-group">
                <label>
                  <b>
                    Meds Connection<span className="mandatory">*</span>
                  </b>
                </label>
                <select
                  name="meds_connection"
                  className="form-control"
                  onChange={this.handleDropdownChange}
                >
                  {meds_connectionName.map(function (meds_connectionName, i) {
                    return (
                      <option key={i} value={meds_connectionName}>
                        {meds_connectionName}
                      </option>
                    );
                  })}
                </select>
                <span className="mandatory">
                  {this.state.errors["meds_connection"]}
                </span>
              </div>
              <div className="col-sm-3 form-group">
                <label>
                  <b>
                    Modm Connection<span className="mandatory">*</span>
                  </b>
                </label>
                <select
                  name="modm_connection"
                  className="form-control"
                  onChange={this.handleDropdownChange}
                >
                  {modm_connection.map(function (modm_connection, i) {
                    return (
                      <option key={i} value={modm_connection}>
                        {modm_connection}
                      </option>
                    );
                  })}
                </select>
                <span className="mandatory">
                  {this.state.errors["modm_connection"]}
                </span>
              </div>
              <div className="col-sm-3 form-group">
                <label>
                  <b>
                    Rods Connection<span className="mandatory">*</span>
                  </b>
                </label>
                <select
                  name="rods_connection"
                  className="form-control"
                  onChange={this.handleDropdownChange}
                >
                  {rods_connection.map(function (rods_connection, i) {
                    return (
                      <option key={i} value={rods_connection}>
                        {rods_connection}
                      </option>
                    );
                  })}
                </select>
                <span className="mandatory">
                  {this.state.errors["rods_connection"]}
                </span>
              </div>
              <div className="col-sm-3 form-group">
                <label>
                  <b>Table Name</b>
                </label>
                <select
                  name="tables"
                  className="form-control"
                  onChange={this.handleDropdownChange}
                >
                  {sortedTableName.map(function (sortedTableName, i) {
                    return (
                      <option key={i} value={sortedTableName}>
                        {sortedTableName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-sm-12">
                <button className="btn btn-primary search-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-sm-4">
          <DataCompleteCorrect />
        </div>
        {loading ? (
          <div className="row">
            <div className="col-sm-12" style={{ textAlign: "center" }}>
              <h4 className="loaderMsg">
                {servicesResponseData.etl_status}
              </h4>
              <div className="loader"></div>
            </div>
          </div>
        ) : null}
        <div className="row">
          <div className="col-sm-12">
            <UrlRunningList urlRunningStatusList={this.state.urlRunningStatus} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <SummaryTableReport dbDataList={this.state.dbDataList} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <DetailsTableReport dbDataList={this.state.dbDataList} />
          </div>
        </div>
      </div>
    );
  }
}

export default UrlSearch;
