"use client";
import { createContext, useState } from "react";

export const AuthContext = createContext<any>({});

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [arr, setArr] = useState<any>([]);

  return (
    <AuthContext.Provider value={{arr, setArr}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
