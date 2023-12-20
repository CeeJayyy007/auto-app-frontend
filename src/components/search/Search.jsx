import { Input } from '@/components/ui/Input';
import { Icons } from '../icons/icons';

const Search = () => {
  return (
    <div className="flex items-center relative">
      <Icons.search className="absolute left-2 top-1/2 transform -translate-y-1/2 fill-gray-400" />
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px] pl-10 hover:bg-gray-100 dark:hover:bg-zinc-900 transition-colors duration-200"
      />
    </div>
  );
};

export default Search;
