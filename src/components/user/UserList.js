import React, {PropTypes} from 'react';
import UserListRow  from './UserListRow';

const UserList = ({users}) => {
  return (
    <table id="users-list">
      <thead>
        <tr className="bg-gull-gray fg-white">
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => {
          return (<UserListRow key={user.id} user={user} />);
        })}
      </tbody>
    </table>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
