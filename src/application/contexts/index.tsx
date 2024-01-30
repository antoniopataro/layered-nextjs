"use client";

import React, { PropsWithChildren } from "react";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const providers: React.FC<PropsWithChildren>[] = [] as const;

export const ContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {providers.reverse().reduce((prev, Provider) => {
          return <Provider>{prev}</Provider>;
        }, children)}
      </QueryClientProvider>
    </>
  );
};
