<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:1e3a5f,100:3b82f6&height=260&section=header&text=Velora%20Commerce&fontSize=42&fontAlignY=35&desc=Feature-based%20React%20storefront%20with%20Zustand%2C%20RHF%2C%20and%20Zod&descSize=14&descAlignY=52&descAlign=50&fontColor=ffffff" alt="Velora Commerce header" />
</p>

<p align="center">
  <a href="https://fullstackwithhanzla-velora-commerce.vercel.app/"><img src="https://img.shields.io/badge/Live_Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live demo on Vercel" /></a>
  &nbsp;
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=zustand&logoColor=white" alt="Zustand" />
  <img src="https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hook Form" />
  <img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

<p align="center"><strong>Front-end e-commerce experience with lazy-loaded routes, persisted client state, and schema-driven forms—all backed by static product data, not a real API.</strong></p>

<p align="center"><em>Built in 22 days · Self-taught · No bootcamp · No team</em></p>

---

## 📌 Overview

Velora Commerce is a **single-page application** built with **React 19** and **Vite 7** that simulates a multi-section retail site: home merchandising, catalog browsing with filters, product detail, cart, wishlist, auth screens, and a multi-step checkout flow. **All product and blog content is defined in local modules** (`features/blog/api.js`, `BlogsData.js`), so the app demonstrates **UI, state, and routing** rather than production commerce infrastructure.

I built this during a **gap year** as one of my **first substantial full-stack–leaning front-end projects**, to practice **feature folders**, **global vs feature state**, and **forms with validation** without relying on a course or team. The `src/` tree contains on the order of **130+ `.jsx` modules** plus a small set of `.js` schemas and data files—large enough to feel like a real storefront, small enough for one person to navigate.

---

## 🌐 Live demo

