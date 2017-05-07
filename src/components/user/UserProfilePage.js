import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

class UserProfilePage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.formattedAddress = this.formattedAddress.bind(this);
  }

  formattedAddress(address={}){
    return Object.values(address).join(', ');
  }

  render(){
    const {user} = this.props;
    return (
      <div className="jumbotron user-info text-center">
        <h3>{user.name}</h3>
        <div className="contact-info row-buffer">
          <span className="email">{user.email}</span>
          <span className="tel">{user.phoneNumber}</span>
        </div>
        <div className="address-info row-buffer">
          {this.formattedAddress(user.address)}
        </div>
      </div>
    );
  }
}

UserProfilePage.propTypes = {
  user: PropTypes.object.isRequired
};

function findUserByid(users, id){
    return users.find(u => u.id === id );
}

function mapStateToProps(state, ownProps){
  const userId = ownProps.params.id;
  let user = {};

  if (userId && state.users.length){
    user = findUserByid(state.users, userId);
  }

  return {
    user: user
  };
}

export default connect(mapStateToProps)(UserProfilePage);
