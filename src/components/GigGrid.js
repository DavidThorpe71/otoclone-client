import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';

import { changeTestOutcome, cheeseIsNice } from '../redux/actions/test';
import SingleGig from './SingleGig';

class GigGrid extends Component {
  handleClick = () => {
    this.props.changeTestOutcome();
  }

  handleCheese = () => {
    this.props.cheeseIsNice();
  }

  render() {
    const { changeTestOutcome, testSuccess, cheeseIsNice } = this.props;
    return (
      <div className="test-grid">
        <h3 className="title">Here is a button</h3>
        <Button variant="raised" color="primary" onClick={this.handleClick}>
          Toggle
        </Button>
        <Button variant="raised" color="secondary" onClick={this.handleCheese}>
          Cheese
        </Button>
        <h3>{String(testSuccess)}</h3>
        <div className="gig-grid">
          <SingleGig />
          <SingleGig />
          <SingleGig />
          <SingleGig />
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  testSuccess: state.testReducer.test.testSuccess,
  cheese: state.testReducer.cheese.cheese
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeTestOutcome,
  cheeseIsNice
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GigGrid);