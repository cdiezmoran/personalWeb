import React, { Component } from 'react'

export default class AboutSection extends Component {
  render() {
    return(
      <div className="about-section">
        <div className="circular-img"></div>
        <span className="about-title">About</span>
        <div className="divider-about"></div>
        <span className="about-content">
          Cras sed massa tellus. Morbi sodales eget ligula ac volutpat. Etiam cursus, est eget molestie ornare, risus nisl fermentum elit, in elementum augue diam eu massa. Aenean feugiat neque nisl, ut finibus sapien aliquet at. Maecenas venenatis mi et sem tincidunt lacinia. Vestibulum ut sem ac diam mollis luctus quis a mauris. Morbi in accumsan nibh. Ut tempus sapien sed sodales ornare.
        </span>
      </div>
    )
  }
}
