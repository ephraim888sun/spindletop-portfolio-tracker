"use client";
import { FC } from "react";

import { ErrorBoundaryProvider } from "./error-boundary-provider";

type AppProvidersProps = {
  children: React.ReactNode;
};

export const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  return (
    <ErrorBoundaryProvider>
          {children}
    </ErrorBoundaryProvider>
  );
};
