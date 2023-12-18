import { Cross2Icon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DataTableViewOptions } from './dataTableViewOptions';

import { services, statuses } from '../appointment/data';
import { DataTableFacetedFilter } from './dataTableFacetedFilter';

export const DataTableToolbar = ({ table }) => {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter appointments..."
          value={table.getColumn('note')?.getFilterValue() ?? ''}
          onChange={(event) =>
            table.getColumn('note')?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn('status') && (
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            title="Status"
            options={statuses}
          />
        )}

        {table.getColumn('services') && (
          <DataTableFacetedFilter
            column={table.getColumn('services')}
            title="Services"
            options={services}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
};
