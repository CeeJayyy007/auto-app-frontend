import { columns } from '@/components/activities/column';
import { statuses } from '../components/activities/data';
import { DataTable } from '@/components/dataTable/dataTable';
import SideSheet from '@/components/display/SideSheet';
import useActivities from '@/hooks/useActivities';
import { getInventories, getServices, getVehicles } from '@/utils/helpers';
import ActivitiesForm from '@/components/activities/form/ActivitiesForm';
import { ActivitiesFormSchema } from '@/components/activities/form/ActivitiesValidation';
import useAppointment from '@/hooks/useAppointment';
import storePersist from '@/store/storePersist';
import useInventory from '@/hooks/useInventory';
import useServices from '@/hooks/useServices';
import useProfile from '@/hooks/useProfile';
import { all } from 'axios';

const Activities = () => {
  const { activitiesByUser, editActivity, removeActivity } = useActivities();
  const { result, allUsers } = useProfile();
  const { allInventory } = useInventory();
  const { allServices } = useServices();
  const { createServiceRequest } = useAppointment();

  const activities = activitiesByUser?.data;
  const user = result?.data?.user[0];
  const usersData = allUsers?.data;
  const servicesData = allServices?.data;
  const inventoryData = allInventory?.data;

  // do not render anything if activities data is still null
  if (!activities || !servicesData || !user || !inventoryData) {
    return null;
  }

  // convert vehicles data to select options
  const vehicles = getVehicles(user?.Vehicles);

  // convert services data to select options
  const services = getServices(servicesData);

  // convert inventory data to select options
  const inventories = getInventories(inventoryData);

  // convert vehicles array into vehicle label string
  const activitiesData = activities.map((activity) => {
    const { vehicleDetails, servicesDetails, inventoryDetails } = activity;

    return {
      ...activity,
      services: servicesDetails.map((service) => service.name),
      inventory: inventoryDetails.map((item) => item.name),
      vehicle: vehicleDetails
        ? `${vehicleDetails.make} ${vehicleDetails.model} ${vehicleDetails.year}`
        : ''
    };
  });

  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="mb-4 font-bold text-gray-700">Activities</h3>
        {/* Add activity */}
        {user?.roles !== 'User' && (
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
        )}
      </div>
      <div className="rounded-[14px] bg-white p-8">
        <DataTable
          data={activitiesData}
          columns={columns(
            vehicles,
            services,
            inventories,
            editActivity,
            removeActivity,
            activitiesData
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
