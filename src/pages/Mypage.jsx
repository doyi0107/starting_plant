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
  const [cart, setCart] = useRecoilState(cartState); 
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
      localStorage.setItem("userPhoto", base64String); 
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []); 

  useEffect(() => {
    const savedPhoto = localStorage.getItem("userPhoto");
    if (savedPhoto) {
      setPhoto(savedPhoto);
    }
  }, []);


  const removePhoto = () => {
    setPhoto(null); 
    localStorage.removeItem("userPhoto"); 
    setShowModal(false);
  };

  const handleButtonClick = () => {
    if (photo) {
      toggleModal();
    } else {
      inputRef.current.click(); 
    }
  };

  const changePhoto = () => {
    inputRef.current.click();
    setShowModal(false); 
  };

  const removeFromCart = (event, plantId, name) => {
    event.stopPropagation();

    const isConfirmed = window.confirm(
      `${name}을(를) 장바구니에서 삭제하시겠습니까?`
    );

    if (!isConfirmed) {
      return;
    }

    const updatedCart = cart.filter((item) => item.plantId !== plantId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const handlePlantClick = (plantId) => {
    navigate(`/card_detail/${plantId}`); 
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
              style={{ display: "none" }}
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
                {cart.length === 0 ? (
                  <div className="mypage_cart_empty_msg_wrap">
                    <div className="mypage_cart_empty_msg">
                      장바구니가 비어있습니다.
                    </div>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      className="mypage_cart_card_wrap"
                      onClick={() => handlePlantClick(item.plantId)}
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
                    </div>
                  ))
                )}
              </div>
            </div>
            {/* 기타 사용자 정보 출력 */}
          </div>
        )}
      </div>
    </div>
  );
}
