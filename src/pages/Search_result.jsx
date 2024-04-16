// SearchResult.js
import React from "react";
import { useLocation } from "react-router-dom";

function SearchResult() {
  const location = useLocation();
  const { plants } = location.state || { plants: [] }; // 검색 결과를 state에서 추출

  return (
    <div>
      {plants.map((plant) => (
        <div key={plant.id}>{plant.name}</div> // 검색 결과 출력
      ))}
    </div>
  );
}

export default SearchResult;
