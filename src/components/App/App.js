import React, { Component } from 'react';

// --- Components ---
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GuestForm from '../GuestForm/GuestForm';
import GuestList from '../GuestList/GuestList';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies';

// --- Styles ---
import './App.css';

class App extends Component {
  state = {
    guestList: [
      {
        name: 'Armando',
        kidsMeal: 'no',
      },
    ],
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
        <h2>Party Leader</h2>
        {this.state.guestList[0] && <h3>{this.state.guestList[0].name}</h3>}
        <GuestForm
          handleChangeFor={this.handleChangeFor}
          handleSubmit={this.handleSubmit}
          value={this.state.newGuest}
        />

        <GuestList guestList={this.state.guestList} />
        <DinnerSupplies guestList={this.state.guestList.length} />
        <Footer />
      </div>
    );
  }
}

export default App;
