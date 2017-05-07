import React, {PropTypes} from 'react';
import {connect} from 'redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

class RegisterUserPage extends React.Component {
  render(){
    return (
      <RegistrationForm user={this.props.user} />
    )
  }
}

RegisterUserPage.propTypes = {
  user: PropTypes.object.isRequired
};

function mapStateToProps(state){
  let user = {name: '', email: '', phoneNumber: '', address: {}};

  return {
    user: user
  };
}
export default connect(mapStateToProps)(RegisterUserPage);
