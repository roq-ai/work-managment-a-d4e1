interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Project Manager', 'Client', 'Administrator', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'work managment app',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company information',
    'Read project details',
    'Read ticket details',
  ],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage projects', 'Manage tickets'],
  getQuoteUrl: 'https://app.roq.ai/proposal/b509d358-b188-4317-b087-3ea16e8a9dd1',
};
