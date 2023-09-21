import axios from 'axios';
import queryString from 'query-string';
import { TeamInterface, TeamGetQueryInterface } from 'interfaces/team';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTeams = async (query?: TeamGetQueryInterface): Promise<PaginatedInterface<TeamInterface>> => {
  const response = await axios.get('/api/teams', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTeam = async (team: TeamInterface) => {
  const response = await axios.post('/api/teams', team);
  return response.data;
};

export const updateTeamById = async (id: string, team: TeamInterface) => {
  const response = await axios.put(`/api/teams/${id}`, team);
  return response.data;
};

export const getTeamById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/teams/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTeamById = async (id: string) => {
  const response = await axios.delete(`/api/teams/${id}`);
  return response.data;
};
