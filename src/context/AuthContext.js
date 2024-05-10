import React, { createContext, useContext, useState, useEffect } from "react";

// AuthContext 생성
const AuthContext = createContext();

// AuthProvider 컴포넌트 정의
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // 애플리케이션 시작 시 로컬 스토리지에서 사용자 정보를 로드
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const userObject = JSON.parse(storedUser);
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  // 값을 객체로 제공, login과 logout 함수도 포함시킴
  const value = {
    currentUser,
    setCurrentUser,

  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// useAuth 커스텀 훅
export function useAuth() {
  return useContext(AuthContext);
}
