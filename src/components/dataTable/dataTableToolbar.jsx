import { Cross2Icon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DataTableViewOptions } from './dataTableViewOptions';
import { DataTableFacetedFilter } from './dataTableFacetedFilter';

export const DataTableToolbar = ({
  table,
  props,
  placeholder,
  filterColumn
}) => {
  const isFiltered = table.getState().columnFilters.length > 0;
  const { services, statuses, inventories, vehicles } = props;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder={placeholder}
          value={table.getColumn(filterColumn)?.getFilterValue() ?? ''}
          onChange={(event) =>
            table.getColumn(filterColumn)?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {statuses && (
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            title="Status"
            options={statuses}
          />
        )}

        {services && (
          <DataTableFacetedFilter
            column={table.getColumn('services')}
            title="Services"
            options={services}
          />
        )}

        {inventories && (
          <DataTableFacetedFilter
            column={table.getColumn('inventory')}
            title="Items"
            options={inventories}
          />
        )}

        {vehicles && (
          <DataTableFacetedFilter
            column={table.getColumn('vehicle')}
            title="Vehicles"
            options={vehicles}
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
