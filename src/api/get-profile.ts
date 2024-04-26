import { api } from "@/lib/axios";

interface GetProfile {
  name: string;
  id: string;
  email: string;
  phone: string | null;
  role: "manager" | "customer";
  createdAt: Date | null;
  updatedAt: Date | null;
}

export async function  getProfile() {
  // throw new Error("Simulated error");
  
  const response = await api.get<GetProfile>("/me");

  return response.data;
}
