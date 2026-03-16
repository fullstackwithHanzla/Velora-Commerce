import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";


const DefaultLayout = lazy(() => import("./layouts/DefaultLayout"));
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Error = lazy(() => import("./pages/Error"));
const MailSuccess = lazy(() => import("./pages/MailSuccess"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const PrivacyPolicy = lazy(() => import("./layouts/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./layouts/TermsAndConditions"));
const SignUpLayout = lazy(() => import("./layouts/SignUpLayout"));
const SignInLayout = lazy(()=> import("./layouts/SignInLayout"))
const ShopWithoutSidebar = lazy(()=> import("./pages/Shop/WithoutSidebar/ShopWithoutSidebar"))
const Popular = lazy(()=> import("./pages/Shop/WithoutSidebar/Popular/Popular"))
const WishList = lazy(()=> import("./pages/WishList/WishList"))
const ProductInSight = lazy(() => import("./pages/ProductsInformation/ProductInSight"))
const ShopByCategory = lazy(() => import("./pages/Shop/ShopByCategory/ShopByCategory"))
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop />},
      { path: "mail-success", element: <MailSuccess /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "terms-&-conditions", element: <TermsAndConditions /> },
      { path: "sign-up", element: <SignUpLayout /> },
      { path: "error", element: <Error /> },
      {path : "sign-in", element : <SignInLayout/>},
      {path : "contact", element : <Contact/>},
      {path : "wishlist", element : <WishList/>},
      { path: "popular", element: <Popular />},
      {path : "shop/:slug", element : <ProductInSight/>},
      { path: "category/:slug", element: <ShopByCategory />},
      {path : "shop-without-sidebar", element : <ShopWithoutSidebar/>},
      { path: "*", element: <Error /> }
    ]
  }
]);

export default router;