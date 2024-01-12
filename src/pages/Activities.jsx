import { columns } from '@/components/activities/column';
import { statuses } from '../components/activities/data';
import { DataTable } from '@/components/dataTable/dataTable';
import SideSheet from '@/components/display/SideSheet';
import useActivities from '@/hooks/useActivities';
import useProfile from '@/hooks/useProfile';
import useServices from '@/hooks/useServices';
import useInventory from '@/hooks/useInventory';
import { getInventories, getServices, getVehicles } from '@/utils/helpers';
import ActivitiesForm from '@/components/activities/form/ActivitiesForm';
import { ActivitiesFormSchema } from '@/components/activities/form/ActivitiesValidation';
import useAppointment from '@/hooks/useAppointment';

const Activities = () => {
  const { allServices } = useServices();
  const { allInventory } = useInventory();
  const { activitiesByUser, editActivity, removeActivity } = useActivities();
  const { result, allUsers } = useProfile();
  const { createServiceRequest } = useAppointment();

  const user = result?.data?.user[0];
  const usersData = allUsers?.data;
  const activities = activitiesByUser?.data;
  const servicesData = allServices?.data;
  const inventoryData = allInventory?.data;

  // do not render anything if activities data is still null
  if (!activities || !servicesData || !user || !inventoryData) {
    return null;
  }

  const { Vehicles } = user;
  const userVehiclesData = Vehicles.sort((a, b) => b.id - a.id);

  // convert vehicles data to select options
  const vehicles = getVehicles(userVehiclesData);

  // convert services data to select options
  const services = getServices(servicesData);

  // convert inventory data to select options
  const inventories = getInventories(inventoryData);

  // convert vehicles array into vehicle label string
  const activitiesData = activities.map((activity) => {
    const { vehicle, services, inventory } = activity;

    return {
      ...activity,
      services: services.map((service) => service.name),
      inventory: inventory.map((item) => item.name),
      vehicle: vehicle ? `${vehicle.make} ${vehicle.model} ${vehicle.year}` : ''
    };
  });

  console.log('activities', usersData);

  if (activitiesByUser.isLoading) {
    return <div>loading data...</div>;
  } else if (activitiesByUser.isError) {
    return <div>error loading data</div>;
  }

  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="mb-4 font-bold text-gray-700">Activities</h3>
        {/* Add appointment */}
        <SideSheet
          type="button"
          triggerLabel="Create Service Request"
          title="Create Service Request"
          description="Select User and Vehicle details and click Create Service Request when done."
          body={
            <ActivitiesForm
              users={usersData}
              vehicles={vehicles}
              services={services}
              formAction={createServiceRequest}
              formValidation={ActivitiesFormSchema}
              buttonText="Create Service Request"
            />
          }
        />
      </div>
      <div className="rounded-[14px] bg-white p-8">
        <DataTable
          data={activitiesData}
          columns={columns(
            vehicles,
            services,
            inventories,
            editActivity,
            removeActivity
          )}
          props={{ services, statuses, inventories, vehicles }}
          placeholder="Search activities..."
          filterColumn="note"
        />
      </div>
    </div>
  );
};

export default Activities;
