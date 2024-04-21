// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

const BASE_URL = process.env.REACT_APP_API_BASE_URL; // 환경 변수에서 기본 URL을 가져옵니다.
const imageUrl = `${BASE_URL}/assets/test_plant/몬스테라.png`; // 절대 URL을 동적으로 구성합니다.


export const handlers = [
  http.get("https://api.example.com/plants", () => {
    // URL 쿼리 파라미터에 따라 응답을 동적으로 구성할 수 있습니다.
    // 예를 들어, req.url.searchParams를 사용하여 쿼리 파라미터에 접근할 수 있습니다.

    return HttpResponse.json({
      plants: [
        {
          name: "몬스테라",
          level: "Beginner",
          type: "foliage",
          place: "all",
          price: "1_won",
          life: "1_year",
          height: "20_cm",
          imgUrl: imageUrl,
        },
        {
          name: "커피나무",
          level: "Beginner",
          type: "flower",
          place: "indoor",
          price: "1_won",
          life: "1_year",
          height: "20_cm",
        },
        {
          name: "파키라 ",
          level: "Beginner ",

          type: "foliage",
          place: "indoor",

          price: "1_won",
          life: "1_year",
          height: "20_cm",
        },
        {
          name: "산세베리아",
          level: "Beginner ",

          type: "foliage",
          place: "indoor",

          price: "1_won",
          life: "1_year",
          height: "20_cm",
        },
        // 추가 식물 데이터를 여기에 넣을 수 있습니다.
      ],
    });
  }),
];
