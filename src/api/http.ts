import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { getToken } from "../store/authStore";

const BASE_URL =
  "http://CleanUp-env-2.eba-div83prf.ap-northeast-2.elasticbeanstalk.com:5000";

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: "application/json",
    },
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getToken();

      // token이 null일 수 있으므로 null 체크를 추가합니다.
      if (token) {
        try {
          config.headers.authorization = `Bearer ${token}`;
          config.headers["Content-Type"] = 'application/json';
          console.log(config.headers)
        } catch (e) {
          console.error("Failed to parse token:", e);
        }
      }

      return config;
    },
    (error: AxiosError) => {
      console.log("Request error", error);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/";
        console.log("서버 응답 경우", error.message);
      } else if (error.request) {
        console.log("Network error: No response received", error.request);
      } else {
        console.log("다른 에러", error.message);
      }
      console.log("error config", error.config);
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();
