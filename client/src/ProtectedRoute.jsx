import React from 'react'
import { Navigate } from 'react-router-dom'


function ProtectedRoute({ children, isLoggedIn, loading }) {
  debugger;
  if (!isLoggedIn) {

    return <Navigate to='/user/login' />
  }
  return children

}

export default ProtectedRoute