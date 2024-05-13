import React, { useState, useEffect } from "react"; 
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import "../styles/Google_login.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const GoogleLoginButton = () => {
  const { setCurrentUser } = useAuth();
  const navigate = useNavigate(); 

  const signIn = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then((res) => res.data);

      const mypage_userInfo = {
        name: userInfo.name,
        email: userInfo.email,
        nickname: userInfo.given_name,
        picture: userInfo.picture,
      };

      localStorage.setItem("currentUser", JSON.stringify(mypage_userInfo));

      setCurrentUser(mypage_userInfo);
      console.log(userInfo);
    },
  });

  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const userName =
    JSON.parse(localStorage.getItem("currentUser"))?.picture || "";

  return (
    <div>
      {userName ? (
        <div className="google_login_after_wrap">
          <Link to="/Mypage" className="google_login_after_mypage_link">
            <p className="google_login_after_mypage">마이페이지</p>
          </Link>
          <span>|</span>
          <p className="google_logout" onClick={handleLogout}>
            로그아웃
          </p>
          <span>|</span>
          <img
            src={userName}
            className="google_login_after_name"
            alt="google_login_after_img"
          ></img>
        </div>
      ) : (
        <div className="google_login_before_wrap" onClick={() => signIn()}>
          <p className="google_login_text">로그인</p>
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
