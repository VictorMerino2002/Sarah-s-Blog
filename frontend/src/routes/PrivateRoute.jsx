/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token');

  return isAuthenticated ? Component : <Navigate to="/admin/login" />;
}