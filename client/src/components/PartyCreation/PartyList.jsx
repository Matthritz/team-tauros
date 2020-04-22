import React from 'react';
import PartyListItem from './PartyListItem.jsx';

const PartyList = ({ parties, getPartyInfo, getUserLocation }) => (
    <div className="party-list">
      <h3>Parties Near You!</h3>
      <div className="container-fluid">
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
      <div className="items-list">
      {parties.map((party) => <PartyListItem key={party.id} party={party} getPartyInfo={getPartyInfo} getUserLocation={getUserLocation} />)}
    </div>
    </div>
  );

export default PartyList;
