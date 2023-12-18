import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';

import { services, statuses } from './data';
import { DataTableColumnHeader } from '../dataTable/dataTableColumnHeader';
import { DataTableRowActions } from '../dataTable/dataTableRowAction';
import { commaSeparatedArray, statusColor } from '@/utils/helpers';

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
        className="translate-y-[2px] border-gray-300 w-5 h-5 ml-2"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px] border-gray-300 w-5 h-5 ml-2"
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
    accessorKey: 'date',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[100px] font-medium">
            {row.getValue('date')}
          </span>
        </div>
      );
    }
  },
  {
    accessorKey: 'note',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Note" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[400px] truncate font-medium">
            {row.getValue('note')}
          </span>
        </div>
      );
    }
  },
  {
    accessorKey: 'services',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Services" />
    ),
    cell: ({ row }) => {
      const service = services.find((service) =>
        row.getValue('services').includes(service.value)
      );

      if (!service) {
        return null;
      }

      return (
        <div className="flex items-center max-w-[400px] truncate">
          <span>{commaSeparatedArray(row.getValue('services'))}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.every((item) => row.getValue(id).includes(item));
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
              className={`font-normal rounded-full ${statusColor(
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
