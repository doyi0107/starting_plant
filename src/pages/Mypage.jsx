import React, { useState } from "react"; // useState를 추가로 import합니다.
import "../styles/Mypage.css";
import { useAuth } from "../context/AuthContext";

export default function Mypage() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  const [photo, setPhoto] = useState(null);

  // 사진 업로드 핸들러
  const handlePhotoChange = (event) => {
      const file = event.target.files[0];
      const photoURL = URL.createObjectURL(file);
      setPhoto(photoURL);

      // 선택된 파일 이름을 표시
      const fileNameDisplay = document.getElementById("file-name");
      fileNameDisplay.textContent = file ? file.name : "선택된 파일 없음";
  };


  return (
    <div className="mypage_wrap">
      <div className="mypage_profile_wrap">
        <div className="mypage_profile_photo_wrap">
          <label htmlFor="file-upload" className="mypage_profile_input_custom">
            +
            <input
              id="file-upload"
              type="file"
              onChange={handlePhotoChange}
              accept="image/*"
              className="mypage_profile_input"
              style={{ display: "none" }} // 실제 입력 필드는 숨깁니다.
            />
          </label>
          <div id="file-name" className="file-name">
            선택된 파일 없음
          </div>
          {photo && (
            <img src={photo} alt="Profile" className="mypage_profile_photo" />
          )}
        </div>
        {currentUser && (
          <div className="mypage_profile_text_wrap">
            <p>반갑습니다.{currentUser.name}님🤗</p>
            {/* 기타 사용자 정보 출력 */}
          </div>
        )}
      </div>
      <div className="mypage_bottom_back">
        {currentUser && (
          <div className="mypage_bottom_text_wrap">
            <div className="mypage_bottom_name">
              <p>이름</p>
              <span></span>
            </div>
            <div className="mypage_bottom_value"> {currentUser.name}</div>
            <div className="mypage_bottom_nickname">
              <p>이메일</p>
              <span></span>
            </div>
            <div className="mypage_bottom_value">{currentUser.email}</div>
            {/* 기타 사용자 정보 출력 */}
          </div>
        )}
      </div>
    </div>
  );
}
