import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, createRoutesFromChildren, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Loading from '../shared/ui/Loading';

// Lazy load the Home page
const Home = lazy(() => import('./pages/Home'));

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<DefaultLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<Loading/>}>
            <Home />
          </Suspense>
        }
      />
    </Route>
  )
);

export default router;