import { TicketInterface } from 'interfaces/ticket';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface TimeEntryInterface {
  id?: string;
  start_time: any;
  end_time?: any;
  description?: string;
  ticket_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  ticket?: TicketInterface;
  user?: UserInterface;
  _count?: {};
}

export interface TimeEntryGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  ticket_id?: string;
  user_id?: string;
}
