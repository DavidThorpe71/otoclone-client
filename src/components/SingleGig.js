import React, { Component } from 'react';

class SingleGig extends Component {
  render() {
    return (
      <div className="activity-container">
        <div className="each-header">
          <p className="uppercase">Wednesday 30 May 2018, 20:31</p>
        </div>
        <div className="each-image">
          <a href="/">
            <img src="https://www.cafeoto.co.uk/media/thumbnails/uploads/csm-anthony-braxton-orig-4875b1c19b_grayscale.jpg" alt="" />
          </a>
        </div>
        <div className="each-header">
          <p>
            <a href="/" className="uppercase">Anthony Braxton in conversation with Alexander Hawkins</a>
          </p>
        </div>
        <div className="each-price">
          <div className="member-price">
            <span>£6</span>
            <span>
              <a href="/" className="active">£5 Advance</a></span>
            <span>£4 MEMBERS</span>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleGig;