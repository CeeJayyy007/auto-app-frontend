import getIcon from '@/components/icons/getIcon';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ActivitiesCombobox from '@/components/maintenanceRecord/ActivitiesCombobox';
import MaintenanceRecordTable from '@/components/maintenanceRecord/MaintenanceRecordTable';
import RecordTotalTable from '@/components/maintenanceRecord/RecordTotalTable';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import useActivities from '@/hooks/useActivities';
import { statusData } from '../components/maintenanceRecord/data';
import storePersist from '@/store/storePersist';
import { AddServiceFormSchema } from '@/components/services/ServicesFormValidation';
import ServiceForm from '@/components/services/ServiceForm';
import SideSheet from '@/components/display/SideSheet';
import useServices from '@/hooks/useServices';
import InventoryForm from '@/components/inventory/inventoryForm/InventoryForm';
import { AddInventoryFormSchema } from '@/components/inventory/inventoryForm/InventoryValidation';
import useInventory from '@/hooks/useInventory';
import { getInventories, getServices } from '@/utils/helpers';

const MaintenaceRecord = () => {
  const location = useLocation();
  const { rowDataId } = location.state || {};
  const { activitiesById, editActivity } = useActivities(rowDataId);
  const { addService } = useServices();
  const { addInventory } = useInventory();
  const { allServices: allServicesData } = useServices();
  const { allInventory: allInventoryData } = useInventory();

  const activities = activitiesById?.data;
  const allServices = allServicesData?.data;
  const allInventory = allInventoryData?.data;

  useEffect(() => {
    if (!activities) {
      return;
    }
    // add services and inventory user data to activities data
    activities.services = activities?.servicesDetails?.map(
      (service) => service.name
    );
    activities.inventory = activities?.inventoryDetails?.map(
      (item) => item.name
    );
    storePersist.set('maintenance-record', activities);
  }, [activities]);

  const selectedObject = (existingData) =>
    existingData?.reduce((acc, existingItem) => {
      acc[existingItem] = existingItem;
      return acc;
    }, {});

  const activitiesData = storePersist.get('maintenance-record');

  const [selectedServices, setSelectedServices] = useState(
    selectedObject(activitiesData.services)
  );
  const [selectedItem, setSelectedItem] = useState(
    selectedObject(activitiesData.inventory)
  );
  const [selectedStatus, setSelectedStatus] = useState(activitiesData?.status);
  const [note, setNote] = useState(activitiesData?.note);
  const [servicesQuantities, setServiceQuantities] = useState(
    activitiesData?.servicesQuantities
  );
  const [inventoryQuantities, setInventoryQuantities] = useState(
    activitiesData?.inventoryQuantities
  );
  const [discount, setDiscount] = useState(activitiesData?.discount);

  if (activitiesById.isLoading) {
    return <div>loading data...</div>;
  } else if (activitiesById.isError) {
    return <div>error loading data</div>;
  }

  // render nothing if activities data is still null
  if (!activitiesData || !allServices || !allInventory) {
    return null;
  }

  const { userDetails, vehicleDetails } = activitiesData;
  const { firstName, lastName, email } = userDetails || {};
  const { make, model, year, registrationNumber } = vehicleDetails || {};
  const services = getServices(allServices);
  const inventories = getInventories(allInventory);

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

  const tableData = (data, selectedData) =>
    data.filter((item) => Object.values(selectedData).includes(item.value));

  const getLastSelectedLabel = (type) => (name) => {
    const selected = type === 'services' ? selectedServices : selectedItem;
    return Object.keys(selected).length > 0
      ? type === 'services'
        ? services.find(
            (item) => item.value === selected[Object.keys(selected).pop()]
          )?.label
        : inventories.find(
            (item) =>
              item.value === selectedItem[Object.keys(selectedItem).pop()]
          )?.label
      : `Add ${name}...`;
  };

  const getSelectedItemId = (data, selectedData) => {
    const selectedServicesData = data.filter((service) =>
      Object.keys(selectedData).includes(service.value)
    );
    return selectedServicesData.map((service) => service.id);
  };

  const pageData = {
    status: selectedStatus || activitiesData?.status,
    note: note || activitiesData?.note,
    serviceId: getSelectedItemId(services, selectedServices),
    services: Object.keys(selectedServices).map((service) => service) || [],
    inventoryId: getSelectedItemId(inventories, selectedItem),
    inventory: Object.keys(selectedItem).map((item) => item) || [],
    servicesQuantities,
    inventoryQuantities,
    discount
  };

  const handleSave = () => {
    editActivity(pageData, activitiesData.id);
  };

  const handleSubmit = () => {
    console.log('data to be submitted');
  };

  console.log('pageData', activitiesData);

  return (
    <div className="">
      <div className="flex flex-row justify-between">
        <h3 className="mb-4 font-bold text-gray-700">Maintenance Record</h3>
        <Select
          onValueChange={(value) => setSelectedStatus(value)}
          defaultValue={activitiesData.status}
        >
          <SelectTrigger className="w-[180px] bg-white">
            <SelectValue placeholder="Select status">
              {selectedStatus ? selectedStatus : activitiesData.status}
            </SelectValue>
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
                <h3 className="text-sm">
                  {make} {model} {year}
                </h3>
                <p className="text-sm text-muted-foreground mt-0">
                  {registrationNumber}
                </p>
              </div>
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
                name="services"
                label="Services"
                selected={selectedServices}
                handleSelect={handleSelected('services')}
                lastSelectedLabel={getLastSelectedLabel('services')}
                status={selectedStatus}
                addMore={
                  <SideSheet
                    type="button"
                    triggerLabel="Add New Service"
                    title="Add Service"
                    description="Add Service details and click Add Service when done."
                    actionLabel="Add Service"
                    className="w-[180px]"
                    body={
                      <ServiceForm
                        formAction={addService}
                        formValidation={AddServiceFormSchema}
                        buttonText="Add Service"
                      />
                    }
                  />
                }
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-semibold mb-1">Select Items</h3>
              <ActivitiesCombobox
                data={inventories}
                name="inventory item"
                label="Inventory Item"
                selected={selectedItem}
                handleSelect={handleSelected('items')}
                lastSelectedLabel={getLastSelectedLabel('items')}
                status={selectedStatus}
                addMore={
                  <SideSheet
                    type="button"
                    triggerLabel="Add New Item"
                    title="Add Inventory Item"
                    description="Add Inventory Item details and click Add Inventory Item when done."
                    actionLabel="Add Inventory Item"
                    className="w-[180px]"
                    body={
                      <InventoryForm
                        formAction={addInventory}
                        formValidation={AddInventoryFormSchema}
                        buttonText="Add Inventory Item"
                      />
                    }
                  />
                }
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-semibold mb-1">Service notes</h3>
              <Textarea
                placeholder="Enter service notes..."
                className="h-[150px]"
                defaultValue={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="bg-white rounded-[14px] p-4 h-[250px]">
            <h3 className="text-sm font-semibold mx-2">Services</h3>
            <MaintenanceRecordTable
              name="Service"
              tableData={tableData(services, selectedServices)}
              status={selectedStatus}
              setQuantities={setServiceQuantities}
              quantities={servicesQuantities}
            />
          </div>
          <div className="bg-white rounded-[14px] p-4 h-[250px]">
            <h3 className="text-sm font-semibold mx-2">Items used</h3>
            <MaintenanceRecordTable
              name="Items"
              tableData={tableData(inventories, selectedItem)}
              status={selectedStatus}
              setQuantities={setInventoryQuantities}
              quantities={inventoryQuantities}
            />
          </div>
          <div className="bg-white rounded-[14px] p-4">
            <h3 className="text-sm font-semibold mb-1 ml-2">Total</h3>
            <RecordTotalTable
              itemsData={tableData(inventories, selectedItem)}
              servicesData={tableData(services, selectedServices)}
              status={selectedStatus}
              discount={discount}
              setDiscount={setDiscount}
              handleSave={handleSave}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenaceRecord;
