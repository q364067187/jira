import { ReactNode } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { DevTools } from "jira-dev-tool";
import { AuthProvider } from "./auth";
import Register from "pages/account/register";

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DevTools />
        <Router>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<div>{children}</div>} />
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
};
