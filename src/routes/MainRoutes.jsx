import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
//const dashDefault = Loadable(lazy(() => import(`views/dash`)));
const DashboardDefault = Loadable(lazy(() => import(`views/dash`)));
//const SamplePage = Loadable(lazy(() => import('views/pages/authentication3/Login3')));
// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

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
      //  path: 'pages',
      //element: <pages />
    },


    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]

};

export default MainRoutes;
