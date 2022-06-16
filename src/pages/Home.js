import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Home extends React.Component {
  render() {

    return (
      <div>
        <Link to="/login">Login</Link>
        HOME
      </div>
    );
  }
};

export default Home;