import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, createRoutesFromChildren, Route } from 'react-router-dom';
import Loading from "../shared/ui/Loading";


const PrivacyPolicy =lazy(()=> import("./layouts/PrivacyPolicy")) 
const DefaultLayout = lazy(() => import("./layouts/DefaultLayout"));
const Shop = lazy(() => import("./pages/Shop"));
const Error = lazy(() => import("./pages/Error"));
const MailSuccess = lazy(() => import("./pages/MailSuccess"));
const TermsAndConditions = lazy(() => import("./layouts/TermsAndConditions"));
const SignUpLayout = lazy(() => import("./layouts/SignUpLayout"));
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
      <Route
        path='/privacy-policy'
        element={
          <Suspense fallback={<Loading/>}>
            <PrivacyPolicy />
      </Suspense>} />
      <Route
        path='/terms-&-conditions'
        element={
          <Suspense fallback={<Loading/>}>
            <TermsAndConditions />
      </Suspense>} />
      <Route
        path='/sign-up'
        element={
          <Suspense fallback={<Loading/>}>
            <SignUpLayout />
      </Suspense>} />
      
    </Route>
  )
);

export default router;