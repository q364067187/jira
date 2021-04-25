import React, { ReactNode, useState } from "react";

import * as auth from "auth-provider";

interface AuthForm {
  username: string;
  password: string;
}

const AuthContext = React.createContext(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      children={children}
      value={(user, login, register, loginout)}
    />
  );
};
