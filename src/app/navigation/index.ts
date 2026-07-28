// useNavigation.ts
import { useAuthContext } from "@/app/contexts/auth/context";
import { salesExecutiveNavigation } from "./segments/salesexecutive";
import { accountantNavigation } from "./segments/accountant";
import { storemanagerNavigation } from "./segments/storemanger";
export function useNavigation() {
  const { user } = useAuthContext();

  const role = user?.role?.replace(/\s+/g, "").toUpperCase();

  switch (role) {
    case "SALESEXECUTIVE":
      return salesExecutiveNavigation;

    case "ACCOUNTANT":
      return accountantNavigation;
    case "STOREMANAGER":
      return storemanagerNavigation;

    default:
      return [];
  }
}