**Production URL:** [https://fullstackwithhanzla-velora-commerce.vercel.app/](https://fullstackwithhanzla-velora-commerce.vercel.app/)

The app is **deployed on Vercel** and serves the static Vite build from the `dist` output.

---

## ✨ Features (by area)

### 🏠 Home

- **Hero stack** combines `HomeLandingPage` (banner + `HomeSlider` fed by `newProductsData`) with category browsing via `BrowseByCategorySlider`, which uses the shared `useVisibleCount` hook for responsive slide counts.
- **New arrivals** pulls from the same static catalog through `NewArrivals` / `NewArrivalsProducts`, with **quick-view modal** state in `useQuickViewStore` and add-to-cart / wishlist actions wired to **Zustand** stores.
- **Product timer** (`ProductTimer` + `CountDown`) surfaces promotional timing using catalog metadata.
- **Latest trends & offers** renders a newsletter-style block; submitting triggers **`ToastProvider`** feedback (no backend subscription).
- **About delivery** section closes the page with static trust/delivery copy.

### 🛍️ Shop & catalog

- **`/shop`** wraps a **sidebar filter panel** (`FilterizationForShop` with category, color, and **MUI `Slider`** price range) and **`ShopWithoutSidebar`**, which merges **Zustand-driven filters** (`useProductFilterization`, persisted) with **sort modes** (e.g. best selling vs latest).
- **`shopFilterContext`** in `pages/Shop.jsx` toggles layout behavior for product grids consumed by `NewArrivalsProducts`.
- **`/category/:slug`** (`ShopByCategory`) filters `newProductsData` by category slug and reuses the shop grid.
- **`/popular`** forces the “Popular” preset on `ShopWithoutSidebar`.
- **`/shop-without-sidebar`** exposes the grid route directly.
- **`/shop/:slug`** loads **`ProductInSight`**: image gallery (`InformationCard`, `QuickProductThumbnail`, `ProductImgType`), tabbed **About / specs / reviews** (`AboutProduct`, `AboutProductData`, `AddReview`, `CustomStars`), and **related products** (`RelatedItems`, `RelatedProductCard`, `RelatedLatestOffers` embedding `LatestTrends`).
- **Route-level loading** uses `useNavigation` in `DefaultLayout` with a **MUI `LinearProgress`**-based `Loading` component.

### 🔍 Search

- **Header search** opens a panel driven by **`useSearchStore`** (open/close) and **`useSearchInputStore`** (debounced query).
- **`InputElement`** applies a **custom `useDebounceInput` hook (default 600ms)** before writing the query to the store so product/blog results are not recomputed on every keystroke.
- **`SearchProducts`** and **`SearchBlogs`** filter **`newProductsData`** and **`blogsData`** by title match against the debounced query.

### 🛒 Cart

- **`useCartStore`** (Zustand **`persist`** to `localStorage`) holds **line items**, **quantity updates**, **derived totals**, and **snackbar / drawer open state**.
- **`SnackbarCart`** and **`Cart`** provide slide-out cart UI; **`ProductsCart`** is the full **`/cart`** page with **`EmptyCart`**, line list, **`CouponCode`** (always shows “Invalid Discount Code!” via toast), and **`OrderSummary`** (subtotal + **shipping selection** from `useShippingMethods`).

### ❤️ Wishlist

- **`useWishListStore`** persists wishlist entries; **`WishList`** switches between **`WishListHeader`**, **`WishListProducts`** (remove, move to cart, out-of-stock handling), and **`EmptyWishList`**.

### 🔐 Auth & account flows

- **`/sign-in`** and **`/sign-up`** use **React Hook Form** with **`zodResolver`** and **`signInSchema` / `signUpSchema`** (e.g. password complexity and disposable-email guard on sign-in).
- **`SignInMethods` / `SignUpMethods`** render social-style buttons that call **`showToast`** instead of OAuth.
- **`/forgot-password`** uses **`Forgotpassword.jsx`** with **`forgotPassSchema`** and the same toast-driven UX.

### 💳 Checkout

- **`/checkout`** shows **`EmptyCart`** when the Zustand cart is empty; otherwise **`ProductCheckout`** stacks **billing** (`BillingAddress` + **`billingAddressSchema`** + optional `PhoneInputComponent`), **notes**, **order summary**, **coupon**, **shipping radios** (`useShippingMethods`, persisted), and **payment method** selection (`usePaymentMethods`).
- **`PaymentMethodDetails`** uses **RHF** for card fields when “Stripe” is selected, but **no Stripe.js integration runs**—submits show an explanatory **error toast**; **Cash on Delivery** is a separate branch with a **Place Order** button.
- Dependencies **`@stripe/react-stripe-js`** and **`@stripe/stripe-js`** are installed but the checkout path is **intentionally manual / educational**, as noted in UI copy.

### 📱 Other routes & content

- **`/contact`** — contact layout with phone input styling, message fields, and a toast stating submission is disabled pending backend.
- **`/privacy-policy`** & **`/terms-&-conditions`** — render long-form content from **`shared/utils/PrivacyPolicyData.js`** and **`TermsData.jsx`** via `PrivacyPolicayInfo` and `TermsInformation`.
- **`/mail-success`** — static confirmation view for a mail flow that is not wired to a real service.
- **`/error`** and **catch-all `*`** — error page routes for broken paths.

### Global UX

- **`Root.jsx`** shows **`LoadingCircle`** for **1.5s** to simulate app boot before mounting **`RouterProvider`**.
- **`ToastProvider`** (context in `layouts/providers/ToastProvider.jsx`) wraps the tree in `main.jsx` for app-wide notifications.
- **Breadcrumbs**, **scroll-to-top**, **responsive header** (pages dropdown from `usePagesStore`, blogs dropdown from `useBlogsStore`), and **sidebar** (`useSideBarStore`) tie the shell together.

---

## 🧰 Tech stack

| Category | Technology | Why it was chosen |
|----------|------------|-------------------|
| Runtime | **React 19** | Component model, concurrent-ready APIs, and ecosystem alignment for a learning-focused SPA. |
| Bundler | **Vite 7** | Fast dev server and production builds with first-class ESM. |
| Styling | **Tailwind CSS 4** (`@tailwindcss/vite`) | Utility-first layout and spacing alongside arbitrary CSS variables (e.g. `bg-(--accent-secondary)`). |
| Routing | **React Router 7** (`createBrowserRouter`) | Declarative routes with **lazy-loaded** page and layout chunks. |
| Client state | **Zustand 5** | Lightweight stores with **`persist`** for cart, wishlist, filters, and shipping preferences. |
| Forms | **React Hook Form 7** | Controlled performance for sign-in, sign-up, forgot password, billing, and payment detail forms. |
| Validation | **Zod 4** + **`@hookform/resolvers`** | Shared schemas colocated with features (e.g. `billingAddressSchema`, `signInSchema`). |
| UI primitives | **MUI 7** (`@mui/material`, Emotion) | **Slider** for price filtering, **LinearProgress** for route loading; `LatestTrends.jsx` currently carries an **unused MUI import** that should be removed. |
| Icons | **react-icons** | Consistent icon set without custom SVG spriting. |
| Phone field | **react-phone-number-input** | International phone input styling for contact/billing-related screens. |
| Payments (deps only) | **@stripe/react-stripe-js**, **@stripe/stripe-js** | Present for future integration; **checkout currently uses mock radio UI**, not Elements. |
| Linting | **ESLint 9** + React plugins | Static checks in dev; **no test runner** is configured. |
| Types (editor) | **`@types/react` / `@types/react-dom`** | Improves JSX hints in the IDE; **application source remains `.jsx` / `.js`, not TypeScript.** |

---

## 📁 Project structure

Condensed tree of **`src/`** (on case-sensitive systems, prefer lowercase `cart` / `checkout`; Windows may mirror paths as `Cart` / `Checkout`).

```text
src/
├── App.jsx                 # RouterProvider entry
├── Root.jsx                # Artificial 1.5s splash before App
├── main.jsx                # ToastProvider + Root
├── routes.jsx              # createBrowserRouter + lazy route map
├── index.css               # Global styles / Tailwind
├── features/               # Domain slices (components + local stores)
│   ├── auth/components/    # Sign-in/up, forgot password, Zod schemas
│   ├── blog/               # Static API + blogs data + useBlogsStore
│   ├── cart/               # Cart UI + persisted useCartStore
│   ├── checkout/           # Checkout page, billing schema, payment/shipping stores
│   ├── contact/components/ # Contact page sections
│   ├── home/components/    # Hero, sliders, timer, trends strip
│   ├── products/components/# PDP, quick view, new arrivals, related items
│   ├── search/components/  # Search panel UI + debounced input
│   ├── search/store/       # Search + debounce + input query stores
│   ├── shop/components/    # Filters, grids, pagination, category routes
│   ├── shop/store/         # useShopFilter
│   └── wishlist/           # Wishlist UI + persisted store
├── layouts/                # Shell layouts and chrome-only components
│   ├── components/         # Header/footer/sidebar/legal blocks
│   ├── providers/          # ToastProvider (app-wide)
│   └── *.jsx               # DefaultLayout, SignIn/SignUp layouts, legal wrappers
├── pages/                  # Thin route targets: Home, Shop, Error, MailSuccess
├── shared/
│   ├── components/         # BreadCrumbs, loaders, cart/wishlist buttons, etc.
│   ├── hooks/              # useVisibleCount
│   └── utils/              # Privacy/terms data modules
└── store/                  # Global Zustand: pages + sidebar
```

**Honest notes:** The repo **targets a feature-based layout**, but **duplicate path casing** (`cart` vs `Cart`) can appear on Windows; **there is no `dashboard` or `notifications` feature** beyond any removed stubs. **No `.github/workflows`** directory exists, so **CI is not configured** in-repo.

---

## 🚀 Getting started

```bash
git clone https://github.com/fullstackwithHanzla/Velora-Commerce.git
cd Velora-Commerce
npm install
npm run dev
```

- **Dev server:** Vite (default `http://localhost:5173/`).
- **Production build:** `npm run build` then `npm run preview` to serve `dist/`.
- **Lint:** `npm run lint`.

**Environment variables:** None are required; the app uses **static assets under `public/`** and **in-repo JS data**. If you add a real API later, document keys here (e.g. `VITE_*` for Vite).

---

## 🧠 Honest self-assessment

### ✅ What was done well

- **Feature-oriented folders** (`features/*` with `components/` and `store/`) make it easier to see **where cart, search, and checkout logic live** than the older `app/pages` + scattered providers layout.
- **`useCartStore`** centralizes **cart mutations and derived totals** (`getTotalPrice`, `isInCart`) and **persists** the basket, which is an appropriate pattern for a client-only demo.
- **Zod + React Hook Form** on **sign-in, sign-up, forgot password, and billing** (`billingAddressSchema.js`, `signInSchema.js`) shows **schema-first validation** instead of ad-hoc string checks everywhere.
- **Search debouncing** in `InputElement.jsx` via **`useDebounceInput`** (600ms) avoids hammering derived filtering in `SearchProducts` / `SearchBlogs`.
- **Lazy route loading** in `routes.jsx` keeps **initial bundles smaller** for rarely visited pages (checkout, auth, legal).
- **`useShallow`** from Zustand appears across header, shop, and product components to **limit re-renders** when selecting multiple store fields.

### ⚠️ What could be improved

- **`@stripe/*` packages are unused in code paths** while checkout copy claims a manual learning implementation—either **wire Stripe Elements** or **remove the deps** to avoid confusion.
- **`LatestTrends.jsx` imports `duration` from `@mui/material` but never uses it**, which is **dead code** and pulls MUI into a newsletter strip that otherwise uses only Tailwind.
- **`PaymentMethodDetails` registers RHF fields** but **Stripe mode still surfaces a learning-only toast** on pay, so the **form and UX promise do not match** a real payment flow.
- **Duplicate casing directories** (`Checkout` vs `checkout`) risk **broken builds on Linux** if both exist; **normalize to one case** and run CI on Ubuntu.
- **Some large components** (e.g. shop grid + filtering) mix **sorting, filtering, and presentation**; **extracting hooks** (e.g. `useShopProducts`) would shrink files and clarify tests later.
- **`CouponCode`** is **purely cosmetic** (always invalid toast)—fine for a demo, but naming or copy could **signal “demo only”** more clearly.

### ❌ What is absent (intentionally, for the next project)

- **TypeScript** — the codebase is **JavaScript (`.jsx` / `.js`) only**; the next project should start with **strict TS** end-to-end.
- **Real backend** — **no REST/GraphQL server**; products, blogs, and users are **static or client-fabricated**.
- **Automated tests** — **no Vitest/Jest/Cypress/Playwright** files or `test` script; **zero test coverage**.
- **Error boundaries** — **no `react-error-boundary` or class error boundary** around routes or features.
- **Real authentication** — **no sessions, JWT, or OAuth**; buttons toast instead of exchanging tokens.
- **CI/CD in repo** — **no GitHub Actions** workflow; deployment relies on **manual/Vercel project settings**.
- **Accessibility audit** — while some inputs set **`role` / `aria-*`**, there is **no systematic a11y test pipeline**.
- **i18n / SEO** — **single locale**, minimal meta strategy beyond a typical SPA shell.

---

## 🎓 What I learned

1. I learned how to **split a growing React app into feature folders** so cart, search, and checkout imports do not sprawl across unrelated directories.
2. I learned to **persist Zustand slices** for cart, wishlist, and filters so refreshes **do not wipe user intent** during demos.
3. I learned to **debounce search input** (`useDebounceInput` + `useEffect` syncing to `useSearchInputStore`) so filtering static arrays stays smooth.
4. I learned to **compose Zod schemas** for **sign-in password rules** and **billing fields**, then wire them through **`zodResolver`** instead of duplicating validation in JSX.
5. I learned **React Router’s lazy `import()` pattern** to **code-split** heavy routes like checkout and product detail.
6. I learned how **React context** (`ToastProvider`) can provide **global feedback** without prop drilling through the layout tree.
7. I learned that **installing Stripe packages** without integrating them teaches me to **keep dependencies aligned with actual code paths**.
8. I learned to **deploy a Vite SPA to Vercel** and verify **production builds** (`npm run build`) before shipping UI changes.

---

## 🗺️ Roadmap (what comes next)

| Track | Focus | Status |
|-------|--------|--------|
| TypeScript | Strict typing for components, stores, and API clients | ⬜ Next |
| Git / GitHub | Conventional commits, issues, PR templates, protected `main` | ⬜ |
| Backend | Real auth + cart APIs (Node or serverless) | ⬜ |
| Database | Persistent catalog, users, orders | ⬜ |
| System design | Caching, rate limits, idempotent checkout | ⬜ |
| Next.js | SSR/SSG for SEO-heavy pages | ⬜ |
| DevOps | GitHub Actions (lint + build), preview deploys, monitoring | ⬜ |

---

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:3b82f6,100:1e3a5f&height=140&section=footer&text=Built%20with%20focus%20and%20consistency%20by%20Hanzla%20%E2%80%94%20Pakistan%20%F0%9F%87%B5%F0%9F%87%B8&fontSize=18&fontAlign=50&fontColor=ffffff" alt="Footer" />
</p>
