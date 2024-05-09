import React, { useState, useEffect }from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/common/all.css";
import { Link } from "react-router-dom";
import GoogleLoginForm from "./Google_login";

export default function Header() {
  // seaarch기능
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // useHistory 훅 사용

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    if (!searchTerm) {
      alert("검색어를 입력해주세요.");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.example.com/plants?query=${searchTerm}`
      );
      const filteredPlants = response.data.plants.filter(
        (plant) => plant.name === searchTerm
      );
      // 검색 결과 페이지로 이동
      navigate("/search_result", {
        state: { plants: filteredPlants, searchTerm: searchTerm },
      });
    } catch (error) {
      alert("검색 중 오류가 발생했습니다.", error);
      console.error("식물 검색 중 오류가 발생했습니다.", error);
    }
  };

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
        <form className="header_seach_bar" onSubmit={handleSearchSubmit}>
          <div className="header_seach_bar_inner">
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="header_seach_bar_input"
              placeholder="찾으시는 식물을 입력해주세요."
            ></input>
            <button type="submit" className="header_seach_bar_button"></button>
          </div>
        </form>
        <div className="header_inner">
          <div className="header_title_wrap">
            <Link to="/" className="header_title">
              STARTING PLANT
            </Link>
          </div>
          {/* <p className="header_main">식물 추천</p> */}

          <GoogleLoginForm style={{ width: "200px", height: "40px" }} />
        </div>
      </div>
    </div>
  );
}
