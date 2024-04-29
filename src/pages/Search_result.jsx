import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Search_result.css";
import SearchInput from "../components/Search_input";

function Search_result() {
  const location = useLocation();
  const navigate = useNavigate();
  // useLocation에서 가져온 기본 검색 결과
  const { plants: initialPlants, searchTerm: initialSearchTerm } =
    location.state || {
      plants: [],
      searchTerm: "",
    };

     console.log(location.state);

  // 로컬 상태로 검색 결과와 검색어 관리
  const [plants, setPlants] = useState(initialPlants);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  // 카드 클릭 핸들러 함수
  const handleCardClick = (plantName) => {
    navigate(`/card_detail/${plantName}`);
  };

  return (
    <div>
      <div className="search_result_wrap">
        <div className="search_result_inner">
          <div className="search_result_bar_wrap">
            <div className="search_result_explain">
              {searchTerm
                ? `'${searchTerm}'에 대한 식물 검색 결과 ${plants.length} 건`
                : "받아온 데이터가 없습니다."}
            </div>
            <SearchInput
             onSearch={(data, newSearchTerm) => { // newSearchTerm 인자 추가
    setPlants(data);
    setSearchTerm(newSearchTerm); // 새로운 검색어로 상태 업데이트
  }}
            />
          </div>
          <div className="search_result_card_wrap">
            {plants.length > 0 ? (
              plants.map((plant) => (
                <div
                  key={plant.id}
                  className="search_result_card"
                  onClick={() => handleCardClick(plant.id)}
                >
                  <h2 className="search_result_plant_name">{plant.name}</h2>
                  <p className="search_result_plant_detail">
                    {plant.level}
                  </p>
                </div>
              ))
            ) : (
              <div className="search_result_card">
                <p className="search_result_plant_detail">
                  검색 결과가 없습니다.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search_result;
