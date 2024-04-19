// SearchInput.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Search_input.css";

function SearchInput({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // useHistory 훅 사용

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    if (!searchTerm) {
      alert("검색어를 입력해주세요.");
      return;
    }

    if (onSearch) {
      // onSearch prop이 제공된 경우, 같은 페이지에서 결과를 처리
      try {
        const response = await axios.get(
          `https://example.com/api/plants?query=${searchTerm}`
        );
        onSearch(response.data);
      } catch (error) {
        alert("검색 중 오류가 발생했습니다.");
        console.error("식물 검색 중 오류가 발생했습니다.", error);
      }
    } else {
      // onSearch prop이 제공되지 않은 경우, 다른 페이지로 넘어가면서 결과 전달
      try {
        const response = await axios.get(
          `https://example.com/api/plants?query=${searchTerm}`
        );
        // 검색 결과 페이지로 이동
        navigate("/search_results", {
          state: { plants: response.data, searchTerm: searchTerm },
        });
      } catch (error) {
        alert("검색 중 오류가 발생했습니다.");
        console.error("식물 검색 중 오류가 발생했습니다.", error);
      }
    }
  };

  return (
    <div className="main_search_plant_form_wrap">
      <form className="main_search_plant_form" onSubmit={handleSearchSubmit}>
        <div className="main_serach_form_inner">
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="main_search_plant_input"
            placeholder="찾으시는 식물을 입력해주세요."
          ></input>
          <button type="submit" className="main_serach_button"></button>
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
