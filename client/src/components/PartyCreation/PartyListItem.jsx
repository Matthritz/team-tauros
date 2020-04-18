import React from 'react';
import { Link } from 'react-router-dom';

const PartyListItem = ({ party, getPartyInfo }) => (

  // Render individual party details.
  <div>
    <div className="party-container container border">
      <div className="row party-list-item">
        <div className="partyName col">{party.name}</div>
        {/* <div className="partyLocation col">{party.host_location}</div> */}
        <div className="partyStart col">{party.start}</div>
        <div className="partyEnd col">{party.end}</div>
        {/* <div className="partyRadius col">{party.radius}</div> */}
        <div className="partyDetails col">{party.details}</div>
        <div className="partyLink col">
        <Link to={{ pathname: '/chatroom' }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={()=>{getPartyInfo(party)}}
          >Join Party</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default PartyListItem;
