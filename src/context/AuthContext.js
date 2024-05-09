import React, { createContext, useContext, useState, useEffect } from "react";

// AuthContext 생성
const AuthContext = createContext();

// AuthProvider 컴포넌트 정의
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // 로그인 시 사용자 정보를 로컬 스토리지에 저장하는 함수
  const login = (userCredentials) => {
    setCurrentUser(userCredentials); // 상태 업데이트
    console.log(userCredentials);
    localStorage.setItem("currentUser", JSON.stringify(userCredentials)); // 로컬 스토리지에 저장
  };

  // 로그아웃 시 로컬 스토리지에서 사용자 정보를 삭제하는 함수
  const logout = () => {
    setCurrentUser(null); // 상태 업데이트
    localStorage.removeItem("currentUser"); // 로컬 스토리지에서 삭제
  };

  useEffect(() => {
    // 애플리케이션 시작 시 로컬 스토리지에서 사용자 정보를 로드
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  // 값을 객체로 제공, login과 logout 함수도 포함시킴
  const value = {
    currentUser,
    setCurrentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// useAuth 커스텀 훅
export function useAuth() {
  return useContext(AuthContext);
}
