import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserList from './UserList';
import {browserHistory} from 'react-router';

class UserPage extends React.Component {
  render() {
    const {users} = this.props;

    return (
      <div className="Users">
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
    users: state.users
  };
}
export default connect(mapStateToProps)(UserPage);
