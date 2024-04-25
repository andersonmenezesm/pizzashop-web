import { api } from "@/lib/axios";

export interface GetManagedRestaurant {
  name: string;
  description: string | null;
  id: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  managerId: string | null;
}

export async function  getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurant>("/managed-restaurant");

  return response.data;
}
