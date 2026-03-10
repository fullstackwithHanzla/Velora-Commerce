import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, createRoutesFromChildren, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Loading from '../shared/ui/Loading';
import Shop from './pages/Shop';
import Error from './pages/Error';
import MailSuccess from './pages/MailSuccess'

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
      <Route
        path='/shop'
        element={
          <Suspense fallback={<Loading/>}>
            <Shop />
          </Suspense>
        }
      />
      <Route
        path='/error'
        element={
          <Suspense fallback={<Loading/>}>
            <Error />
      </Suspense>} />
      <Route
        path='*'
        element={
          <Suspense fallback={<Loading/>}>
            <Error />
      </Suspense>} />
      <Route
        path='/mail-success'
        element={
          <Suspense fallback={<Loading/>}>
            <MailSuccess />
      </Suspense>} />
      
    </Route>
  )
);

export default router;