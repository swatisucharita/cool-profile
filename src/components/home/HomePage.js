import React from 'react';
import UserPage from '../user/UserPage';

class HomePage extends React.Component {
  render() {
    return (
      <div className="users-list">
        <h3 className="text-uppercase">LIST OF USERS</h3>
        <UserPage />
      </div>
    );
  }
}

export default HomePage;
