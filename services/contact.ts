import axios from "axios";
import type { ContactFormData } from "@/types";

const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export interface ContactResponse {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<ContactResponse> {
  const response = await api.post<ContactResponse>("/contact", data);
  return response.data;
}
