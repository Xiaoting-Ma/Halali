import { createBrowserRouter, Navigate } from "react-router";
import { HomePage } from "@/app/components/HomePage";
import { MerchantsPage } from "@/app/components/MerchantsPage";
import { SubmittedSuccessPage } from "@/app/components/SubmittedSuccessPage";
import { RidersPage } from "@/app/components/RidersPage";
import { BusinessPage } from "@/app/components/BusinessPage";
import { AboutPage } from "@/app/components/AboutPage";
import { CareersPage } from "@/app/components/CareersPage";
import { ContactPage } from "@/app/components/ContactPage";
import { PrivacyPolicyPage } from "@/app/components/PrivacyPolicyPage";
import { RootLayout } from "@/app/components/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/en/home" replace />,
  },
  {
    path: "/:lang",
    element: <RootLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "merchants",
        element: <MerchantsPage />,
      },
      {
        path: "merchant-success",
        element: <SubmittedSuccessPage />,
      },
      {
        path: "riders",
        element: <RidersPage />,
      },
      {
        path: "rider-success",
        element: <SubmittedSuccessPage />,
      },
      {
        path: "business",
        element: <BusinessPage />,
      },
      {
        path: "careers",
        element: <CareersPage />,
      },
      {
        path: "career-success",
        element: <SubmittedSuccessPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/en/home" replace />,
  },
]);
