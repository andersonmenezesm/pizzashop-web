import { api } from "@/lib/axios";

interface GetRestaurant {
  name: string;
  description: string | null;
  id: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  managerId: string | null;
}

export async function  getManagedRestaurant() {
  const response = await api.get<GetRestaurant>("/managed-restaurant");

  return response.data;
}
