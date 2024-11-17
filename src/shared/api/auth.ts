import axios from "@/shared/api/axios";
import { Credentials } from "../types/auth";

export const login = async (credentials: Credentials) => {
    const { data } = await axios.post("/auth/login", credentials);
    return data;
  };
  
  export const getMe = async () => {
    const { data } = await axios.get("/auth/me");
    return data;
  };