// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons-react';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'Purchase',
      title: 'Purchase',
      type: 'item',
      url: '/Purchase',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'Inventory',
      title: 'Inventory',
      type: 'item',
      url: '/Inventory',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'Sale',
      title: 'Sale',
      type: 'item',
      url: '/Sale',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'Accounts',
      title: 'Accounts',
      type: 'item',
      url: '/Accounts',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'Reports',
      title: 'Reports',
      type: 'item',
      url: '/Reports',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'documentation',
      title: 'Ecommerce',
      type: 'item',
      url: 'https://www.hexoinnovation.com',
      icon: icons.IconHelp,
      external: true,
      target: true
    }
  ]
};

export default other;
