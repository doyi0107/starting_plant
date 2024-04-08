import React, { useState, useEffect }from "react";
import "../styles/common/all.css";

export default function Header() {
  // 스크롤 위치를 저장하기 위한 상태
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isClosed, setIsClosed] = useState(false);

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition < lastScrollPosition) {
      setIsClosed(false);
    } else {
      setIsClosed(true);
    }
    // 마지막 스크롤 위치를 업데이트합니다.
    setLastScrollPosition(currentScrollPosition);
  };

  useEffect(() => {

      window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]); // lastScrollPosition이 변경될 때마다 이펙트를 다시 실행합니다.

  return (
    <div>
      <div className={`header_wrap ${isClosed ? "closed" : ""}`}>
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
