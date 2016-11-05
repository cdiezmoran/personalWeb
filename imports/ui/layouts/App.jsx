import React from 'react';
import { Meteor } from 'meteor/meteor';
//import components here
import PageHeader from '../components/PageHeader.jsx';
import AboutSection from '../components/AboutSection.jsx';
import WorkSection from '../components/WorkSection.jsx';

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
        <div className="wrapper">
          <PageHeader />
          <AboutSection />
          <WorkSection />
        </div>
        <div className="content-container" >
          {clonedChildren}
        </div>
      </div>
    );
  }
};
