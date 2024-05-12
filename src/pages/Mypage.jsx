import React, { useState, useEffect, useRef } from "react"; 
import "../styles/Mypage.css";
import { useAuth } from "../context/AuthContext";
import PhotoOptionsModal from "../components/Mypage_modal"
import { useRecoilState } from "recoil"; 
import { cartState } from "../components/atoms";
import { useNavigate } from "react-router-dom"; 

export default function Mypage() {
  const { currentUser } = useAuth();
  const inputRef = useRef();
  const [photo, setPhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useRecoilState(cartState); // useRecoilValue 대신 useRecoilState를 사용하여 cart 상태도 업데이트할 수 있게 합니다.
  const navigate = useNavigate(); 

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

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 장바구니 상태를 불러오는 함수
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []); // 의존성 배열을 빈 배열로 설정하여 컴포넌트가 마운트될 때만 실행됩니다.

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

  const removeFromCart = (event, plantId, name) => {
    event.stopPropagation(); // 이벤트 버블링 방지

    // 사용자에게 삭제 확인 요청
    const isConfirmed = window.confirm(
      `${name}을(를) 장바구니에서 삭제하시겠습니까?`
    );

    // 사용자가 '취소'를 클릭한 경우, 함수 실행 중지
    if (!isConfirmed) {
      return;
    }

    // plantId를 사용하여 해당 아이템을 장바구니 배열에서 제거
    const updatedCart = cart.filter((item) => item.plantId !== plantId);

    // 변경된 장바구니 배열을 로컬 스토리지에 저장
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // 상태를 업데이트하여 UI를 새로고침
    setCart(updatedCart);
  };

  // 식물 카드 클릭 핸들러
  const handlePlantClick = (plantId) => {
    navigate(`/card_detail/${plantId}`); // 식물 상세 페이지로 이동
  };

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
        {showModal && (
          <PhotoOptionsModal
            showModal={showModal}
            toggleModal={toggleModal}
            removePhoto={removePhoto}
            changePhoto={changePhoto}
          />
        )}
        {/* 모달을 조건부 렌더링합니다. */}
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
            <div className="mypage_bottom_basket">
              <p>장바구니</p>
              <span></span>
            </div>
            <div className="mypage_cart_wrap">
              <div className="mypage_cart_inner">
                {cart.map((item) => (
                  <div
                    className="mypage_cart_card_wrap"
                    onClick={() => handlePlantClick(item.plantId)} // 수정된 부분
                  >
                    <img
                      className="mypage_cart_img mypage_cart_img"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="mypage_cart_name" key={item.plantId}>
                      {item.name}
                    </div>
                    <div className="mypage_cart_feature">
                      <p>#{item.type}</p> <p>#{item.level}</p>
                    </div>
                    <button
                      className="mypage_cart_delete_button"
                      onClick={(event) =>
                        removeFromCart(event, item.plantId, item.name)
                      }
                    >
                      x
                    </button>
                  </div> // 장바구니 아이템 출력
                ))}
              </div>
            </div>
            {/* 기타 사용자 정보 출력 */}
          </div>
        )}
      </div>
    </div>
  );
}
