import axios from "axios";
import { toast } from 'react-toastify';

export const MakeApiRequest = async (
  method,
  endpoint,
  body = null,
  params = null,
  token = true,
  formData = false
) => {
  try {
    const URL = "http://localhost:5000/";

    const config = {
      method: method,
      url: endpoint,
      baseURL: URL,
      params: params,
    };

    if (method !== "GET" && body) {
      config.data = body;
    }

    config.headers = {};

    if (!formData) {
      config.headers["Content-Type"] = "application/json";
    } else {
      config.headers["Content-Type"] = "multipart/form-data";
    }

    if (token) {
      const authToken = localStorage.getItem("@token");
      if (authToken) {
        config.headers["Authorization"] = `Bearer ${authToken}`;
      }
    }

    const response = await axios(config);
    return response;
  } catch (error) {
    toast.error(error.response.data.message, {
      position: "top-right",
    });
    return error.response.data;
  }
};
