import { useState } from 'react';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import ItemCard from './ItemCard';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form';

const RecordCombobox = ({ data, rowData, name, form, label, formName }) => {
  const rowRecordData = rowData ? rowData : {};

  const { services: selectedServices } = rowRecordData;

  const servicesObject = selectedServices?.reduce((acc, service) => {
    acc[service] = service;
    return acc;
  }, {});

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(servicesObject || '');

  const handleSelect = ({ value, label }) => {
    setSelected((prevSelected) => {
      const updatedSelected = { ...prevSelected };

      if (updatedSelected[value]) {
        delete updatedSelected[value];
      } else {
        updatedSelected[value] = label;
      }

      const serviceId = Object.values(updatedSelected)
        .map((serviceName) =>
          data.find((service) => service.value === serviceName)
        )
        .filter((matchedService) => matchedService)
        .map((matchedService) => matchedService.id);

      form.setValue(formName, serviceId);
      return updatedSelected;
    });
  };

  const lastSelectedLabel =
    Object.keys(selected).length > 0
      ? data.find(
          (item) => item.value === selected[Object.keys(selected).pop()]
        )?.label
      : `Add ${name}...`;

  return (
    <FormField
      control={form.control}
      name={formName}
      render={({ field }) => (
        <FormItem className={cn('flex flex-col', selectedServices && 'mt-2')}>
          <FormLabel className={cn(!selectedServices && 'sr-only')}>
            {label}
          </FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className={cn(
                    'w-full justify-between mb-2',
                    !selectedServices && 'text-muted-foreground'
                  )}
                >
                  {lastSelectedLabel}
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0 m-2" align="end">
              <Command onValueChange={field.onChange}>
                <CommandInput
                  placeholder={`Search ${name}...`}
                  className="h-9"
                />
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

          {form.formState.errors[formName] && <FormMessage />}
        </FormItem>
      )}
    />
  );
};

export default RecordCombobox;
