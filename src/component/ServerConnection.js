import React, { Component } from 'react';
import axios from 'axios';

class ServerConnection extends Component {
  constructor() {
    super();
    this.state = {
      connection1: '',
      connection2: '',
      connection3: '',
      connection4: '',
      connection5: '',
      connection6: '',
      connection7: '',
      connection8: ''
    };
  }
  updateInputValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  SubmitConnectionData = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/v1/templates', this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const {
      connection1,
      connection2,
      connection3,
      connection4,
      connection5,
      connection6,
      connection7,
      connection8
    } = this.state;
    return (
      <div className='row container-fluid'>
        <div className='form_layout border-grid'>
          <p>Change the DB connection</p>
          <form onSubmit={this.SubmitConnectionData}>
            <div className='col-sm-3 form-group'>
              <label>
                <b>Connection1 :</b>
              </label>
              <input
                className='form-control'
                name='connection1'
                value={connection1}
                onChange={this.updateInputValue}
              />
            </div>
            <div className='col-sm-3 form-group'>
              <label>
                <b>Connection2 :</b>
              </label>
              <input
                className='form-control'
                name='connection2'
                value={connection2}
                onChange={this.updateInputValue}
              />
            </div>
            <div className='col-sm-3 form-group'>
              <label>
                <b>Connection3 :</b>
              </label>
              <input
                className='form-control'
                name='connection3'
                value={connection3}
                onChange={this.updateInputValue}
              />
            </div>
            <div className='col-sm-3 form-group'>
              <label>
                <b>Connection4 :</b>
              </label>
              <input
                className='form-control'
                name='connection4'
                value={connection4}
                onChange={this.updateInputValue}
              />
            </div>
            <div className='row'>
              <div className='col-sm-3 form-group'>
                <label>
                  <b>Connection5 :</b>
                </label>
                <input
                  className='form-control'
                  name='connection5'
                  value={connection5}
                  onChange={this.updateInputValue}
                />
              </div>
              <div className='col-sm-3 form-group'>
                <label>
                  <b>Connection6 :</b>
                </label>
                <input
                  className='form-control'
                  name='connection6'
                  value={connection6}
                  onChange={this.updateInputValue}
                />
              </div>
              <div className='col-sm-3 form-group'>
                <label>
                  <b>Connection7 :</b>
                </label>
                <input
                  className='form-control'
                  name='connection7'
                  value={connection7}
                  onChange={this.updateInputValue}
                />
              </div>
              <div className='col-sm-3 form-group'>
                <label>
                  <b>Connection8 :</b>
                </label>
                <input
                  className='form-control'
                  name='connection8'
                  value={connection8}
                  onChange={this.updateInputValue}
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-2 form-group'>
                <button className='btn btn-primary search-btn' type='submit'>
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ServerConnection;
