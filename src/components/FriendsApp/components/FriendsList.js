import React from "react";
import { connect } from "react-redux";
import "./FriendsList.css";

class FriendsList extends React.Component {
  _renderFriendsList = () => {
    return this.props.friendsList.map((friend, index) => {
      return (
        <tr key={index}>
          <td>{friend.firstname}</td>
          <td>{friend.lastname} </td>
          <td>
            <button>Remove</button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Friends List</h1>
        <table id="friends-list">
          {this.props.friendsList.length > 0 ? (
            <tbody>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th />
                <th />
              </tr>
              {this._renderFriendsList()}
            </tbody>
          ) : null}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friendsList: state.friends
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsList);
