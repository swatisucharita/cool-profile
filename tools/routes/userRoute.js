import {MongoClient} from 'mongodb';

const mongoUrl = 'mongodb://localhost:27017/profiles-dev';

exports.index = function(req, res){
  let users = [
    {
      id: 1,
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
      id:  2,
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
  return res.json(users);
};

exports.register = function(req, res){
  let user = req.body;
  user.name = [user.firstName, user.lastName].join(' ');
  user.id = user.name.replace(/\s/g, '-');
  return res.json(user);
};
