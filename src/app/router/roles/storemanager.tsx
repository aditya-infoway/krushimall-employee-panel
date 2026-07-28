import { Navigate } from "react-router";

// Dashboard
import Dashboard from "@/app/pages/storemanger/dashboards/dashboard";
import Inventory from "@/app/pages/storemanger/dashboards/inventory";
import Accessories from "@/app/pages/storemanger/item/accessories";
import Tractor from "@/app/pages/storemanger/purchase/tractor";
import Accessoriespurchase from "@/app/pages/storemanger/purchase/accessories";
import PurchaseBill from "@/app/pages/storemanger/purchase/purchasebill";
import PurchaseItemList from "@/app/pages/storemanger/purchase/purchaseitemlist";
import AccessoriesItemList from "@/app/pages/storemanger/purchase/accessoriesitemlist";
import PurAccessories from "@/app/pages/storemanger/purchase/puraccessories";
// Lead Master
// import LeadBuilder from "@/app/pages/salesexecutive/leadmaster/leadbuilder";
// import Followup from "@/app/pages/salesexecutive/leadmaster/followup";
// import Order from "@/app/pages/salesexecutive/leadmaster/order";
// import QuotationEdit from "@/app/pages/salesexecutive/leadmaster/quotationEdit";
// import Quatationhistory from "@/app/pages/salesexecutive/leadmaster/Quatationhistory";
// import QuotationHistoryDetails from "@/app/pages/salesexecutive/leadmaster/QuotationHistoryDetails";

// // Goods Control
// import TractorInventory from "@/app/pages/salesexecutive/goodscontrol/tractorinventory";
import AccessoriesInventory from "@/app/pages/storemanger/goodscontrol/accessoriesinventory";
import AccessoriesHistory from "@/app/pages/storemanger/goodscontrol/accessorieshistory";
import AccessoriesAllot from "@/app/pages/storemanger/allot/accessoriesAllot";
import AccessoriesAllotDetail from "@/app/pages/storemanger/allot/accessoriesallotdetails";

// // Booking Balance

// import BookingBalance from "@/app/pages/salesexecutive/bookingbalance/bookingbalance";
// import TestdriveHistory from "@/app/pages/salesexecutive/leadmaster/textdrivehistory";
// import TestDriveHistoryDetails from "@/app/pages/salesexecutive/leadmaster/textdrivehistoryDetails";
// // User Master
// import Account from "@/app/pages/salesexecutive/usermaster/account";
// import Employee from "@/app/pages/salesexecutive/usermaster/employee";
// import Broker from "@/app/pages/salesexecutive/usermaster/broker";
// import NewAccount from "@/app/pages/salesexecutive/usermaster/newaccount";

// // Stock Transfer
// import VehicleStock from "@/app/pages/salesexecutive/stocktransfer/vehiclestock";
// import FollowupHistory from "@/app/pages/salesexecutive/leadmaster/followuphistory";
// // Settings
import SettingsLayout from "@/app/pages/storemanger/settings/Layout";
import General from "@/app/pages/storemanger/settings/sections/General";
import Appearance from "@/app/pages/storemanger/settings/sections/Appearance";
export const storemanagerRoutes = [
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
{
  path: "item",
  children: [
    {
      path: "accessories",
      Component: Accessories,
    },
  ],
},
{
  path: "purchase",
  children: [
    {
      path: "tractor",
      children: [
        {
          index: true,
          Component: Tractor,
        },
        {
          path: "add",
          Component: PurchaseBill,
        },
        {
          path: ":id",
          Component: PurchaseBill,
        },
        {
          path: "inward/:id",
          Component: PurchaseItemList,
        },
      ],
    },

    {
      path: "accessories",
      children: [
        {
          index: true,
          Component: Accessoriespurchase,
        },
        {
          path: "add",
          Component: PurAccessories,
        },
        {
          path: "add/:id",
          Component: PurAccessories,
        },
      ],
    },

    {
      path: "accessories-inward/:id",
      Component: AccessoriesItemList,
    },
  ],
},
{
  path: "goodscontrol",
  children: [
    {
      path: "accessoriesinventory",
      children: [
        {
          index: true,
          Component: AccessoriesInventory,
        },
        {
          path: "history/:id",
          Component: AccessoriesHistory,
        },
      ],
    },
  ],
},
{
  path: "allot",
  children: [
    {
      path: "accessoriesAllot",
      Component: AccessoriesAllot,
    },
    {
      path: "accessories-allot/:id",
      Component: AccessoriesAllotDetail,
    },
  ],
},
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

  // Lead Master
// {
//   path: "leadmaster",
//   children: [
//     {
//       path: "leadbuilder",
//       Component: LeadBuilder,
//     },
//     {
//       path: "followup/:id",
//       Component: Followup,
//     },
//      {
//       path: "followuphistory/:id",
//       Component: FollowupHistory,
//     },
//     {
//       path: "order/:id",
//       Component: Order,
//     },
//     {
//       path: "quotation/edit/:id",
//       Component: QuotationEdit,
//     },
//     {
//       path: "Quatationhistory",
//       Component: Quatationhistory,
//     },
//     {
//       path: "quotationhistory/:id",
//       Component: QuotationHistoryDetails,
//     },
//      {
//       path: "textdrivehistory",
//       Component: TestdriveHistory,
//     },
//     {
//       path: "testdrivehistory/:id",
//       Component: TestDriveHistoryDetails,
//     },
//   ],
// },
//   // Goods Control
// {
//   path: "goodscontrol",
//   children: [
//     {
//       path: "tractorinventory",
//       Component: TractorInventory,
//     },
//     {
//       path: "accessoriesinventory",
//       Component: AccessoriesInventory,
//     },
//   ],
// },
//   // Booking Balance
// {
//   path: "bookingbalance",
//   children: [
//     {
//       path: "bookingbalance",
//       Component: BookingBalance,
//     },
//   ],
// },

//   // User Master
//  {
//   path: "usermaster",
//   children: [
//     {
//       path: "account",
//       Component: Account,
//     },
//     {
//       path: "employee",
//       Component: Employee,
//     },
//     {
//       path: "broker",
//       Component: Broker,
//     },
//     {
//       path: "newaccount",
//       Component: NewAccount,
//     },
//      {
//       path: "newaccount/:id",
//       Component: NewAccount,
//     },
//   ],
// },

//   // Stock Transfer
// {
//   path: "stocktransfer",
//   children: [
//     {
//       path: "vehiclestock",
//       Component: VehicleStock,
//     },
//   ],
// },

  // Settings

];