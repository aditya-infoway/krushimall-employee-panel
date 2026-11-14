import { useEffect, useRef } from "react";
import { setSession, storage } from "@/utils/jwt";
import { redirectToAdminLogin } from "@/utils/redirectToAdminLogin";

// Router ka basename same hona chahiye: "krushimall-employee" (capacitor me "/")
const BASE =
  import.meta.env.MODE === "capacitor" ? "" : "/krushimall-employee";

export default function AuthCallback() {
  // StrictMode me effect 2 baar chalta hai; doosri baar hash khali hota hai
  const handled = useRef(false);

  useEffect(() => {
    if (handled.current) return;
    handled.current = true;

    const params = new URLSearchParams(window.location.hash.replace(/^#/, ""));
    const token = params.get("token");
    const userRaw = params.get("user");

    // Token ko URL/history se turant hata do
    window.history.replaceState(null, "", window.location.pathname);

    if (!token) {
      redirectToAdminLogin();
      return;
    }

    try {
      // Employee AuthProvider ki same key (EMPLOYEE_TOKEN_KEY) me save hoga
      setSession(token);

      // Employee AuthProvider "authUser" key padhta hai
      if (userRaw && userRaw !== "null") {
        storage.setItem("authUser", userRaw);
      }

      // Full reload, taaki AuthProvider init me naya token utha le
      window.location.replace(`${BASE}/select-company`);
    } catch (err) {
      console.error(err);
      redirectToAdminLogin();
    }
  }, []);

  return (
    <div className="flex h-screen items-center justify-center text-gray-500">
      Signing you in...
    </div>
  );
}