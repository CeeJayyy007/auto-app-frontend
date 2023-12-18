import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon
} from '@radix-ui/react-icons';

export const labels = [
  {
    value: 'bug',
    label: 'Bug'
  },
  {
    value: 'feature',
    label: 'Feature'
  },
  {
    value: 'documentation',
    label: 'Documentation'
  }
];

export const statuses = [
  {
    value: 'backlog',
    label: 'Backlog',
    icon: QuestionMarkCircledIcon
  },
  {
    value: 'todo',
    label: 'Todo',
    icon: CircleIcon
  },
  {
    value: 'in progress',
    label: 'In Progress',
    icon: StopwatchIcon
  },
  {
    value: 'done',
    label: 'Done',
    icon: CheckCircledIcon
  },
  {
    value: 'canceled',
    label: 'Canceled',
    icon: CrossCircledIcon
  }
];

export const priorities = [
  {
    label: 'Low',
    value: 'low',
    icon: ArrowDownIcon
  },
  {
    label: 'Medium',
    value: 'medium',
    icon: ArrowRightIcon
  },
  {
    label: 'High',
    value: 'high',
    icon: ArrowUpIcon
  }
];

export const appointmentData = [
  {
    date: '2021-10-01',
    note: 'Note 1',
    Services: ['Service 1', 'Service 2', 'Service 3'],
    status: 'pending'
  },
  {
    date: '2021-10-02',
    note: 'Note 2',
    Services: ['Service 1', 'Service 2', 'Service 3'],
    status: 'approved'
  },
  {
    date: '2021-10-03',
    note: 'Note 3',
    Services: ['Service 1', 'Service 2', 'Service 3'],
    status: 'pending'
  },
  {
    date: '2021-10-04',
    note: 'Note 4',
    Services: ['Service 1', 'Service 2', 'Service 3'],
    status: 'approved'
  },
  {
    date: '2021-10-05',
    note: 'Note 5',
    Services: ['Service 1', 'Service 2', 'Service 3'],
    status: 'pending'
  },
  {
    date: '2021-10-06',
    note: 'Note 6',
    Services: ['Service 1', 'Service 2', 'Service 3'],
    status: 'approved'
  },
  {
    date: '2021-10-07',
    note: 'Note 7',
    Services: ['Service 1', 'Service 2', 'Service 3'],
    status: 'pending'
  },
  {
    date: '2021-10-08',
    note: 'Note 8',
    Services: ['Service 1', 'Service 2', 'Service 3'],
    status: 'approved'
  },
  {
    date: '2021-10-09',
    note: 'Note 9',
    Services: ['Service 1', 'Service 2', 'Service 3'],
    status: 'pending'
  },
  {
    date: '2021-10-10',
    note: 'Note 10',
    Services: ['Service 1', 'Service 2', 'Service 3'],
    status: 'approved'
  },
  {
    date: '2021-10-11',
    note: 'Note 11',
    Services: ['Service 1', 'Service 2', 'Service 3'],
    status: 'pending'
  },
  {
    date: '2021-10-12',
    note: 'Note 12',
    Services: ['Service 1', 'Service 2', 'Service 3'],
    status: 'approved'
  }
];
