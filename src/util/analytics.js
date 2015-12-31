import Parse from 'parse';
import config from '../../config.json';

const { PARSE_APP, PARSE_KEY } = config;

Parse.initialize(PARSE_APP, PARSE_KEY);

export default {
  track( name, dimensions ) {
    Parse.Analytics.track(name, dimensions);
  },
}
