import { TimeEntryInterface } from 'interfaces/time-entry';
import { ProjectInterface } from 'interfaces/project';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TicketInterface {
  id?: string;
  title: string;
  description?: string;
  status: string;
  priority: string;
  project_id: string;
  creator_id: string;
  assignee_id: string;
  created_at?: any;
  updated_at?: any;
  time_entry?: TimeEntryInterface[];
  project?: ProjectInterface;
  user_ticket_creator_idTouser?: UserInterface;
  user_ticket_assignee_idTouser?: UserInterface;
  _count?: {
    time_entry?: number;
  };
}

export interface TicketGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  status?: string;
  priority?: string;
  project_id?: string;
  creator_id?: string;
  assignee_id?: string;
}
