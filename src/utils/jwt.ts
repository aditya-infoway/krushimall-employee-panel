import { Capacitor } from "@capacitor/core";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "./axios";

const storage = Capacitor.isNativePlatform()
  ? localStorage
  : sessionStorage;

export const EMPLOYEE_TOKEN_KEY = "employeeAuthToken";

export const EMPLOYEE_LOGIN_PATH =
  Capacitor.isNativePlatform()
    ? "/login"
    : "/krushimall-employee/login";

const isTokenValid = (
  authToken: string,
): boolean => {
  try {
    const decoded: { exp?: number } =
      jwtDecode(authToken);

    if (!decoded.exp) {
      console.error(
        "Token does not contain an expiration time.",
      );

      return false;
    }

    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  } catch (err) {
    console.error(
      "Failed to decode token:",
      err,
    );

    return false;
  }
};

const setSession = (
  authToken?: string | null,
): void => {
  if (
    typeof authToken === "string" &&
    authToken.trim() !== ""
  ) {
    storage.setItem(
      EMPLOYEE_TOKEN_KEY,
      authToken,
    );

    axiosInstance.defaults.headers.common.Authorization =
      `Bearer ${authToken}`;
  } else {
    storage.removeItem(
      EMPLOYEE_TOKEN_KEY,
    );

    delete axiosInstance.defaults.headers
      .common.Authorization;
  }
};

// Check token before request
axiosInstance.interceptors.request.use(
  (config) => {
    const authToken =
      storage.getItem(EMPLOYEE_TOKEN_KEY);

    if (
      authToken &&
      !isTokenValid(authToken)
    ) {
      storage.removeItem(
        EMPLOYEE_TOKEN_KEY,
      );

      delete axiosInstance.defaults.headers
        .common.Authorization;

      window.location.href =
        EMPLOYEE_LOGIN_PATH;

      return Promise.reject(
        new Error("Session expired"),
      );
    }

    if (authToken) {
      config.headers.Authorization =
        `Bearer ${authToken}`;
    }

    return config;
  },
);

export {
  isTokenValid,
  setSession,
  storage,
};