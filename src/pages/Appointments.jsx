const Appointments = () => {
  return (
    <div>
      <h3 className="mb-4 font-bold text-gray-700">Appointments</h3>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col space-y-1">
            <p className="text-sm text-gray-500">Today</p>
            <h4 className="text-lg font-semibold">2 Appointments</h4>
          </div>
          <button className="btn btn-primary">View All</button>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col space-y-1">
            <p className="text-sm text-gray-500">Tomorrow</p>
            <h4 className="text-lg font-semibold">1 Appointment</h4>
          </div>
          <button className="btn btn-primary">View All</button>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col space-y-1">
            <p className="text-sm text-gray-500">This Week</p>
            <h4 className="text-lg font-semibold">5 Appointments</h4>
          </div>
          <button className="btn btn-primary">View All</button>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
