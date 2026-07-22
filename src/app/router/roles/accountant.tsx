// router/roles/accountant.tsx
import { Navigate } from "react-router";

// Dashboard
import Dashboard from "@/app/pages/accountant/dashboards/dashboard";
import Inventory from "@/app/pages/accountant/dashboards/inventory";

// Accounting
import BankPayment from "@/app/pages/accountant/accounting/bankpayment";
import BankReceipt from "@/app/pages/accountant/accounting/bankreceipt";
import CashPayment from "@/app/pages/accountant/accounting/cashpayment";
import CashReceipt from "@/app/pages/accountant/accounting/cashreceipt";
import Contra from "@/app/pages/accountant/accounting/contra";
import JournalEntries from "@/app/pages/accountant/accounting/journalentries";
import CreditNote from "@/app/pages/accountant/accounting/creditnote";
import DebitNote from "@/app/pages/accountant/accounting/debitnote";

// Purchase
import Tractor from "@/app/pages/accountant/purchase/tractor";
import Accessories from "@/app/pages/accountant/purchase/accessories";
import PurchaseBill from "@/app/pages/accountant/purchase/purchasebill";
import PurchaseItemList from "@/app/pages/accountant/purchase/purchaseitemlist";
import AccessoriesItemList from "@/app/pages/accountant/purchase/accessoriesitemlist";
import PurAccessories from "@/app/pages/accountant/purchase/puraccessories";

// Booking Balance
import BookingBalance from "@/app/pages/accountant/bookingbalance/bookingbalance";

// User Master
import Account from "@/app/pages/accountant/usermaster/account";
import Employee from "@/app/pages/accountant/usermaster/employee";
import Broker from "@/app/pages/accountant/usermaster/broker";
import NewAccount from "@/app/pages/accountant/usermaster/newaccount";

// Settings
import SettingsLayout from "@/app/pages/accountant/settings/Layout";
import General from "@/app/pages/accountant/settings/sections/General";
import Appearance from "@/app/pages/accountant/settings/sections/Appearance";
import CashBook from "@/app/pages/accountant/cash-bank/cashbook";
import BankBook from "@/app/pages/accountant/cash-bank/bankbook";
export const accountantRoutes = [
  // Dashboard
  {
    path: "dashboards",
    children: [
      { index: true, element: <Navigate to="dashboard" replace /> },
      { path: "dashboard", Component: Dashboard },
      { path: "inventory", Component: Inventory },
    ],
  },

  // Accounting
  {
    path: "accounting",
    children: [
      {
        path: "bank-payment",
        Component: BankPayment,
      },
      {
        path: "bank-receipt",
        Component: BankReceipt,
      },
      {
        path: "cash-payment",
        Component: CashPayment,
      },
      {
        path: "cash-receipt",
        Component: CashReceipt,
      },
      {
        path: "journal-entries",
        Component: JournalEntries,
      },
      {
        path: "credit-note",
        Component: CreditNote,
      },
      {
        path: "debit-note",
        Component: DebitNote,
      },
      {
        path: "contra",
        Component: Contra,
      },
    ],
  },
// Cash / Bank Register
{
  path: "bookregister",
  children: [
    {
      path: "cashbook",
      Component: CashBook,
    },
    {
      path: "bankbook",
      Component: BankBook,
    },
  ],
},
  // Purchase
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
          Component: Accessories,
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

  // Settings
  {
    path: "settings",
    Component: SettingsLayout,
    children: [
      { index: true, element: <Navigate to="general" replace /> },
      { path: "general", Component: General },
      { path: "appearance", Component: Appearance },
    ],
  },
];
