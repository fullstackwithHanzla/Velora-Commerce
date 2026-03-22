import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";


const DefaultLayout = lazy(() => import("./layouts/DefaultLayout"));
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Error = lazy(() => import("./pages/Error"));
const MailSuccess = lazy(() => import("./pages/MailSuccess"));
const Contact = lazy(() => import("./features/contact/components/Contact"));
const PrivacyPolicy = lazy(() => import("./layouts/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./layouts/TermsAndConditions"));
const SignUpLayout = lazy(() => import("./layouts/SignUpLayout"));
const SignInLayout = lazy(()=> import("./layouts/SignInLayout"))
const ShopWithoutSidebar = lazy(()=> import("./features/shop/components/ShopWithoutSidebar"))
const Popular = lazy(()=> import("./features/shop/components/Popular"))
const WishList = lazy(()=> import("./features/wishlist/components/WishList"))
const ProductInSight = lazy(() => import("./features/products/components/ProductInSight"))
const ShopByCategory = lazy(() => import("./features/shop/components/ShopByCategory"))
const ForgotPasswordComponent = lazy(() => import("./features/auth/components/Forgotpassword"))
const ProductsCart = lazy(() => import("./features/cart/components/ProductsCart"))
const Checkout = lazy(() => import("./features/checkout/Checkout"))
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
      { path: "category/:slug", element : <ShopByCategory />},
      {path : "shop-without-sidebar", element : <ShopWithoutSidebar/>},
      { path: "forgot-password", element: <ForgotPasswordComponent />},
      { path: "cart", element: <ProductsCart />},
      { path: "checkout", element: <Checkout />},
      { path: "*", element: <Error /> }
    ]
  }
]);

export default router;
