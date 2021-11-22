import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorMessage({ message, onClick }) {
  return (
    <>
      <h2>Error</h2>
        <p className="error">
        <strong>{message}</strong>
      </p>
      <button onClick={onClick}>
        Ok
      </button>
    </>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string
};