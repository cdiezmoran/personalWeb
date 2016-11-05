import React, { Component } from 'react';

export default class PageHeader extends Component {
  render() {
    return (
      <div className="page-header">
        <div className="center-div">
          <span className="intro-header">
            Hi, I'm
          </span>
          <div className="divider-header"></div>
          <span className="name-header">
            Carlos Diez
          </span>
          <span className="sections-header">
            <a href="#" className="link-about">About</a> /
            <a href="#" className="link-aptitudes"> Aptitudes</a> /
            <a href="#" className="link-studies"> Studies</a> /
            <a href="#" className="link-portfolio"> Portfolio</a> /
            <a href="#" className="link-contact"> Contact</a>
          </span>
        </div>
      </div>
    )
  }
}
