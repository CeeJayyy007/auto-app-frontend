import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import checkAuth from './utils/auth';

const App = () => {
  const isAuthenticated = checkAuth();

  const router = createBrowserRouter([
    isAuthenticated ? privateRoutes() : {},
    ...publicRoutes()
  ]);

  return <RouterProvider router={router} />;
};
export default App;
