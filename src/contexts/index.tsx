import { ReactNode } from "react";
import { AuthProvider } from "./auth";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
