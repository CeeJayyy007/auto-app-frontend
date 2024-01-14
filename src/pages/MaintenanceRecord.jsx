import getIcon from '@/components/icons/getIcon';
import MaintenanceRecordTable from '@/components/maintenanceRecord/MaintenanceRecordTable';
import RecordTotalTable from '@/components/maintenanceRecord/RecordTotalTable';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import { useLocation } from 'react-router-dom';
import ActivitiesCombobox from '@/components/maintenanceRecord/ActivitiesCombobox';
import { useState } from 'react';

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

const statusData = [
  {
    value: 'in-progress',
    label: 'In Progress'
  },
  {
    value: 'Ready',
    label: 'Ready'
  },
  {
    value: 'Canceled',
    label: 'Canceled'
  }
];

const MaintenaceRecord = () => {
  const location = useLocation();
  const { services, inventories, rowData } = location.state || {};

  const {
    userDetails,
    vehicleDetails,
    servicesDetails,
    services: userServices,
    inventory: userInventory,
    inventoryDetails,
    vehicle
  } = rowData || {};

  const { firstName, lastName, email } = userDetails || {};

  // activities combobox data
  const selectedObject = (existingData) =>
    existingData?.reduce((acc, existingItem) => {
      acc[existingItem] = existingItem;
      return acc;
    }, {});

  const [selectedServices, setSelectedServices] = useState(
    selectedObject(userServices) || {}
  );
  const [selectedItem, setSelectedItem] = useState(
    selectedObject(userInventory) || {}
  );

  const handleSelected =
    (type) =>
    ({ value, label }) => {
      const setSelected =
        type === 'services' ? setSelectedServices : setSelectedItem;
      setSelected((prevSelected) => {
        const updatedSelected = { ...prevSelected };

        if (updatedSelected[value]) {
          delete updatedSelected[value];
        } else {
          updatedSelected[value] = label;
        }
        return updatedSelected;
      });
    };

  const getLastSelectedLabel = (type) => (name) =>
    Object.keys(type === 'services' ? selectedServices : selectedItem).length >
    0
      ? type === 'services'
        ? services.find(
            (item) =>
              item.value ===
              selectedServices[Object.keys(selectedServices).pop()]
          )?.label
        : inventories.find(
            (item) =>
              item.value === selectedItem[Object.keys(selectedItem).pop()]
          )?.label
      : `Add ${name}...`;

  const tableData = (data, selectedData) =>
    data.filter((item) => Object.values(selectedData).includes(item.value));

  console.log('services here', tableData(services, selectedServices));

  return (
    <div className="">
      <div className="flex flex-row justify-between">
        <h3 className="mb-4 font-bold text-gray-700">Maintenance Record</h3>
        <Select>
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            {statusData.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

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
                <h3 className="text-sm">
                  {firstName} {lastName}
                </h3>
                <p className="text-sm text-muted-foreground mt-0">{email}</p>
              </div>
              <div className="grid grid-flow-row justify-items-center">
                <div className="bg-green-200 h-8 w-10 rounded-md flex justify-center items-center">
                  {getIcon({
                    name: 'vehicle',
                    className: 'w-5 h-5 fill-green-400'
                  })}
                </div>
                <h3 className="text-sm">{vehicle}</h3>
                <p className="text-sm text-muted-foreground mt-0">
                  {vehicleDetails?.registrationNumber}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[14px] p-4 pb-8 h-[330px]">
            <h3 className="text-sm font-semibold mx-2 mb-2">Services</h3>
            <MaintenanceRecordTable
              name="Service"
              tableData={tableData(services, selectedServices)}
            />
          </div>
          <div className="bg-white rounded-[14px] p-4 pb-8 h-[330px]">
            <h3 className="text-sm font-semibold mt-4 mx-2 mb-2">Items used</h3>
            <MaintenanceRecordTable
              name="Items"
              tableData={tableData(inventories, selectedItem)}
            />
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
            <ActivitiesCombobox
              data={services}
              rowData={userServices}
              name="services"
              label="Services"
              selected={selectedServices}
              handleSelect={handleSelected('services')}
              lastSelectedLabel={getLastSelectedLabel('services')}
            />
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-semibold mb-1">Select Items</h3>
            <ActivitiesCombobox
              data={inventories}
              rowData={userInventory}
              name="inventory item"
              label="Inventory Item"
              selected={selectedItem}
              handleSelect={handleSelected('items')}
              lastSelectedLabel={getLastSelectedLabel('items')}
            />
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
