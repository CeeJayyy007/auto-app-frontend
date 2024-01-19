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

const Activities = () => {
  const { editActivity, removeActivity } = useActivities();
  const { createServiceRequest } = useAppointment();

  const user = storePersist.get('profile').user[0];
  const usersData = storePersist.get('allUsers');
  const activities = storePersist.get('activities');
  const servicesData = storePersist.get('service');
  const inventoryData = storePersist.get('inventory');

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
