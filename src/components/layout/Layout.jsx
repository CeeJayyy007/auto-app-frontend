import { Outlet } from 'react-router';
import MainNav from '../navigation/MainNav';
import Sidebar from '../navigation/Sidebar';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen md:container md:mx-auto md:px-4">
      <MainNav />
      <div className="flex flex-row h-screen">
        <Sidebar />
        <div className="bg-gray-100 rounded-lg w-screen p-4">
          {/* <h4 className="my-2 mt-0 font-bold tracking-tight">
            Welcome back, User
          </h4> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
