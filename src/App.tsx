import { QueryClientProvider } from "@tanstack/react-query";
import moment from "moment";
import "moment/dist/locale/pt-br";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";
import "./global.css";
import { queryClient } from "./lib/react-query";
import { router } from "./routes";

export function App() {
  moment.locale("pt-br");

  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop" />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
        <Toaster richColors />
      </ThemeProvider>
    </HelmetProvider>
  );
}
