import React, { Component } from 'react';

class PartyLeader extends Component {
  render() {
    return (
      <div>
        <h2>Party Leader</h2>
        {this.props[0] && <h3>{this.props[0].name}</h3>}
      </div>
    );
  }
}

export default PartyLeader;
