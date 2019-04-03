import React from 'react';

import Message from './Message';

class Messages extends React.Component {
  componentDidUpdate() {
    // when a new message comes in, scroll to bottom of the list
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    // Loop through all the messages in the state and create a Message component
    const messages = this.props.messages.map((message, i) => {
        return (
          <Message
          // What needs to be updated?
            key={i}
            // Who's sending the message?
            username={message.username}
            // What does the message say?
            message={message.message}
            // Is the message from the current user?
            fromMe={message.fromMe} />
        );
      });

    return (
      <div className='messages' id='messageList'>
        { messages }
      </div>
    );
  }
}

Messages.defaultProps = {
  messages: []
};

export default Messages;
