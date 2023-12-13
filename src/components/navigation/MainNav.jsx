import Search from '../search/Search';
import UserNav from './UserNav';
import { Icons } from '../Icons';

const MainNav = () => {
  return (
    <nav className="flex items-center justify-between h-16 px-4">
      <h3 className="flex flex-row">
        <Icons.logo className="h-6 w-auto" /> Auto App
      </h3>
      <div className="ml-auto flex items-center space-x-4">
        <Search />
        <UserNav />
      </div>
    </nav>
  );
};

export default MainNav;
