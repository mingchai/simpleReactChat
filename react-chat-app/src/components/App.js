import React from 'react';
import ChatPage from './ChatPage';

require('../styles/App.css');
require('../styles/Login.css');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };

    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
  }

  usernameChangeHandler(event) {
    this.setState({ username: event.target.value });
  }

  usernameSubmitHandler(event) {
    event.preventDefault();
    this.setState({ submitted: true, username: this.state.username });
  }

  render() {
    if (this.state.submitted) {
      return (
        <ChatPage username={this.state.username} />
      );
    }

    return (
      <form onSubmit={this.usernameSubmitHandler} className="username-container">
        <h1>React Instant Chat</h1>
        <div>
          <input
            type="text"
            onChange={this.usernameChangeHandler}
            placeholder="What would you like to go by?"
            required />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}

// Another way to set default values
App.defaultProps = {
};

export default App;