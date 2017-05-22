import delay from './delay';
import $ from 'jquery';

const baseURL = '//localhost:3001/api/';
class UserApi {
  static loadAllUsers(){
    return $.getJSON(baseURL + 'users', (data) => {
      return data.users;
    }, (response) => {
      return response;
    });
  }

  static registerUser(user){
    user = Object.assign({}, user);

    return $.ajax({
      url: (baseURL + 'user'),
      type: 'POST',
      data: user,
      onSuccess: function(data){
        return data;
      },
      onError: function(err){
        return err;
      }
    });
  }

  static updateUser(user){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const manadatoryAttributes = ['name', 'email'];
        manadatoryAttributes.forEach(attr => {
          if (!user[attr]){
            reject(`${attr} is required`);
          }
        });

        const existingUser = users.find(u => u.id=== user.id );
        Object.keys(user).forEach(k => {
          existingUser[k] = user[k];
        });

        resolve(user);
      }, delay);
    });
  }
}

export default UserApi;
