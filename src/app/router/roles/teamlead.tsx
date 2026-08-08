import { Navigate } from "react-router";

// Dashboard
import Dashboard from "@/app/pages/teamlead/dashboards/dashboard";
import Inventory from "@/app/pages/teamlead/dashboards/inventory";

// Lead Master
import LeadBuilder from "@/app/pages/teamlead/leadmaster/leadbuilder";
import Followup from "@/app/pages/teamlead/leadmaster/followup";
import Order from "@/app/pages/teamlead/leadmaster/order";
import QuotationEdit from "@/app/pages/teamlead/leadmaster/quotationEdit";
import Quatationhistory from "@/app/pages/teamlead/leadmaster/Quatationhistory";
import QuotationHistoryDetails from "@/app/pages/teamlead/leadmaster/QuotationHistoryDetails";

// Goods Control
import TractorInventory from "@/app/pages/teamlead/goodscontrol/tractorinventory";
import AccessoriesInventory from "@/app/pages/teamlead/goodscontrol/accessoriesinventory";

// Booking Balance
import BookingBalance from "@/app/pages/teamlead/bookingbalance/bookingbalance";
import TestdriveHistory from "@/app/pages/teamlead/leadmaster/textdrivehistory";
import TestDriveHistoryDetails from "@/app/pages/teamlead/leadmaster/textdrivehistoryDetails";
// User Master
import Account from "@/app/pages/teamlead/usermaster/account";
import Employee from "@/app/pages/teamlead/usermaster/employee";
import Broker from "@/app/pages/teamlead/usermaster/broker";
import NewAccount from "@/app/pages/teamlead/usermaster/newaccount";

// Stock Transfer
import VehicleStock from "@/app/pages/teamlead/stocktransfer/vehiclestock";
import FollowupHistory from "@/app/pages/teamlead/leadmaster/followuphistory";
// Settings
import SettingsLayout from "@/app/pages/teamlead/settings/Layout";
import General from "@/app/pages/teamlead/settings/sections/General";
import Appearance from "@/app/pages/teamlead/settings/sections/Appearance";
import AccessoriesHistory from "@/app/pages/teamlead/goodscontrol/accessorieshistory";
export const teamLeadRoutes = [
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
      path: "followuphistory/:id",
      Component: FollowupHistory,
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
     {
      path: "textdrivehistory",
      Component: TestdriveHistory,
    },
    {
      path: "testdrivehistory/:id",
      Component: TestDriveHistoryDetails,
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
    {
      path: "history/:id",
      Component: AccessoriesHistory,
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