import { columns } from '@/components/profile/column';
import { statuses } from '@/components/profile/data';
import { DataTable } from '@/components/dataTable/dataTable';
import SideSheet from '@/components/display/SideSheet';
import useProfile from '@/hooks/useProfile';
import { AddUserFormSchema } from '@/components/profile/userForm/UserFormValidation';
import UserForm from '@/components/profile/userForm/UserForm';

const Users = () => {
  const { allUsers, addProfile, removeProfile } = useProfile();
  const users = allUsers?.data;

  // do not render anything if profile data is still null
  if (!users) {
    return null;
  }

  if (allUsers.isLoading) {
    return <div>loading data...</div>;
  } else if (allUsers.isError) {
    return <div>error loading data</div>;
  }

  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="mb-4 font-bold text-gray-700">Users</h3>
        <SideSheet
          type="button"
          triggerLabel="Add User Profile"
          title="Add User Profile"
          description="Add User Profile details and click Add Profile when done."
          actionLabel="Add Proile"
          body={
            <UserForm
              formAction={addProfile}
              formValidation={AddUserFormSchema}
              buttonText="Add Profile"
            />
          }
        />
      </div>
      <div className="rounded-[14px] bg-white p-8">
        <DataTable
          data={users}
          columns={columns(removeProfile)}
          props={{ statuses, users }}
          placeholder="Search inventory..."
          filterColumn="firstName"
        />
      </div>
    </div>
  );
};

export default Users;
