import { Navigate } from "react-router";

// Dashboard
import Dashboard from "@/app/pages/salesexecutive/dashboards/dashboard";
import Inventory from "@/app/pages/salesexecutive/dashboards/inventory";

// Lead Master
import LeadBuilder from "@/app/pages/salesexecutive/leadmaster/leadbuilder";
import Followup from "@/app/pages/salesexecutive/leadmaster/followup";
import Order from "@/app/pages/salesexecutive/leadmaster/order";
import QuotationEdit from "@/app/pages/salesexecutive/leadmaster/quotationEdit";
import Quatationhistory from "@/app/pages/salesexecutive/leadmaster/Quatationhistory";
import QuotationHistoryDetails from "@/app/pages/salesexecutive/leadmaster/QuotationHistoryDetails";

// Goods Control
import TractorInventory from "@/app/pages/salesexecutive/goodscontrol/tractorinventory";
import AccessoriesInventory from "@/app/pages/salesexecutive/goodscontrol/accessoriesinventory";

// Booking Balance
import BookingBalance from "@/app/pages/salesexecutive/bookingbalance/bookingbalance";

// User Master
import Account from "@/app/pages/salesexecutive/usermaster/account";
import Employee from "@/app/pages/salesexecutive/usermaster/employee";
import Broker from "@/app/pages/salesexecutive/usermaster/broker";
import NewAccount from "@/app/pages/salesexecutive/usermaster/newaccount";

// Stock Transfer
import VehicleStock from "@/app/pages/salesexecutive/stocktransfer/vehiclestock";

// Settings
import SettingsLayout from "@/app/pages/salesexecutive/settings/Layout";
import General from "@/app/pages/salesexecutive/settings/sections/General";
import Appearance from "@/app/pages/salesexecutive/settings/sections/Appearance";
export const salesExecutiveRoutes = [
  // Dashboard
  {
  path: "dashboards",
  children: [
    {
      index: true,
      element: <Navigate to="dashboard" replace />,
    },
    {
      path: "dashboard",
      Component: Dashboard,
    },
    {
      path: "inventory",
      Component: Inventory,
    },
  ],
},

  // Lead Master
{
  path: "leadmaster",
  children: [
    {
      path: "leadbuilder",
      Component: LeadBuilder,
    },
    {
      path: "followup/:id",
      Component: Followup,
    },
    {
      path: "order/:id",
      Component: Order,
    },
    {
      path: "quotation/edit/:id",
      Component: QuotationEdit,
    },
    {
      path: "Quatationhistory",
      Component: Quatationhistory,
    },
    {
      path: "quotationhistory/:id",
      Component: QuotationHistoryDetails,
    },
  ],
},
  // Goods Control
{
  path: "goodscontrol",
  children: [
    {
      path: "tractorinventory",
      Component: TractorInventory,
    },
    {
      path: "accessoriesinventory",
      Component: AccessoriesInventory,
    },
  ],
},
  // Booking Balance
{
  path: "bookingbalance",
  children: [
    {
      path: "bookingbalance",
      Component: BookingBalance,
    },
  ],
},

  // User Master
 {
  path: "usermaster",
  children: [
    {
      path: "account",
      Component: Account,
    },
    {
      path: "employee",
      Component: Employee,
    },
    {
      path: "broker",
      Component: Broker,
    },
    {
      path: "newaccount",
      Component: NewAccount,
    },
     {
      path: "newaccount/:id",
      Component: NewAccount,
    },
  ],
},

  // Stock Transfer
{
  path: "stocktransfer",
  children: [
    {
      path: "vehiclestock",
      Component: VehicleStock,
    },
  ],
},

  // Settings
{
  path: "settings",
  Component: SettingsLayout,
  children: [
    {
      index: true,
      element: <Navigate to="general" replace />,
    },
    {
      path: "general",
      Component: General,
    },
    {
      path: "appearance",
      Component: Appearance,
    },
  ],
},
];