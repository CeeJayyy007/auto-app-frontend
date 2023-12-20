import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

import { inventories, statuses } from './data';
import { DataTableColumnHeader } from '../dataTable/dataTableColumnHeader';
import { DataTableRowActions } from '../dataTable/dataTableRowAction';
import {
  commaSeparatedArray,
  inventoryStatusColor,
  statusColor
} from '@/utils/helpers';

export const columns = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px] border-gray-300 ml-2"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px] border-gray-300 ml-2"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="S/No." />
    ),
    cell: ({ row }) => <div className="w-[50px]">{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span>{row.getValue('name')}</span>
        </div>
      );
    }
  },
  {
    accessorKey: 'quantity',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Quantity" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span>{row.getValue('quantity')}</span>
        </div>
      );
    }
  },
  {
    accessorKey: 'lowLevel',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Low Level" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span>{row.getValue('lowLevel')}</span>
        </div>
      );
    }
  },
  {
    accessorKey: 'initialPrice',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Initial Price (₦)" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span>{row.getValue('initialPrice')}</span>
        </div>
      );
    }
  },
  {
    accessorKey: 'finalPrice',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Final Price (₦)" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span>{row.getValue('finalPrice')}</span>
        </div>
      );
    }
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue('status')
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex items-center">
          <span>
            <Badge
              className={`font-normal rounded-full ${inventoryStatusColor(
                status.value
              )}`}
            >
              {status.label}
            </Badge>
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },

  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />
  }
];
