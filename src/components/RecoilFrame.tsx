"use client";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

function RecoilFrame({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>{children}</RecoilRoot>
    </QueryClientProvider>
  );
}

export default RecoilFrame;
