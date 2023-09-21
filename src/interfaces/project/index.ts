import { TicketInterface } from 'interfaces/ticket';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProjectInterface {
  id?: string;
  name: string;
  start_date: any;
  end_date?: any;
  status: string;
  company_id: string;
  manager_id: string;
  created_at?: any;
  updated_at?: any;
  ticket?: TicketInterface[];
  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {
    ticket?: number;
  };
}

export interface ProjectGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  company_id?: string;
  manager_id?: string;
}
