import React, { Component } from "react";

let RODScompbgc = [];
let vsRODScorrbgc = [];
let MODMScompbgc = [];
let vsMODMScorrbgc = [];

class SummaryTableReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: "",
      summryTableReportData: []
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.summryTableReportData !== prevState.summryTableReportData && nextProps.summryTableReportData) {
      return {
        summryTableReportData: nextProps.summryTableReportData
      };
    }
    return null;
  }
  render() {
    let groupedData = [];
    let summryTableReportData = this.props.dbDataList;

    if (summryTableReportData) {
      let tableName = [];
      let URLName = [];
      summryTableReportData.map(sum => {
        tableName.push(sum.table);
        URLName.push(sum.base_url);
      });
      RODScompbgc.length = 0;
      vsRODScorrbgc.length = 0;
      MODMScompbgc.length = 0;
      vsMODMScorrbgc.length = 0;
      let tableNameFilter = Array.from(new Set(tableName));
      groupedData = tableNameFilter.map(uniqueTable => {
        let newArray = summryTableReportData.filter(summary => {
          return uniqueTable === summary.table;
        });
        const uniqueURL_ARR = [...new Set(newArray.map(item => item.base_url))];
        let R2MMEDSRows = {};
        let MODMMEDSRows = {};
        let vsRODScomplete = {};
        let vsRODScorrect = {};
        let vsMODMcomplete = {};
        let vsMODMcorrect = {};
        uniqueURL_ARR.map(uniqueURL => {
          let R2MMEDSRows_count = 0;
          let MODMMEDSRows_count = 0;
          let vsRODScompleteRow_count;
          let vsRODScorrectRow_count;
          let vsMODMcompleteRow_count;
          let vsMODMScorrectRow_count;

          let sumOfvsRODScomplete = 0;
          let sumOfRODS = 0;
          let sumOfRODScorrect = 0;

          let sumOfvsMODMcomplete = 0;
          let sumOfMODM = 0;
          let sumOfvsMODMcorrect = 0;

          newArray.forEach(data => {
            if (data.base_url === uniqueURL) {
              //vs RODS complete	vs RODS correct % calculation
              sumOfvsRODScomplete = sumOfvsRODScomplete + data.rodscomplete;
              sumOfRODS = sumOfRODS + data.rods;
              sumOfRODScorrect = sumOfRODScorrect + data.rodscorrect;
              //vs MODM complete	vs MODM correct  % calculation
              sumOfvsMODMcomplete = sumOfvsMODMcomplete + data.modmcomplete;
              sumOfMODM = sumOfMODM + data.modm;
              sumOfvsMODMcorrect = sumOfvsMODMcorrect + data.modmcorrect;
              //R2M MEDS Rows	MODM MEDS Rows sum
              R2MMEDSRows_count = R2MMEDSRows_count + data.rows_r2m;
              MODMMEDSRows_count = MODMMEDSRows_count + data.rows_modm;
            }
          });

          //vs RODS complete	vs RODS correct % calculation
          if (sumOfvsRODScomplete === 0 || sumOfRODS === 0) {
            vsRODScompleteRow_count = 0;
          } else {
            vsRODScompleteRow_count = Math.round(
              (sumOfvsRODScomplete * 100) / sumOfRODS
            );
          }
          if (sumOfRODScorrect === 0 || sumOfRODS === 0) {
            vsRODScorrectRow_count = 0;
          } else {
            vsRODScorrectRow_count = Math.round(
              (sumOfRODScorrect * 100) / sumOfRODS
            );
          }

          //vs MODM complete	vs MODM correct  % calculation
          if (sumOfvsMODMcomplete === 0 || sumOfMODM === 0) {
            vsMODMcompleteRow_count = 0;
          } else {
            vsMODMcompleteRow_count = Math.round(
              (sumOfvsMODMcomplete * 100) / sumOfMODM
            );
          }

          if (sumOfvsMODMcorrect === 0 || sumOfMODM === 0) {
            vsMODMScorrectRow_count = 0;
          } else {
            vsMODMScorrectRow_count = Math.round(
              (sumOfvsMODMcorrect * 100) / sumOfMODM
            );
          }

          vsRODScomplete[uniqueURL] = vsRODScompleteRow_count;
          vsRODScorrect[uniqueURL] = vsRODScorrectRow_count;
          vsMODMcomplete[uniqueURL] = vsMODMcompleteRow_count;
          vsMODMcorrect[uniqueURL] = vsMODMScorrectRow_count;
          R2MMEDSRows[uniqueURL] = R2MMEDSRows_count;
          MODMMEDSRows[uniqueURL] = MODMMEDSRows_count;
          /* vsRODScompleteRow_count Background color */
          if (vsRODScompleteRow_count >= 95) {
            RODScompbgc.push("#77EA5D");
          }
          if (vsRODScompleteRow_count > 50 && vsRODScompleteRow_count < 95) {
            RODScompbgc.push("#f0e94f");
          }
          if (vsRODScompleteRow_count <= 50) {
            RODScompbgc.push("#dd7e6b");
          }
          /* vsRODScorrectRow_count Background color */
          if (vsRODScorrectRow_count >= 95) {
            vsRODScorrbgc.push("#77EA5D");
          }
          if (vsRODScorrectRow_count > 50 && vsRODScorrectRow_count < 95) {
            vsRODScorrbgc.push("#f0e94f");
          }
          if (vsRODScorrectRow_count <= 50) {
            vsRODScorrbgc.push("#dd7e6b");
          }
          /* vsMODMcompleteRow_count Background color */
          if (vsMODMcompleteRow_count >= 95) {
            MODMScompbgc.push("#77EA5D");
          }
          if (vsMODMcompleteRow_count > 50 && vsMODMcompleteRow_count < 95) {
            MODMScompbgc.push("#f0e94f");
          }
          if (vsMODMcompleteRow_count <= 50) {
            MODMScompbgc.push("#dd7e6b");
          }
          /* vsMODMScorrectRow_count Background color */
          if (vsMODMScorrectRow_count >= 95) {
            vsMODMScorrbgc.push("#77EA5D");
          }
          if (vsMODMScorrectRow_count > 50 && vsMODMScorrectRow_count < 95) {
            vsMODMScorrbgc.push("#f0e94f");
          }
          if (vsMODMScorrectRow_count <= 50) {
            vsMODMScorrbgc.push("#dd7e6b");
          }
        });
        return {
          table: uniqueTable,
          data: newArray,
          vsRODScomplete_count: vsRODScomplete,
          vsRODScorrect_count: vsRODScorrect,
          vsMODMcomplete_count: vsMODMcomplete,
          vsMODMcorrect_count: vsMODMcorrect,
          R2MMEDS_count: R2MMEDSRows,
          MODMMED_count: MODMMEDSRows
        };
      });
    } else {
      console.log("empty");
    }
    return (
      <div className="form_layout border-grid">
        <p>Summary Report</p>
        <div className="table-resonsive-summery">
          <table id="dataTable">
            <thead>
              <tr>
                <th>Table</th>
                <th>Base URL</th>
                <th>vs RODS complete</th>
                <th>vs RODS correct</th>
                <th>vs MODM complete</th>
                <th>vs MODM correct</th>
                <th>R2M MEDS Rows</th>
                <th>MODM MEDS Rows</th>
              </tr>
            </thead>
            <tbody>
              {groupedData.map((data, index) => {
                return Object.keys(data.R2MMEDS_count).map(url => {
                  return (
                    <tr key={index}>
                      <td>{data.table}</td>
                      <td>{url}</td>
                      <td style={{ background: RODScompbgc[index] }}>
                        {data.vsRODScomplete_count[url]}%
                      </td>
                      <td style={{ background: vsRODScorrbgc[index] }}>
                        {data.vsRODScorrect_count[url]}%
                      </td>
                      <td style={{ background: MODMScompbgc[index] }}>
                        {data.vsMODMcomplete_count[url]}%
                      </td>
                      <td style={{ background: vsMODMScorrbgc[index] }}>
                        {data.vsMODMcorrect_count[url]}%
                      </td>
                      <td>{data.R2MMEDS_count[url]}</td>
                      <td>{data.MODMMED_count[url]}</td>
                    </tr>
                  );
                });
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default SummaryTableReport;
