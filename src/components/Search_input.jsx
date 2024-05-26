import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Search_input.css";

function SearchInput({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    if (!searchTerm) {
      alert("검색어를 입력해주세요.");
      return;
    }

    if (onSearch) {
      try {
        const response = await axios.get(
          // `https://api.example.com/plants?query=${searchTerm}`

          //실제 백엔드 연동 코드
          `http://39.125.37.13:5000/plant/search?query=${searchTerm}`
        );

        // const filteredPlants = response.data.plants.filter(
        //   (plant) => plant.name === searchTerm
        // );

        //실제 백엔드 연동 코드
        const filteredPlants = response.data.filter(
          (plant) => plant.name === searchTerm
        );
        onSearch(filteredPlants, searchTerm);
      } catch (error) {
        alert("검색 중 오류가 발생했습니다.");
        console.error("식물 검색 중 오류가 발생했습니다.", error);
      }
    } else {
      try {
        const response = await axios.get(
          `https://api.example.com/plants?query=${searchTerm}`
          
          //실제 백엔드 연동 코드
          // `http://39.125.37.13:5000/plant/search?query=${searchTerm}`
        );

        const filteredPlants = response.data.plants.filter(
          (plant) => plant.name === searchTerm
        );

        //실제 백엔드 연동 코드
        // const filteredPlants = response.data.filter(
        //   (plant) => plant.name === searchTerm
        // );
        navigate("/search_result", {
          state: { plants: filteredPlants, searchTerm: searchTerm },
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
        <div className="main_search_form_inner">
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="main_search_plant_input"
            placeholder="찾으시는 식물을 입력해주세요."
          ></input>
          <button type="submit" className="main_search_button"></button>
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
