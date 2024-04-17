import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Search_result.css";
import SearchInput from "../components/Search_input";

function Search() {
  const location = useLocation();
  // useLocation에서 가져온 기본 검색 결과
  const { plants: initialPlants, searchTerm: initialSearchTerm } =
    location.state || {
      plants: [],
      searchTerm: "",
    };

  // 로컬 상태로 검색 결과와 검색어 관리
  const [plants, setPlants] = useState(initialPlants);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

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
              onSearch={(data) => {
                // SearchInput에서 새로운 검색 결과를 받아 상태 업데이트
                setPlants(data.plants);
                setSearchTerm(data.searchTerm);
              }}
            />
          </div>
          <div className="search_result_card_wrap">
            {plants.length > 0 ? (
              plants.map((plant) => (
                <div key={plant.id} className="search_result_card">
                  <h2 className="search_result_plant_name">{plant.name}</h2>
                  <p className="search_result_plant_detail">
                    {plant.description}
                  </p>
                </div>
              ))
            ) : (
              <div className="search_result_card">
                <h2 className="search_result_plant_name">커피나무</h2>
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

export default Search;
