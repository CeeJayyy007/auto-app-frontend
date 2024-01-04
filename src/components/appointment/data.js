export const statuses = [
  {
    value: 'pending',
    label: 'Pending'
  },
  {
    value: 'in-progress',
    label: 'In-Progress'
  },
  {
    value: 'canceled',
    label: 'Canceled'
  },
  {
    value: 'completed',
    label: 'Completed'
  }
];

export const services = [
  {
    id: 1,
    label: 'Oil Change',
    value: 'Oil Change'
  },
  {
    id: 2,
    label: 'Tyre Change',
    value: 'Tyre Change'
  },
  {
    id: 3,
    label: 'Steering',
    value: 'Steering'
  },
  {
    id: 4,
    label: 'Wheel Alignment',
    value: 'Wheel Alignment'
  },
  {
    id: 5,
    label: 'Brake',
    value: 'Brake'
  },
  {
    id: 6,
    label: 'Cooling',
    value: 'Cooling'
  },
  {
    id: 7,
    label: 'Wiper',
    value: 'Wiper'
  },
  {
    id: 8,
    label: 'Battery',
    value: 'Battery'
  },
  {
    id: 9,
    label: 'Exhaust',
    value: 'Exhaust'
  },
  {
    id: 10,
    label: 'Transmission',
    value: 'Transmission'
  },
  {
    id: 11,
    label: 'Electrical',
    value: 'Electrical'
  },
  {
    id: 12,
    label: 'Air Conditioning',
    value: 'Air Conditioning'
  },
  {
    id: 13,
    label: 'Suspension',
    value: 'Suspension'
  },
  {
    id: 14,
    label: 'Engine',
    value: 'Engine'
  }
];

export const vehicles = [
  {
    label: 'Vehicle 1',
    value: 'Vehicle 1'
  },
  {
    label: 'Vehicle 2',
    value: 'Vehicle 2'
  }
];

export const appointmentData = [
  {
    id: 1,
    date: '2021-10-01',
    vehicle: 'Vehicle 1',
    note: 'Note 1',
    services: ['Oil Change', 'Tyre Change', 'Steering'],
    status: 'pending'
  },
  {
    id: 2,
    date: '2021-10-02',
    vehicle: 'Vehicle 2',
    note: 'Note 2',
    services: ['Cooling', 'Wiper', 'Battery'],
    status: 'in-progress'
  },
  {
    id: 3,
    date: '2021-10-03',
    vehicle: 'Vehicle 1',
    note: 'Note 3',
    services: ['Exhaust', 'Transmission', 'Electrical'],
    status: 'canceled'
  },
  {
    id: 4,
    date: '2021-10-04',
    vehicle: 'Vehicle 2',
    note: 'Note 4',
    services: ['Air Conditioning', 'Suspension', 'Engine'],
    status: 'pending'
  },
  {
    id: 5,
    date: '2021-10-05',
    vehicle: 'Vehicle 1',
    note: 'Note 5',
    services: ['Battery', 'Cooling', 'Wiper'],
    status: 'completed'
  },
  {
    id: 6,
    date: '2021-10-06',
    vehicle: 'Vehicle 1',
    note: 'Note 6',
    services: ['Transmission', 'Exhaust', 'Electrical'],
    status: 'canceled'
  },
  {
    id: 7,
    date: '2021-10-07',
    vehicle: 'Vehicle 1',
    note: 'Note 7',
    services: ['Suspension', 'Air Conditioning', 'Engine'],
    status: 'pending'
  },
  {
    id: 8,
    date: '2021-10-08',
    vehicle: 'Vehicle 2',
    note: 'Note 8',
    services: ['Oil Change', 'Tyre Change', 'Steering'],
    status: 'completed'
  },
  {
    id: 9,
    date: '2021-10-09',
    vehicle: 'Vehicle 1',
    note: 'Note 9',
    services: ['Cooling', 'Wiper', 'Battery'],
    status: 'canceled'
  },
  {
    id: 10,
    date: '2021-10-10',
    vehicle: 'Vehicle 1',
    note: 'Note 10',
    services: ['Exhaust', 'Transmission', 'Electrical'],
    status: 'pending'
  },
  {
    id: 11,
    date: '2021-10-11',
    vehicle: 'Vehicle 1',
    note: 'Note 11',
    services: ['Tyre Change', 'Steering', 'Oil Change'],
    status: 'in-progress'
  },
  {
    id: 12,
    date: '2021-10-12',
    vehicle: 'Vehicle 1',
    note: 'Note 12',
    services: ['Cooling', 'Wiper', 'Battery'],
    status: 'completed'
  }
];
