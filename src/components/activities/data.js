export const statuses = [
  {
    value: 'in-progress',
    label: 'In-progress'
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
    label: 'Oil Change',
    value: 'Oil Change'
  },
  {
    label: 'Tyre Change',
    value: 'Tyre Change'
  },
  {
    label: 'Steering',
    value: 'Steering'
  },
  {
    label: 'Wheel Alignment',
    value: 'Wheel Alignment'
  },
  {
    label: 'Brake',
    value: 'Brake'
  },
  {
    label: 'Engine',
    value: 'Engine'
  },
  {
    label: 'Suspension',
    value: 'Suspension'
  },
  {
    label: 'Air Conditioning',
    value: 'Air Conditioning'
  },
  {
    label: 'Electrical',
    value: 'Electrical'
  },
  {
    label: 'Exhaust',
    value: 'Exhaust'
  },
  {
    label: 'Transmission',
    value: 'Transmission'
  },
  {
    label: 'Battery',
    value: 'Battery'
  },
  {
    label: 'Cooling',
    value: 'Cooling'
  },
  {
    label: 'Wiper',
    value: 'Wiper'
  }
];

export const inventories = [
  {
    label: 'Oil',
    value: 'Oil'
  },
  {
    label: 'Tyre',
    value: 'Tyre'
  },
  {
    label: 'Steering',
    value: 'Steering'
  },
  {
    label: 'Wheel',
    value: 'Wheel'
  },
  {
    label: 'Brake',
    value: 'Brake'
  },
  {
    label: 'Engine',
    value: 'Engine'
  },
  {
    label: 'Suspension',
    value: 'Suspension'
  },
  {
    label: 'Air',
    value: 'Air'
  },
  {
    label: 'Electrical',
    value: 'Electrical'
  },
  {
    label: 'Exhaust',
    value: 'Exhaust'
  },
  {
    label: 'Transmission',
    value: 'Transmission'
  },
  {
    label: 'Battery',
    value: 'Battery'
  },
  {
    label: 'Cooling',
    value: 'Cooling'
  },
  {
    label: 'Wiper',
    value: 'Wiper'
  }
];

export const activitiesData = [
  {
    id: 1,
    startDate: '2021-07-01',
    endDate: '2021-07-01',
    services: ['Oil Change', 'Tyre Change'],
    inventory: ['Oil', 'Tyre'],
    note: 'Note 1',
    status: 'in-progress'
  },
  {
    id: 2,
    startDate: '2021-07-02',
    endDate: '2021-07-02',
    services: ['Steering', 'Wheel Alignment'],
    inventory: ['Steering', 'Wheel'],
    note: 'Note 2',
    status: 'canceled'
  },
  {
    id: 3,
    startDate: '2021-07-03',
    endDate: '2021-07-03',
    services: ['Brake', 'Engine'],
    inventory: ['Brake', 'Engine'],
    note: 'Note 3',
    status: 'completed'
  },
  {
    id: 4,
    startDate: '2021-07-04',
    endDate: '2021-07-04',
    services: ['Suspension', 'Air Conditioning'],
    inventory: ['Suspension', 'Air'],
    note: 'Note 4',
    status: 'in-progress'
  },
  {
    id: 5,
    startDate: '2021-07-05',
    endDate: '2021-07-05',
    services: ['Electrical', 'Exhaust'],
    inventory: ['Electrical', 'Exhaust'],
    note: 'Note 5',
    status: 'in-progress'
  },
  {
    id: 6,
    startDate: '2021-07-06',
    endDate: '2021-07-06',
    services: ['Transmission', 'Battery'],
    inventory: ['Transmission', 'Battery'],
    note: 'Note 6',
    status: 'canceled'
  },
  {
    id: 7,
    startDate: '2021-07-07',
    endDate: '2021-07-07',
    services: ['Cooling', 'Wiper'],
    inventory: ['Cooling', 'Wiper'],
    note: 'Note 7',
    status: 'completed'
  },
  {
    id: 8,
    startDate: '2021-07-08',
    endDate: '2021-07-08',
    services: ['Oil Change', 'Tyre Change'],
    inventory: ['Oil', 'Tyre'],
    note: 'Note 8',
    status: 'in-progress'
  },
  {
    id: 9,
    startDate: '2021-07-09',
    endDate: '2021-07-09',
    services: ['Steering', 'Wheel Alignment'],
    inventory: ['Steering', 'Wheel'],
    note: 'Note 9',
    status: 'in-progress'
  },
  {
    id: 10,
    startDate: '2021-07-10',
    endDate: '2021-07-10',
    services: ['Brake', 'Engine'],
    inventory: ['Brake', 'Engine'],
    note: 'Note 10',
    status: 'canceled'
  },
  {
    id: 11,
    startDate: '2021-07-11',
    endDate: '2021-07-11',
    services: ['Suspension', 'Air Conditioning'],
    inventory: ['Suspension', 'Air'],
    note: 'Note 11',
    status: 'completed'
  },
  {
    id: 12,
    startDate: '2021-07-12',
    endDate: '2021-07-12',
    services: ['Electrical', 'Exhaust'],
    inventory: ['Electrical', 'Exhaust'],
    note: 'Note 12',
    status: 'in-progress'
  },
  {
    id: 13,
    startDate: '2021-07-13',
    endDate: '2021-07-13',
    services: ['Transmission', 'Battery'],
    inventory: ['Transmission', 'Battery'],
    note: 'Note 13',
    status: 'in-progress'
  },
  {
    id: 14,
    startDate: '2021-07-14',
    endDate: '2021-07-14',
    services: ['Cooling', 'Wiper'],
    inventory: ['Cooling', 'Wiper'],
    note: 'Note 14',
    status: 'canceled'
  },
  {
    id: 15,
    startDate: '2021-07-15',
    endDate: '2021-07-15',
    services: ['Oil Change', 'Tyre Change'],
    inventory: ['Oil', 'Tyre'],
    note: 'Note 15',
    status: 'completed'
  }
];
