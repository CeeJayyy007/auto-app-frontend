import Search from '../search/Search';
import UserNav from './UserNav';
import { Icons } from '../icons/icons';

const MainNav = () => {
  return (
    <nav className="flex items-center justify-between h-16 px-0 py-4">
      <img
        src="/src/assets/NaborhoodName.svg"
        alt="logo"
        className="w-[150px] pt-4 pl-0"
      />
      <div className="ml-auto flex items-center space-x-4">
        <Search />
        <UserNav />
      </div>
    </nav>
  );
};

export default MainNav;
