"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "../utils/queryClient"; // Adjust the path as necessary

export default function Providers({ children }: { children: React.ReactNode }) {
  //const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
     {/*  <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}
