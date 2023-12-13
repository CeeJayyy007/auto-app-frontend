import MainNav from '../navigation/MainNav';
import Sidebar from '../navigation/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen md:container md:mx-auto">
      <MainNav />
      <div className="flex flex-row h-screen">
        <Sidebar />
        <main className="bg-gray-100 p-4 rounded">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
