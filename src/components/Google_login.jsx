import React, { useState, useEffect } from "react"; // useState를 추가로 import합니다.
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import "../styles/Google_login.css";
import { Link, useNavigate } from "react-router-dom"; // useNavigate 추가
import { useAuth } from "../context/AuthContext";

const GoogleLoginButton = () => {
  // 컴포넌트 내부
  const { setCurrentUser } = useAuth();
  const navigate = useNavigate(); // useNavigate 훅 사용

  const signIn = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("tokenResponse", tokenResponse);
      // fetching userinfo can be done on the client or the server
      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then((res) => res.data);

      // 로그인 성공 후 사용자 정보 얻기
      // 예시로 Google 로그인 API 사용을 가정합니다.
      const mypage_userInfo = {
        name: userInfo.name,
        email: userInfo.email,
        nickname: userInfo.given_name,
        picture: userInfo.picture,
        // 추가적으로 필요한 사용자 정보
      };
      // 로컬 스토리지 및 AuthContext에 사용자 정보 저장
      localStorage.setItem("currentUser", JSON.stringify(mypage_userInfo));

      setCurrentUser(mypage_userInfo);
      console.log(userInfo);
    },
    // flow: 'implicit', // implicit is the default
  });

  // 로그아웃 버튼 클릭 이벤트 핸들러
  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  // 현재 사용자 이름을 가져오는 로직
  const userName =
    JSON.parse(localStorage.getItem("currentUser"))?.picture || "";

  return (
    <div>
      {userName ? (
        // 사용자 이름이 설정된 경우 이름을 표시합니다.
        <div className="google_login_after_wrap">
          <Link to="/Mypage" className="google_login_after_mypage_link">
            <p className="google_login_after_mypage">마이페이지</p>
          </Link>
          <span>|</span>
          <p className="google_logout" onClick={handleLogout}>
            로그아웃
          </p>
          <span>|</span>
          <img src={userName} className="google_login_after_name"></img>
        </div>
      ) : (
        // 사용자 이름이 설정되지 않은 경우 로그인 이미지를 표시합니다.
        <div className="googlg_login_before_wrap" onClick={() => signIn()}>
          <p className="googlg_login_text">로그인</p>
          <img
            src="assets/header/login_logo.png"
            alt="Login with Google"
            style={{ cursor: "pointer", width: "28px", height: "28px" }}
          />
        </div>
      )}
    </div>
  );
};

function Login() {
  const clientId = process.env.REACT_APP_API_KEY;

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLoginButton />
      </GoogleOAuthProvider>
    </>
  );
}

export default Login;
