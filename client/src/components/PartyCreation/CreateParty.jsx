import React from 'react';
import axios from 'axios';

class CreateParty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      start: '',
      end: '',
      date: '',
      radius: '',
      details: 'no details yet',
      longitude: 1,
      latitude: 1,
      host_id: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { getNewPartyEntry } = this.props
    console.log('clicked the submit button: ', this.state);
    axios.post('/api/homepage', this.state)
    .then((response) => {
      console.log(response);
      getNewPartyEntry();
      })
      .catch((error) => { console.log(error); });
  }

  render() {
    return (
      <div className="partyCreation">
      <div className="container">
        <div className="row">
          <div className="col center">
        <form onSubmit={this.handleSubmit}>
          <h3>Party Creation Tools</h3>
      <div className="form-group partyInput">
          <label>Party</label>
            <input
              className="form-control"
              name="name"
              type="text"
              placeholder="Name Your Party"
              onChange={this.handleChange}
              />
          <label>Party details</label>
            <textarea
              className="form-control"
              name="details"
              placeholder="Details"
              onChange={this.handleChange}
              />
          <label>Start Time</label>
            <input
              className="form-control"
              name="start"
              type="time"
              onChange={this.handleChange}
              />
          <label>End Time</label>
            <input
              className="form-control"
              type="time"
              name="end"
              onChange={this.handleChange}
              />
          <label>Date</label>
            <input
              className="form-control"
              type="date"
              name="date"
              onChange={this.handleChange}
              />
          <label>Radius</label>
            <input
              className="form-control"
              type="number"
              name="radius"
              placeholder="Miles"
              onChange={this.handleChange}
              />
            <input
              className="form-control btn btn-primary"
              type="submit"
              value="submit"
              />
          </div>
        </form>
      </div>
              </div>
            </div>
            </div>
    );
  }
}

export default CreateParty;
