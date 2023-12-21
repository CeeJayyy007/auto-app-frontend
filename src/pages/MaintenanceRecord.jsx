import { inventories, services } from '@/components/activities/data';
import getIcon from '@/components/icons/getIcon';
import MaintenanceRecordTable from '@/components/maintenanceRecord/MaintenanceRecordTable';
import RecordCombobox from '@/components/maintenanceRecord/RecordCombobox';
import RecordTotalTable from '@/components/maintenanceRecord/RecordTotalTable';

const inventoryData = [
  {
    id: 1,
    title: 'Engine Oil',
    price: 2700
  },
  {
    id: 2,
    title: 'Oil Filter',
    price: 2800
  },
  {
    id: 3,
    title: 'Air Filter',
    price: 800
  },
  {
    id: 4,
    title: 'Fuel Filter',
    price: 400
  },
  {
    id: 5,
    title: 'Brake Fluid',
    price: 5000
  },
  {
    id: 6,
    title: 'Power Steering Fluid',
    price: 1000
  },
  {
    id: 7,
    title: 'Transmission Fluid',
    price: 6000
  }
];

const serviceData = [
  {
    id: 1,
    title: 'Oil Change',
    price: 2000
  },
  {
    id: 2,
    title: 'Tyre Change',
    price: 3000
  },
  {
    id: 3,
    title: 'Cooling System',
    price: 200
  },
  {
    id: 4,
    title: 'Wheel Alignment',
    price: 2000
  },
  {
    id: 5,
    title: 'Steering Fix',
    price: 2500
  },
  {
    id: 6,
    title: 'Brake Fix',
    price: 100
  },
  {
    id: 7,
    title: 'Engine Fix',
    price: 300
  }
];

const totalData = [
  {
    id: 1,
    title: 'Services',
    amount: 10000
  },
  {
    id: 2,
    title: 'Items',
    amount: 15000
  }
];

const MaintenaceRecord = () => {
  return (
    <div className="">
      <h3 className="mb-4 font-bold text-gray-700">Maintenance Record</h3>
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="col-span-1 flex flex-col space-y-4">
          <div className="bg-white rounded-[14px] p-4">
            <div className="flex flex-row justify-between mx-4">
              <div className="grid justify-items-center">
                <div className="bg-green-200 h-8 w-10 rounded-md flex justify-center items-center">
                  {getIcon({
                    name: 'profile',
                    className: 'w-5 h-5 fill-green-400'
                  })}
                </div>
                <h3 className="text-sm">John Jackson</h3>
                <p className="text-xs text-muted-foreground mt-0">
                  johnjackson@mailcom
                </p>
              </div>
              <div className="grid grid-flow-row justify-items-center">
                <div className="bg-green-200 h-8 w-10 rounded-md flex justify-center items-center">
                  {getIcon({
                    name: 'vehicle',
                    className: 'w-5 h-5 fill-green-400'
                  })}
                </div>
                <h3 className="text-sm">Mercedes Benz 2021</h3>
                <p className="text-xs text-muted-foreground mt-0">LND 123 EX</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[14px] p-4 pb-8">
            <h3 className="text-sm font-semibold mx-2 mb-2">Services</h3>
            <MaintenanceRecordTable name="Service" data={serviceData} />
          </div>
          <div className="bg-white rounded-[14px] p-4 pb-8">
            <h3 className="text-sm font-semibold mt-4 mx-2 mb-2">Items used</h3>
            <MaintenanceRecordTable name="Items" data={inventoryData} />
          </div>
        </div>
        <div className="col-span-1 bg-white rounded-[14px] p-4">
          <h3 className="text-[16px] font-bold pb-0">
            Select Services and Items
          </h3>
          <p className="text-xs text-muted-foreground mb-4 mt-0">
            Pick the services and items to be used for the mantenance activity
          </p>
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-1">Select Services</h3>
            <RecordCombobox data={services} name="services" />
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-semibold mb-1">Select Items</h3>
            <RecordCombobox data={inventories} name="items" />
          </div>
          <div className="bg-white rounded-[14px] px-0 pt-8">
            <h3 className="text-sm font-semibold mb-1 ml-2">Total</h3>
            <RecordTotalTable data={totalData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenaceRecord;
