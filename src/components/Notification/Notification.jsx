import React from 'react';
import PropTypes from 'prop-types';

import { NoFeedbackMessage } from './Notification.styled';

export const Notification = ({ message }) => (
  <NoFeedbackMessage>{message}</NoFeedbackMessage>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
