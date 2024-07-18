import { getToken } from "../store/authStore";
import { httpClient } from "./http";

export const fetchUser = async () => {
  try {
    console.log("Sending request to /user");
    console.log("Token being sent: ", getToken());
    const response = await httpClient.get("/user");
    console.log("response after: ", response);
    console.log("Token after response: ", getToken());
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    console.log("Error fetching user data, token: ", getToken());
    throw error;
  }
};
