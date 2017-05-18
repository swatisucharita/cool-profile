import delay from './delay';
import $ from 'jquery';

const users = [
  {
    id: 'swati-sucharita',
    firstName: 'Swati',
    lastName: 'Sucharita',
    name: 'Swati Sucharita',
    email: 'swati@gmail.com',
    phoneNumber: '+917207565764',
    gender: 'female',
    address: {
      street1: 'Chanda Naik Thanda',
      street2: 'Madhapur',
      city: 'Hyderbad',
      state: 'Telengana',
      pincode: '500081',
      countryCode: 'IN'
    }
  },
  {
    id:  'tukuna-patro',
    firstName: 'Tukuna',
    lastName: 'Patro',
    name: 'Tukuna Patro',
    email: 'tukuna@gmail.com',
    phoneNumber: '+918297074155',
    gender: 'male',
    address: {
      street1: 'Anatei',
      street2: '',
      city: 'Berhampur',
      state: 'Odisha',
      pincode: '752104',
      countryCode: 'IN'

    }
  }
];

const generateId = (attr) => {
  return attr.replace(' ', '-');
};

const baseURL = '//localhost:3000/api/';
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
