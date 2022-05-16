import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {
  const auth = true;
  return auth ? <Outlet /> : <Navigate to='/login' />;
};
