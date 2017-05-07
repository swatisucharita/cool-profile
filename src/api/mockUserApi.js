  import delay from './delay';

  // mock users
  const users = [
    {
      id: 'swati-sucharita',
      name: 'Swati Sucharita',
      email: 'swati@gmail.com',
      phoneNumber: '+917207565764',
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
      name: 'Tukuna Patro',
      email: 'tukuna@gmail.com',
      phoneNumber: '+918297074155',
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
    return attr.replaceAll(' ', '-');
  };

  class UserApi {
    static loadAllUsers(){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Object.assign([], users));
        }, delay);
      });
    }

    static addUser(user){
      user = Object.assign({}, user);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const manadatoryAttributes = ['name', 'email'];

          manadatoryAttributes.forEach(attr => {
            if (!user[attr]){
              reject(`${attr} is required`);
            }
          });

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
