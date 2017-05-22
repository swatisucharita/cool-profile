  import delay from './delay';

  // mock users
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

  class UserApi {
    static loadAllUsers(){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Object.assign([], users));
        }, delay);
      });
    }

    static registerUser(user){
      user = Object.assign({}, user);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const manadatoryAttributes = ['firstName', 'lastName', 'email'];

          manadatoryAttributes.forEach(attr => {
            if (!user[attr]){
              reject(`${attr} is required`);
            }
          });

          user.name = [user.firstName, user.lastName].join(' ');
          user.id = generateId(user.name);
          users.push(user);

          resolve(user);
        }, delay);
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
