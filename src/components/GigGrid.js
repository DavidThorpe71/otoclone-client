import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from '@material-ui/core/Button';

import { changeTestOutcome, cheeseIsNice } from '../redux/actions/test';
import SingleGig from './SingleGig';
import { getUsers } from '../redux/actions/users';

class GigGrid extends Component {

  handleClick = () => {
    this.props.changeTestOutcome();
  }

  handleCheese = () => {
    this.props.cheeseIsNice();
  }

  handleGetUsers = () => {
    this.props.getUsers()
  }

  render() {
    const { changeTestOutcome, testSuccess, cheeseIsNice, users } = this.props;
    console.log('users', users);
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

        <Button variant="raised" color="primary" onClick={this.handleGetUsers}>
          Load Users
        </Button>
        <h1>Users</h1>
        {users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}

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
  cheese: state.testReducer.cheese.cheese,
  users: state.users.users
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeTestOutcome,
  cheeseIsNice,
  getUsers
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GigGrid);