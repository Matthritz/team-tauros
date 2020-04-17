import React from 'react';
import PartyList from './PartyList.jsx';
import CreateParty from './CreateParty.jsx';
import axios from 'axios';


class Parties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parties: [],
    };
    this.getNewPartyEntry = this.getNewPartyEntry.bind(this);
  }

  componentDidMount() {
    this.getParties();
  }

  //  Get Parties from DB
  getParties() {
    axios.get('/api/homepage')
      .then((response) => this.setState({ parties: response.data }))
      .catch((error) => { throw error; });
  }

  // Get newly create party
  getNewPartyEntry() {
    this.getParties();
  }

  render() {
    const { parties } = this.state;

    return (
      <div className="partiesPage">
      <div className="container">
      <div className="row">
        <h1>Parties Page</h1>
        </div>
      <div className="row">
        <div className="col">
          <CreateParty getNewPartyEntry={this.getNewPartyEntry} />
        </div>
        <div className="col">
          <PartyList parties={parties} />
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Parties;
