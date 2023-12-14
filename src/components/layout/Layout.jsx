import { Outlet } from 'react-router';
import MainNav from '../navigation/MainNav';
import Sidebar from '../navigation/Sidebar';
import { Suspense } from 'react';
// import CustomLoader from '../lib/loader';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen md:container md:mx-auto">
      <MainNav />
      <div className="flex flex-row h-screen">
        <Sidebar />
        {/* <Suspense fallback={<CustomLoader />}> */}
        <Suspense>
          <div className="bg-gray-100 rounded w-screen p-4">
            <Outlet />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
