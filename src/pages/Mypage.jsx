import React, { useState, useEffect, useRef } from "react"; // useState를 추가로 import합니다.
import "../styles/Mypage.css";
import { useAuth } from "../context/AuthContext";

export default function Mypage() {
  const { currentUser } = useAuth();
  const inputRef = useRef();
  const [photo, setPhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result;
      setPhoto(base64String);
      localStorage.setItem("userPhoto", base64String); // Base64 문자열을 로컬 스토리지에 저장
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 로컬 스토리지에서 사진 URL을 가져와 상태를 업데이트합니다.
    const savedPhoto = localStorage.getItem("userPhoto");
    if (savedPhoto) {
      setPhoto(savedPhoto);
    }
  }, []);

  // 사진 삭제 핸들러
  const removePhoto = () => {
    setPhoto(null); // 상태를 null로 설정
    localStorage.removeItem("userPhoto"); // 로컬 스토리지에서 사진 URL을 삭제
    setShowModal(false);
  };

  // 버튼 클릭 이벤트 핸들러
  const handleButtonClick = () => {
    if (photo) {
      toggleModal(); // 사진이 있으면 모달 표시
    } else {
      inputRef.current.click(); // 사진이 없으면 파일 입력을 위해 input 클릭
    }
  };

  // 사진 변경 버튼 이벤트 핸들러
  const changePhoto = () => {
    inputRef.current.click(); // 파일 입력을 위해 input 클릭
    setShowModal(false); // 모달을 닫습니다
  };

  const PhotoOptionsModal = () => (
    <div
      className="Photo_modal"
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="Photo_modal_content">
        <div className="close_wrap">
          <span className="close" onClick={toggleModal}>
            &times;
          </span>
        </div>
        <p className="Photo_modal_ask">사진을 삭제하거나 변경하시겠습니까?</p>
        <div className="Photo_modal_button_wrap">
          <button className="Photo_modal_button" onClick={removePhoto}>
            사진 삭제
          </button>
          <button
            className="Photo_modal_button"
            onClick={changePhoto} // 수정된 부분
          >
            사진 변경
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mypage_wrap">
      <div className="mypage_profile_wrap">
        <div className="mypage_profile_photo_wrap">
          <label htmlFor="file-upload" className="mypage_profile_input_custom">
            +
            <input
              ref={inputRef}
              id="file-upload"
              type="file"
              onChange={handlePhotoChange}
              accept="image/*"
              className="mypage_profile_input"
              style={{ display: "none" }} // 실제 입력 필드는 숨깁니다.
            />
          </label>
          {photo && (
            <img
              src={photo}
              alt="Profile"
              className="mypage_profile_photo"
            ></img>
          )}
          <button
            onClick={handleButtonClick}
            className="photo_change_modal_button"
          >
            <img
              src="assets/Mypage/camera.png"
              className="photo_change_button_img"
            />
          </button>
        </div>
        {showModal && <PhotoOptionsModal />} {/* 모달을 조건부 렌더링합니다. */}
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
