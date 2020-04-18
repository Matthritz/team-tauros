import React from 'react';
import PartyListItem from './PartyListItem.jsx';

const PartyList = ({ parties, getPartyInfo }) => (
    <div className="party-list overflow:scroll" >
      <h3>Parties near you!</h3>
      <div className="container">
        <div className="row">
          <div className="col"><h4>Party Name</h4></div>
          {/* <div className="col"><h4>Location</h4></div> */}
          <div className="col"><h4>Start Time</h4></div>
          <div className="col"><h4>End Time</h4></div>
          {/* <div className="col"><h4>Radius</h4></div> */}
          <div className="col"><h4>Party Details</h4></div>
          <div className="col"><h4>Link to Join</h4></div>
        </div>
      </div>
      {parties.map((party) => <PartyListItem key={party.id} party={party} getPartyInfo={getPartyInfo} />)}
    </div>
  );

export default PartyList;
