const mapping: Record<string, string> = {
  companies: 'company',
  projects: 'project',
  teams: 'team',
  tickets: 'ticket',
  'time-entries': 'time_entry',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
