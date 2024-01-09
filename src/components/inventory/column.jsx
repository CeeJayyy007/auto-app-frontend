import { Checkbox } from '@/components/ui/checkbox';
import { statuses } from './data';
import { DataTableColumnHeader } from '../dataTable/dataTableColumnHeader';
import { inventoryStatusColor } from '@/utils/helpers';
import ColouredBadge from '../badge/ColouredBadge';
import { InventoryDataTableRowActions } from './InventoryDataTableRowActions';

export const columns = (editInventory, deleteInventory) => [
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
    cell: ({ row }) => <div className="w-[50px]">{row.index + 1}</div>,
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
          <span className="truncate max-w-[300px]">{row.getValue('name')}</span>
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
    accessorKey: 'markUp',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Mark Up" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span>{row.getValue('markUp')}</span>
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
            <ColouredBadge status={status} colorFn={inventoryStatusColor} />
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
    cell: ({ row }) => (
      <InventoryDataTableRowActions
        row={row}
        editInventory={editInventory}
        deleteInventory={deleteInventory}
      />
    )
  }
];
