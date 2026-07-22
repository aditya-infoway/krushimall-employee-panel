// protected.tsx
import type { RouteObject } from "react-router";

import AuthGuard from "../../middleware/AuthGuard";
import { DynamicLayout } from "@/app/layouts/DynamicLayout";
import RoleRoutes from "./RoleRoutes";

const protectedRoutes: RouteObject = {
  id: "protected",
  Component: AuthGuard,
  children: [
    {
      path: "select-company",
      lazy: async () => ({
        Component: (await import("@/app/pages/Auth/Selectecompany")).default,
      }),
    },
    {
      Component: DynamicLayout,
      children: [
        {
          path: "*",
          Component: RoleRoutes,
        },
      ],
    },
  ],
};

export { protectedRoutes };