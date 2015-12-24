// import Promise from 'bluebird';
// import Parse from 'parse/node';
// import config from '../../src/config';

// const { PARSE_APP, PARSE_KEY } = config;

// export default {
//   save(data) {
//     Parse.initialize(PARSE_APP, PARSE_KEY);
//     const Users = Parse.Object.extend('Users');
//     const userDb = new Users();

//     return Promise.resolve(userDb.save(data)).then((user) => user);
//   }
// }
