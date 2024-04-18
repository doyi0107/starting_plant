import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Card_detail.css"

function CardDetail() {
  let { plantName } = useParams();

  // 식물 정보 상태
  const [plant, setPlant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 식물 데이터를 가져오는 함수
  useEffect(() => {
    // 가상의 API URL. 실제 URL로 대체 필요
    const url = `https://example.com/api/plants/${plantName}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPlant(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Fetching error:", error);
        setError(error);
        setIsLoading(false);
      });
  }, [plantName]); // plantName이 변경될 때마다 이 effect를 다시 실행

  // 로딩 중 메시지
  if (isLoading) return <div className="card_detail_wrap">로딩 중...</div>;

  // 에러 메시지
  if (error) return (
    <div className="card_detail_wrap">에러가 발생했습니다: {error.message}</div>
  );

  // 식물 정보 렌더링
  return (
    <div className="card_detail_wrap">
      <div className="card_detail">
        {plant ? (
          <div>
            <h2>{plant.name}</h2>
            <p>{plant.description}</p>
            <p>관리 방법: {plant.care}</p>
          </div>
        ) : (
          <p>해당 식물을 찾을 수 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default CardDetail;
