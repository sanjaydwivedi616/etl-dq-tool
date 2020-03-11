import React, { Component } from 'react';

let r2mBothBgColor = [];
let r2mMatchingBgColor = [];
let m2mBothBgColor = [];
let m2mMatchingBgColor = [];

class DetailsTableReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dbDataList: [],
      errors: {},
      interval: ''
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.dbDataList !== prevState.dbDataList && nextProps.dbDataList) {
      return {
        dbDataList: nextProps.dbDataList
      };
    }
    return null;
  }

  render() {
    let dbDataList = this.props.dbDataList;

    r2mBothBgColor.length = 0;
    r2mMatchingBgColor.length = 0;
    m2mBothBgColor.length = 0;
    m2mMatchingBgColor.length = 0;

    if (dbDataList) {
      dbDataList.map(data => {
        let r2mBothBgColorPercent = data.r2m_both;
        let r2mMatchingColorPercent = data.r2m_both_matching;
        let m2mBothBgColorPercent = data.m2m_both;
        let m2mMatchingColorPercent = data.m2m_both_matching;

        /* vsRods Complete  background color*/
        if (r2mBothBgColorPercent >= 95) {
          r2mBothBgColor.push('#77EA5D');
        }
        if (r2mBothBgColorPercent > 50 && r2mBothBgColorPercent < 95) {
          r2mBothBgColor.push('#f0e94f');
        }
        if (r2mBothBgColorPercent <= 50) {
          r2mBothBgColor.push('#dd7e6b');
        }
        /* vsRods Correct  background color*/
        if (r2mMatchingColorPercent >= 95) {
          r2mMatchingBgColor.push('#77EA5D');
        }
        if (r2mMatchingColorPercent > 50 && r2mMatchingColorPercent < 95) {
          r2mMatchingBgColor.push('#f0e94f');
        }
        if (r2mMatchingColorPercent <= 50) {
          r2mMatchingBgColor.push('#dd7e6b');
        }
        /* vsModm  Complete  background color*/
        if (m2mBothBgColorPercent >= 95) {
          m2mBothBgColor.push('#77EA5D');
        }
        if (m2mBothBgColorPercent > 50 && m2mBothBgColorPercent < 95) {
          m2mBothBgColor.push('#f0e94f');
        }
        if (m2mBothBgColorPercent <= 50) {
          m2mBothBgColor.push('#dd7e6b');
        }
        /* vsModm Correct  background color*/
        if (m2mMatchingColorPercent >= 95) {
          m2mMatchingBgColor.push('#77EA5D');
        }
        if (m2mMatchingColorPercent > 50 && m2mMatchingColorPercent < 95) {
          m2mMatchingBgColor.push('#f0e94f');
        }
        if (m2mMatchingColorPercent <= 50) {
          m2mMatchingBgColor.push('#dd7e6b');
        }
      })
    }
    return (
      <div className='form_layout border-grid'>
        <p>Tool Details Report</p>
        <div className='table-resonsive'>
          <table id='dataTable'>
            <thead>
              <tr>
                <th colSpan='3'></th>
                <th colSpan='8'>R2M MEDS vs RODS Rows</th>
                <th colSpan='5'>Total Current Rows</th>
                <th colSpan='11'>R2M MEDS vs MODM MEDS Rows</th>
                <th colSpan='5' rowSpan='3'>
                  R2M MEDS vs RODS
                </th>
                <th colSpan='5' rowSpan='3'>
                  R2M MEDS vs MODM MEDS
                </th>
              </tr>
              <tr>
                <th colSpan='3'></th>
                <th colSpan='5'>problem</th>
                <th colSpan='3'>good</th>
                <th rowSpan='2'>RODS</th>
                <th colSpan='4' rowSpan='2'>
                  MEDS
                </th>
                <th colSpan='4'>problem</th>
                <th colSpan='7'>good</th>
              </tr>
              <tr>
                <th colSpan='3'></th>
                <th colSpan='3'>RODS_UUIDs are NOT in both</th>
                <th colSpan='2'>RODS_UUIDs are in both</th>
                <th>match</th>
                <th></th>
                <th></th>
                <th colSpan='2'>keys are NOT in both</th>
                <th colSpan='2'>keys are in both</th>
                <th>match</th>
                <th colSpan='6'>
                  values don't match, but in ways that are expected and desired
                </th>
              </tr>
              <tr>
                <th>Base URL</th>
                <th>Set</th>
                <th>table</th>
                <th>in RODS only</th>
                <th>in MEDS only</th>
                <th>in MEDS only: not in RODS current table</th>
                <th>in RODS & MEDS: diff values</th>
                <th>in RODS & MEDS: diff count</th>
                <th>in RODS & MEDS: match</th>
                <th>in MEDS only: NULL SRC_UUID</th>
                <th>in MEDS only: lowercase SRC_UUID</th>
                <th>RODS</th>
                <th>R2M Retry Del</th>
                <th>R2M Retry Upsert</th>
                <th>R2M MEDS</th>
                <th>MODM MEDS</th>
                <th>in R2M only</th>
                <th>in MODM only</th>
                <th>in both: mis-match values</th>
                <th>in both: mis-match count</th>
                <th>in MODM & R2M: match</th>
                <th>mis-match count expected</th>
                <th>in R2M only:no clin data</th>
                <th>in R2M only: exclude</th>
                <th>in MODM only: not in RODS</th>
                <th>in MODM only: del</th>
                <th>in MODM only: exclude</th>
                <th>vsRods Complete</th>
                <th>vsRods Correct</th>
                <th>vsRods</th>
                <th>% in both</th>
                <th>% in both and matching</th>
                <th>vsModm Complete</th>
                <th>vsModm Correct</th>
                <th>vsModm</th>
                <th>% in both</th>
                <th>% in both and matching</th>
              </tr>
            </thead>
            <tbody>
              {undefined !== this.state.dbDataList &&
                this.state.dbDataList.length
                ? this.state.dbDataList.map((dbDataList, index) => (
                  <tr key={index}>
                    <td>{dbDataList.base_url}</td>
                    <td>{dbDataList.set}</td>
                    <td>{dbDataList.table}</td>
                    <td>{dbDataList.vs_rods_in_rods_only}</td>
                    <td>{dbDataList.vs_rods_in_meds_only}</td>
                    <td>{dbDataList.vs_rods_mismatch_values}</td>
                    <td>{dbDataList.vs_rods_mismatch_count}</td>
                    <td>{dbDataList.vs_rods_match}</td>
                    <td>{dbDataList.vs_rods_in_meds_only_lowercase}</td>
                    <td>{dbDataList.vs_rods_in_meds_only_no_src_uuid}</td>
                    <td>{dbDataList.vs_rods_in_meds_only_lowercase}</td>
                    <td>{dbDataList.rows_RODS}</td>
                    <td>{dbDataList.rows_R2M_retry_del}</td>
                    <td>{dbDataList.rows_R2M_retry_upsert}</td>
                    <td>{dbDataList.rows_R2M}</td>
                    <td>{dbDataList.rows_MODM}</td>
                    <td>{dbDataList.vs_modm_in_r2m_only}</td>
                    <td>{dbDataList.vs_modm_in_modm_only}</td>
                    <td>{dbDataList.vs_modm_mismatch_values}</td>
                    <td>{dbDataList.vs_modm_mismatch_count}</td>
                    <td>{dbDataList.vs_modm_match}</td>
                    <td>{dbDataList.vs_modm_mismatch_count_expected}</td>
                    <td>{dbDataList.vs_modm_in_r2m_only_no_clin_data}</td>
                    <td>{dbDataList.vs_modm_in_r2m_only_exclude}</td>
                    <td>{dbDataList.vs_modm_in_modm_only_not_in_rods}</td>
                    <td>{dbDataList.vs_modm_in_modm_only_deleted}</td>
                    <td>{dbDataList.vs_modm_in_modm_only_exclude}</td>
                    <td className="details_Rods">{dbDataList.rodscomplete}</td>
                    <td className="details_Rods">{dbDataList.rodscorrect}</td>
                    <td className="details_Rods">{dbDataList.rods}</td>
                    <td style={{ background: r2mBothBgColor[index] }}>{dbDataList.r2m_both}%</td>
                    <td style={{ background: r2mMatchingBgColor[index] }}>{dbDataList.r2m_both_matching}%</td>
                    <td className="details_Rods">{dbDataList.modmcomplete}</td>
                    <td className="details_Rods">{dbDataList.modmcorrect}</td>
                    <td className="details_Rods">{dbDataList.modm}</td>
                    <td style={{ background: m2mBothBgColor[index] }}>{dbDataList.m2m_both}%</td>
                    <td style={{ background: m2mMatchingBgColor[index] }}>{dbDataList.m2m_both_matching}%</td>
                  </tr>
                ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default DetailsTableReport;
