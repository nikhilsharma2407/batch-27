import React from 'react'
import { Navigate } from 'react-router-dom'


function ProtectedRoute({ children, isLoggedIn, loading }) {
  const redirectPath = '/';
  if (!isLoggedIn) {

    return <Navigate to='/path/login' state={ {redirectPath} }/>
  }
  return children

}

export default ProtectedRoute