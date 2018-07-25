import React from "react";
import "./FriendsApp.css";
import { connect } from "react-redux";
import {
  addFriend,
  loadDummyData,
  clearFriendsList,
  error
} from "../../reducers/friends/actions";
import { Header, AddFriend, FriendsList } from "./components";
// Simpel Helper Function to validate data, If you use thunk for async actions you would validate within Reducer Actions
const isValid = name => {
  return name !== null && name !== undefined && name.length > 0;
};

class FriendsApp extends React.Component {
  state = {
    firstName: "",
    lastName: ""
  };

  _handleTextInput = e => {
    // Setting the input value changes using * [Computed Property] * ES6 Syntax
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  _addFriend = e => {
    e.preventDefault();
    const { firstName, lastName } = this.state;

    //Simple Check if Valid
    if (isValid(firstName) && isValid(lastName)) {
      //This is the function give to the component through Connect
      //Explicitly its passed by mapDispatchToProps
      this.props.addFriend(firstName, lastName);
    } else {
      //Error Sent to Reducer if Invalid
      let message = "Invalid First Name or Last Name Entry";

      //Error Message Functions that was also passed by mapDispatchToProps
      this.props.error(message);
    }
  };

  render() {
    return (
      <div className="container">
        <AddFriend
          //Passing Down value from state
          header={<Header title="Friends App" />}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          //Passing Down function to Handle Text Input
          handleTextInput={this._handleTextInput}
          //Add Friend is passed down
          addFriend={this._addFriend}
          loadDummyData={this.props.loadDummyData}
          clearFriendsList={this.props.clearFriendsList}
          error={this.props.errorMessage}
          friendsList={<FriendsList />}
        />
      </div>
    );
  }
}

// This is the function we pass as first Parameter to connect
// This function is used as a callback to map the Reducer state to Props of this component
const mapStateToProps = state => {
  return {
    errorMessage: state.error
  };
};

// This is the function to pass the dispatch or actions into our componenet
// I named them the same as the actions I imported to see it easier
const mapDispatchToProps = dispatch => {
  return {
    addFriend: (firstName, lastName) => {
      dispatch(addFriend(firstName, lastName));
    },
    loadDummyData: () => {
      dispatch(loadDummyData());
    },
    clearFriendsList: () => {
      dispatch(clearFriendsList());
    },
    error: message => {
      dispatch(error(message));
    }
  };
};

// This will export the component which is wrapped with connect
// Tip - Connect is  a HOC (Higher Order Componenet) which is a function that returns a component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsApp);
