import axios from "axios";
import { storage } from "./jwt";

const EMPLOYEE_TOKEN_KEY = "employeeAuthToken";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
  },
});

// Automatically attach Employee token
api.interceptors.request.use((config) => {
  const token = storage.getItem(EMPLOYEE_TOKEN_KEY);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// API URL without /api
export const getBaseUrl = () => {
  const apiUrl =
    import.meta.env.VITE_API_URL ||
    // "http://31.97.237.210/krushimall-api/api";
"http://localhost:5001/api";
  return apiUrl.replace(/\/api\/?$/, "");
};

const apiHelper = {
  getImageUrl: (
    imagePath: string | null | undefined,
  ): string => {
    if (!imagePath) return "";

    // Full URL / base64
    if (
      imagePath.startsWith("http") ||
      imagePath.startsWith("data:")
    ) {
      return imagePath;
    }

    // /uploads/file.jpg
    if (imagePath.startsWith("/")) {
      return `${getBaseUrl()}${imagePath}`;
    }

    // filename only
    return `${getBaseUrl()}/uploads/${imagePath}`;
  },

  get: async (
    url: string,
    params?: Record<string, any>,
  ) => {
    const response = await api.get(url, { params });
    return response.data;
  },

  getBlob: async (
    url: string,
    params?: Record<string, any>,
  ) => {
    const response = await api.get(url, {
      params,
      responseType: "blob",
    });

    return response.data;
  },

  post: async (
    url: string,
    data: Record<string, any>,
  ) => {
    const response = await api.post(url, data);
    return response.data;
  },

  put: async (
    url: string,
    data: any,
    config?: any,
  ) => {
    const response = await api.put(
      url,
      data,
      config,
    );

    return response.data;
  },

  patch: async (
    url: string,
    data?: Record<string, any>,
  ) => {
    const response = await api.patch(url, data);
    return response.data;
  },

  delete: async (url: string) => {
    const response = await api.delete(url);
    return response.data;
  },

  upload: async (
    url: string,
    formData: FormData,
  ) => {
    const response = await api.post(
      url,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return response.data;
  },
};

export default apiHelper;