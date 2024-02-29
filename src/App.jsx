import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import checkAuth from './utils/auth';
import { useEffect } from 'react';

const App = () => {
  const router = createBrowserRouter([
    checkAuth() ? privateRoutes() : {},
    ...publicRoutes()
  ]);

  return <RouterProvider router={router} />;
};
export default App;
