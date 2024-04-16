// SearchResult.js
import React from "react";
import { useLocation } from "react-router-dom";

function SearchResult() {
  const location = useLocation();
  const { plants } = location.state || { plants: [] }; // 검색 결과를 state에서 추출

  return (
    <div>
      {plants ? (
        plants.map((plant) => (
          <div key={plant.id}>
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
          </div>
        ))
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}

export default SearchResult;
