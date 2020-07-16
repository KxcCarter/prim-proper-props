import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          Prim Proper Props{' '}
          <span role="img" aria-label="cool emoji">
            😎
          </span>
        </h1>
      </header>
    );
  }
}

export default Header;
