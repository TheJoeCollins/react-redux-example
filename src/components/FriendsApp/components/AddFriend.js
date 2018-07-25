import React from "react";

// Stateless Components or Functional Components
export const AddFriend = ({
  firstName,
  lastName,
  handleTextInput,
  addFriend,
  error,
  friendsList,
  header,
  loadDummyData,
  clearFriendsList
}) => {
  return (
    <div className="form-container">
      {header}
      <button onClick={loadDummyData}>Load Dummy Data</button>
      <button onClick={clearFriendsList}>Clear Friends List</button>
      <form className="form-add-friend" onSubmit={addFriend}>
        <div className="row">
          <span className="label-text">First Name: </span>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleTextInput}
            className="input-box"
          />
        </div>
        <div className="row">
          <span className="label-text">Last Name: </span>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleTextInput}
            className="input-box"
          />
        </div>
        <div className="button-container">
          <button type="submit" value="Submit">
            Add Friend
          </button>
        </div>
      </form>
      <div className="error-message-container">
        <p className="error-message">{error}</p>
      </div>
      {friendsList}
    </div>
  );
};
