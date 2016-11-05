import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import App from '../layouts/App.jsx';

export default createContainer(() => {
  //Handle subscriptions here.
  //return reactive data sources to App.jsx
  return {
    user: Meteor.user()
  }
}, App);
