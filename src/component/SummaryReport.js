import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";

import urlListData from "./chart/chart.json";
import SummaryTableReport from "./SummaryTableReport";
import data from "./summaryTableData";

let jsondetailReportDataList = data;
let requestData;
let URLList = urlListData.rods_connection;
class SummaryReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: new Date(),
      toDate: new Date(),
      selectedURL: "",
      summaryReportdataList: [],
      errors: {},
    };
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }
  fromDateChange = fromDate => {
    this.setState({
      fromDate: fromDate,
      toDate: "",
    });
    const fromDateSelect = fromDate;
    const toDateSelect = new Date();
    const dateDiff = Math.abs(toDateSelect - fromDateSelect);
    const diffDays = Math.ceil(dateDiff / (1000 * 60 * 60 * 24));
    this.setState({
      toDateDiff: diffDays - 1
    });
  }
  toDateChange = toDate => {
    this.setState({
      toDate: toDate
    });
  };
  handleDropdownChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleValidation() {
    let fromDate = this.state.fromDate;
    let toDate = this.state.toDate;
    let errors = {};
    let formIsValid = true;

    if (fromDate === "") {
      formIsValid = false;
      errors["fromDate"] = "Select from Date";
    }
    if (toDate === "") {
      formIsValid = false;
      errors["toDate"] = "Select to Date";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  dbDataSearch = e => {
    e.preventDefault();
    if (this.handleValidation()) {
      e.target.reset();
      this.setState({
        fromDate: "",
        toDate: "",
        selectedURL: "",
      });
    } else {
      alert("Form has errors.");
      return false;
    }
    this.selectedDate();
    axios
      .get(`http://localhost:3000/v1/reports?&${requestData}`)
      .then(response => {
        this.setState({
          summryReportDataList: response.data,
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          summryReportDataList: jsondetailReportDataList,
        });
      });
  };
  
  selectedDate(){
    let fromDateYYDDMM = this.state.fromDate.getFullYear() + "-" + (this.state.fromDate.getMonth() + 1) + "-" + this.state.fromDate.getDate();
    let toDateYYDDMM = this.state.toDate.getFullYear() + "-" + (this.state.toDate.getMonth() + 1) + "-" + this.state.toDate.getDate();
    requestData = `fromDate=${fromDateYYDDMM}&toDate=${toDateYYDDMM}&selectedURL=${this.state.selectedURL}`;
    return requestData;
  }
  componentDidMount() {
    this.selectedDate();
    axios
      .get(`http://localhost:3000/v1/reports?&${requestData}`)
      .then(response => {
        this.setState({
          summryReportDataList: response.data,
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          summryReportDataList: jsondetailReportDataList,
        });
      });
  }
  render() {
    return (
      <div className='container-fluid'>
        <div className="col-sm-12">
          <div className="row form_layout border-grid">
            <p>Filter summery report</p>
            <form onSubmit={this.dbDataSearch.bind(this)}>
              <div className="col-sm-3 form-group">
                <label>
                  <b>
                    From Date:<span className="mandatory">*</span>
                  </b>
                </label>
                <DatePicker className="form-control" dateFormat="yyyy/MM/dd"
                  selected={this.state.fromDate}
                  onChange={this.fromDateChange} maxDate={new Date()}
                  minDate={addDays(new Date(), -180)}
                  placeholderText="YYYY/MM/DD"
                />
                <span className="mandatory">
                  {this.state.errors["fromDate"]}
                </span>
              </div>
              <div className="col-sm-3 form-group">
                <label>
                  <b>
                    <span>To Date:<span className="mandatory">*</span></span>
                  </b>
                </label>
                <DatePicker className="form-control" dateFormat="yyyy/MM/dd"
                  selected={this.state.toDate}
                  onChange={this.toDateChange} maxDate={new Date()}
                  minDate={addDays(new Date(), -this.state.toDateDiff)}
                  placeholderText="YYYY/MM/DD"
                />
                <span className="mandatory">
                  {this.state.errors["toDate"]}
                </span>
              </div>
              <div className="col-sm-3 form-group">
                <label>
                  <b><sapn>URL'S</sapn></b>
                </label>
                <select
                  name="selectedURL"
                  className="form-control"
                  onChange={this.handleDropdownChange}
                >
                  {URLList.map(function (URLList, i) {
                    return (
                      <option key={i} value={URLList}>
                        {URLList}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="col-sm-3">
                <button className="btn btn-primary" style={{ "marginTop": "38px" }}>Search</button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <SummaryTableReport dbDataList={this.state.summryReportDataList} />
          </div>
        </div>
      </div>
    );
  }
}

export default SummaryReport;
