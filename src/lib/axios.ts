import { env } from '@/env';
import axios from 'axios';

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
});

// Adicione um atraso a todas as solicitações se a variável de ambiente estiver habilitada
if(env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });

    return config
  });
}