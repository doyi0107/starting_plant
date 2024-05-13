import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const userObject = JSON.parse(storedUser);
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const value = {
    currentUser,
    setCurrentUser,

  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export function useAuth() {
  return useContext(AuthContext);
}
