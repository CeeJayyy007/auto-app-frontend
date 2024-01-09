import { Checkbox } from '@/components/ui/checkbox';
import { statuses } from './data';
import { DataTableColumnHeader } from '../dataTable/dataTableColumnHeader';
import { commaSeparatedArray, getDate, statusColor } from '@/utils/helpers';
import { AppointmentsDataTableRowActions } from './AppointmentsDataTableRowActions';
import ColouredBadge from '../badge/ColouredBadge';

export const columns = (
  vehicles,
  servicesOption,
  editAppointment,
  createServiceRequest,
  removeAppointment
) => [
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
    cell: ({ row }) => (
      <div>
        <span>{row.index + 1}</span>
      </div>
    ),
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
        <div className="flex">
          <span className="">{getDate(row.getValue('date'))}</span>
        </div>
      );
    }
  },
  {
    accessorKey: 'time',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex">
          <span className="">{row.getValue('time')}</span>
        </div>
      );
    }
  },
  {
    accessorKey: 'vehicle',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Vehicle" />
    ),
    cell: ({ row }) => {
      const vehicle = vehicles.find((vehicle) =>
        row.getValue('vehicle').includes(vehicle.value)
      );

      if (!vehicle) {
        return null;
      }

      return (
        <div className="flex items-center">
          <span className="max-w-[250px] truncate font-medium">
            {vehicle.label}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
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
          <span className="max-w-[250px] truncate font-medium">
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
      const service = servicesOption.find((service) =>
        row.getValue('services').includes(service.value)
      );

      if (!service) {
        return null;
      }

      return (
        <div className="flex items-center">
          <span className=" max-w-[250px] truncate">
            {commaSeparatedArray(row.getValue('services'))}
          </span>
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
            <ColouredBadge status={status} colorFn={statusColor} />
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
      <AppointmentsDataTableRowActions
        row={row}
        editAppointment={editAppointment}
        removeAppointment={removeAppointment}
        createServiceRequest={createServiceRequest}
        vehicles={vehicles}
        servicesOption={servicesOption}
      />
    )
  }
];
