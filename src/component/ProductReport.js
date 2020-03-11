import React, { Component } from 'react';
import UrlSearch from './UrlSearch';
import BarChart from './chart/BarChart';

class ProductReport extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <UrlSearch />
        <div className='row'>
          <div className='col-sm-12'>
            <BarChart />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductReport;
