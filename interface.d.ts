type Status = 'Pending' | 'Completed';

export interface Task {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  status: Status;
  important: boolean;
}
