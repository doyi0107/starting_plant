import React from "react";
import "../styles/Mypage_modal.css"

export default function Mypage_modal({
  showModal,
  toggleModal,
  removePhoto,
  changePhoto,
}) {
  return (
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
          <button className="Photo_modal_button" onClick={changePhoto}>
            사진 변경
          </button>
        </div>
      </div>
    </div>
  );
}
