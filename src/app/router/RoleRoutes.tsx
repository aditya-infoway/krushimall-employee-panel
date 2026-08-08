import {  useRoutes } from "react-router";
import { useAuthContext } from "@/app/contexts/auth/context";
import { salesExecutiveRoutes } from "./roles/salesexecutive";
import { accountantRoutes } from "./roles/accountant";
import { storemanagerRoutes } from "./roles/storemanager";
import { teamLeadRoutes } from "./roles/teamlead";
export default function RoleRoutes() {
  const { user } = useAuthContext();


  const role = user?.role?.replace(/\s+/g, "").toUpperCase();

  const roleRoutes =
    role === "SALESEXECUTIVE"
      ? salesExecutiveRoutes
      : role === "ACCOUNTANT"
      ? accountantRoutes
        : role === "STOREMANAGER"
      ? storemanagerRoutes
       : role === "TEAMLEAD"
      ? teamLeadRoutes
      : [];

 
  const element = useRoutes(roleRoutes);

 

  return element;
}