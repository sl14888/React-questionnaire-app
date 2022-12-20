import { Alert } from '@material-tailwind/react';
import React from 'react';

const AlertMessage = ({ text, color, showAlert, setShowAlert }) => {
  return (
    <>
      <Alert
        show={showAlert}
        dismissible={{
          onClose: () => setShowAlert(false),
        }}
        color={color}
      >
        {text}
      </Alert>
    </>
  );
};

export default AlertMessage;
