import React from 'react';
import { Meteor } from 'meteor/meteor';
//import components here

export default class App extends React.Component {
  render() {
    const {
      user,
      children,
      location
    } = this.props

    const clonedChildren = children && React.cloneElement(children, {
      key: location.pathname,
    });

    return (
      <div className="content">
        <h1>Hello, React Router!</h1>
        <div className="content-container" >
          {clonedChildren}
        </div>
      </div>
    );
  }
};
