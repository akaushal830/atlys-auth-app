import React, { createContext, useContext, useState } from "react";

type AuthContextType = {
  user: string | null;
  signIn: (username: string) => void;
  signUp: (username: string) => void;
  signOut: () => void;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const signIn = (username: string) => setUser(username);
  const signUp = (username: string) => setUser(username);
  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
