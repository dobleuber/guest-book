import React from 'react';
import PropTypes from 'prop-types';

export default function Messages({ messages }) {
  return (
    <>
      <h2>Messages</h2>
      {messages.map(({text, premium, sender, timestamp}, i) => {
        // TODO: format as cards, add timestamp
        const date = new Date(timestamp / 1e6);
        console.log(date);
        return <p key={i} className={premium ? 'is-premium' : 'message'}>
          <strong>{sender}</strong> sign at <i>{date.toUTCString()}</i>:<br/>
          {text}
        </p>
        }
      )}
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array
};
