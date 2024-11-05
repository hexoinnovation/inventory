import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
//const dashDefault = Loadable(lazy(() => import(`views/dash`)));
const DashboardDefault = Loadable(lazy(() => import(`views/dash`)));
//const SamplePage = Loadable(lazy(() => import('views/pages/authentication3/Login3')));
// sample page routing
const Purchase = Loadable(lazy(() => import('views/Purchase')));
const Inventory = Loadable(lazy(() => import('views/Inventory')));
const Sale = Loadable(lazy(() => import('views/Sale')));
const Accounts = Loadable(lazy(() => import('views/Accounts')));
const Reports = Loadable(lazy(() => import('views/Reports')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/dash',
      element: <DashboardDefault />
    },
    {
      path: '/dash',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },

    {
      path: 'Inventory',
      element: <Inventory />
    },
    {
      path: 'Sale',
      element: <Sale />
    },
    {
      path: 'Reports',
      element: <Reports />
    },
    {
      path: 'Accounts',
      element: <Accounts />
    },

    {
      path: 'Purchase',
      element: <Purchase />
    }
  ]

};

export default MainRoutes;
