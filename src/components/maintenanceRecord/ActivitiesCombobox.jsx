import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import ItemCard from './ItemCard';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '../ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const ActivitiesCombobox = ({
  name,
  data,
  handleSelect,
  lastSelectedLabel,
  selected,
  status,
  addMore
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          asChild
          disabled={status === ('Canceled' || 'Completed')}
        >
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn(
              'w-full justify-between mb-2',
              !selected && 'text-muted-foreground'
            )}
          >
            {lastSelectedLabel(name)}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 m-2" align="end">
          <Command>
            <CommandInput placeholder={`Search ${name}...`} className="h-9" />
            <CommandEmpty>No item found.</CommandEmpty>
            <CommandGroup>
              {data.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={() => handleSelect(item)}
                >
                  {item.label}
                  <CheckIcon
                    className={cn(
                      'ml-auto h-4 w-4',
                      selected[item.value] === item.value
                        ? 'opacity-100'
                        : 'opacity-0'
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>

          <div className="px-2 pt-4">{addMore}</div>

          <Button
            variant="outline"
            className="text-center w-[180px] my-2 ml-2"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </PopoverContent>
      </Popover>
      <div className="grid gap-4 h-[130px] border rounded-lg p-2">
        {Object.keys(selected).length > 0 ? (
          <ScrollArea className=" max-h-[400px]">
            {Object.entries(selected).map(([key, value]) => (
              <ItemCard key={key} name={value} />
            ))}
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        ) : (
          <p className="text-sm text-muted-foreground text-center col-span-3 grid items-center">
            {`No ${name} selected`}
          </p>
        )}
      </div>
    </>
  );
};

export default ActivitiesCombobox;
