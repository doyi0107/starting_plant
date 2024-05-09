import React, { useState } from "react"; // useState를 추가로 import합니다.
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import "../styles/Google_login.css";



const GoogleLoginButton = () => {
    const [userName, setUserName] = useState("");

  const signIn = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      // fetching userinfo can be done on the client or the server
      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then((res) => res.data);
        setUserName(userInfo.given_name);

      console.log(userInfo);
    },
    // flow: 'implicit', // implicit is the default
  });
  return (
    <div onClick={() => signIn()}>
      {userName ? (
        // 사용자 이름이 설정된 경우 이름을 표시합니다.
        <div className="google_login_after_wrap">
          <div className="google_login_after_name">{userName}</div>
        </div>
      ) : (
        // 사용자 이름이 설정되지 않은 경우 로그인 이미지를 표시합니다.
        <div className="googlg_login_before_wrap">
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

// 테스트
