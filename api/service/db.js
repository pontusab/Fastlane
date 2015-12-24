import Promise from 'bluebird';
import Parse from 'parse/node';
import config from '../../src/config';

const { PARSE_APP, PARSE_KEY } = config;

// export default function db() {
//   Parse.initialize(PARSE_KEY, PARSE_SECRET);

//   var TestObject = Parse.Object.extend("TestObject");
//   var testObject = new TestObject();
//   testObject.save({foo: "bar"}).then(function(object) {
//     console.log(object);
//   });
// }
