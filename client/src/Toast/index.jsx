import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast() {
  const { message, success } = useSelector(state => state.user);

  useEffect(() => {
    if (message) {
      if (success) {
        toast.success(message)
      } else {
        toast.error(message);
      }
    }
  }, [message, success])

  return (
      <ToastContainer />
  );
}

export default Toast;