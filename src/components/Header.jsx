import React from "react";
import "../styles/common/all.css";

export default function Header() {
  return (
    <div>
      <div className="header_wrap">
        <div className="header_inner">
          <div className="header_title_wrap">
            <p className="header_title">starting plant</p>
          </div>
          {/* <p className="header_main">식물 추천</p> */}
          <form className="header_seach_bar">
            <input
              className="header_seach_bar_input"
              placeholder="찾고 싶은 식물을 입력해주세요."
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
