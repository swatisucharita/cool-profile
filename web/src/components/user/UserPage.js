import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserList from './UserList';
import {browserHistory} from 'react-router';

class UserPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.RedirectToRegisterUser = this.RedirectToRegisterUser.bind(this);
  }

  RedirectToRegisterUser(){
    browserHistory.push('/register');
  }

  render() {
    const {users} = this.props;

    return (
      <div className="Users">
        <input
          type="submit"
          value="Register"
          className="btn btn-primary"
          onClick={this.RedirectToRegisterUser} />

        <UserList users={users}/>
      </div>
    );
  }
}

UserPage.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired
};

function mapStateToProps(state, ownProps){
  return {
    users: state.users,
    ajaxCallsCount: state.ajaxCallsCount
  };
}
export default connect(mapStateToProps)(UserPage);
