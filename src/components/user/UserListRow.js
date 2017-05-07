import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const UserListRow = ({user}) => {
  return (
    <tr>
      <td><Link to={'/user/' + user.id}>{user.name}</Link></td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
    </tr>
  );
};

UserListRow.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserListRow;
