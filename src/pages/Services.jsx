import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { avatarFallback, getDate, getDurationLabel } from '@/utils/helpers';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import IconDropdownMenu from '@/components/icons/IconDropdownMenu';
import AlertDialogComponent from '@/components/display/AlertDialog';
import DrawerComponent from '@/components/display/Drawer';
import SideSheet from '@/components/display/SideSheet';
import useServices from '@/hooks/useServices';
import { useUserValue } from '@/context/UserContext';
import ServiceForm from '@/components/services/ServiceForm';
import {
  AddServiceFormSchema,
  EditServiceFormSchema
} from '@/components/services/ServicesFormValidation';

const Services = () => {
  const { allServices, addService, editService, deleteService } = useServices();
  const servicesData = allServices?.data;
  const user = useUserValue();

  // do not render anything if profile data is still null
  if (!servicesData) {
    return null;
  }

  if (allServices.isLoading) {
    return <div>loading data...</div>;
  } else if (allServices.isError) {
    return <div>error loading data</div>;
  }

  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="mb-4 font-bold text-gray-700">Services</h3>
        {/* Add Service */}
        {user.roles !== 'user' && (
          <SideSheet
            type="button"
            triggerLabel="Add Service"
            title="Add Service"
            description="Add Service details and click Add Service when done."
            actionLabel="Add Service"
            body={
              <ServiceForm
                formAction={addService}
                formValidation={AddServiceFormSchema}
                buttonText="Add Service"
              />
            }
          />
        )}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {servicesData.map((service) => (
          <Card className="text-sm" key={service.name}>
            <CardHeader>
              <div className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-sm">{service.name}</CardTitle>
                  <CardDescription className="text-xs truncate max-w-[200px]">
                    {service.description}
                  </CardDescription>
                </div>
                <IconDropdownMenu
                  className="m-0"
                  // View
                  viewAction={
                    <DrawerComponent
                      actionLabel="Close"
                      triggerLabel="View"
                      title={`Viewing ${service.name} Service`}
                      description={service.description}
                      cancelLabel="Cancel"
                      body={
                        <div className="flex flex-col space-y-4 py-4">
                          <h4 className="text-sm font-semibold mx-4">
                            Name: {service.name}
                          </h4>
                          <h4 className="text-sm font-semibold mx-4">
                            Price: {service.price}
                          </h4>
                          <h4 className="text-sm font-semibold mx-4">
                            Duration: {getDurationLabel(service.duration)}
                          </h4>
                          <h4 className="text-sm font-semibold mx-4">
                            Created on: {getDate(service.createdAt)}
                          </h4>

                          <h4 className="text-sm font-semibold mx-4">
                            Updated on: {getDate(service.updatedAt)}
                          </h4>
                        </div>
                      }
                    />
                  }
                  // Edit
                  editAction={
                    user.roles !== 'user' && (
                      <SideSheet
                        triggerLabel="Edit"
                        title="Edit Service"
                        description="Edit Service details and click Add Service when done."
                        actionLabel="Edit Service"
                        body={
                          <ServiceForm
                            service={service}
                            formAction={editService}
                            formValidation={EditServiceFormSchema}
                            buttonText="Edit Service"
                          />
                        }
                      />
                    )
                  }
                  // Delete
                  deleteAction={
                    user.roles !== 'user' && (
                      <AlertDialogComponent
                        actionLabel="Delete"
                        triggerLabel="Delete"
                        title="Delete Service"
                        description={`Are you sure you want to delete ${service.name} service?`}
                        cancelLabel="Cancel"
                        onClick={() => deleteService(service.id)}
                      />
                    )
                  }
                />
              </div>
            </CardHeader>

            <CardContent className="flex justify-center">
              <Avatar className="h-[100px] w-[100px]">
                <AvatarImage src={service.image} alt="Avatar" />
                <AvatarFallback>{avatarFallback(service.name)}</AvatarFallback>
              </Avatar>
            </CardContent>
            <div className="mx-4 pb-4 ">
              <CardFooter className="font-bold text-[18px] p-0 pb-2 m-0">
                ₦{service.price}
              </CardFooter>
              <CardFooter className="align-right p-0 m-0">
                {getDurationLabel(service.duration)}
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
