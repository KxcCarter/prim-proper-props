import React, { Component } from 'react';

// --- Components ---
import Header from '../Header/Header';
import PartyLeader from '../PartyLeader/PartyLeader';
import GuestForm from '../GuestForm/GuestForm';

// --- Styles ---
import './App.css';

class App extends Component {
  state = {
    guestList: [],
    newGuest: {
      name: '',
      kidsMeal: 'no',
    },
  };

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      newGuest: {
        ...this.state.newGuest,
        [propertyName]: event.target.value,
      },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.newGuest.name) {
      this.setState({
        guestList: [...this.state.guestList, this.state.newGuest],
        newGuest: {
          name: '',
          kidsMeal: 'no',
        },
      });
    } else {
      alert('The new guest needs a name!');
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <PartyLeader guestList={this.state.guestList} />
        <GuestForm
          handleChangeFor={this.handleChangeFor}
          handleSubmit={this.handleSubmit}
          value={this.state.newGuest}
        />
        <h2>Guest List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Kid's Meal</th>
            </tr>
          </thead>
          <tbody>
            {this.state.guestList.map((guest) => (
              <tr key={guest.name}>
                <td>{guest.name}</td>
                <td>{guest.kidsMeal}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Dinner Supplies</h2>
        <div>Spoons: {this.state.guestList.length * 2}</div>
        <div>Forks: {this.state.guestList.length * 2}</div>
        <div>Knives: {this.state.guestList.length * 2}</div>
        <footer>
          <h3>Have fun!</h3>
          <p>Don't forget to mind your Ps and Qs!</p>
        </footer>
      </div>
    );
  }
}

export default App;
