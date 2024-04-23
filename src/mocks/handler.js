// src/mocks/handlers.js
import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://api.example.com/plants", ({ request }) => {
    // URL 쿼리 파라미터에 따라 응답을 동적으로 구성할 수 있습니다.
    // 예를 들어, req.url.searchParams를 사용하여 쿼리 파라미터에 접근할 수 있습니다.
    const query = new URL(request.url).searchParams;
    // 각 쿼리 파라미터 값을 가져옵니다.
    const level = query.get("level");
    const type = query.get("type");
    const place = query.get("place");
    const price = query.get("price");
    const life = query.get("life");
    const height = query.get("height");

    const plants = [
      {
        name: "몬스테라",
        level: "Beginner",
        type: "foliage",
        place: "all",
        price: "1_won",
        life: "all",
        height: "all",
        imgUrl:
          "https://mblogthumb-phinf.pstatic.net/MjAxNzA5MjVfMjAw/MDAxNTA2MzM5NTY3OTkw.oI0G9tvPgKkEZLlPwkC2amJsfrB3FkwkgAoXV06I-54g.1m68ClT0Pvyyt50NlUQqKs7dF7yMvwCs_l-njl7lIOYg.JPEG.julyhoho/0280001005425_1260.jpg?type=w800",
      },
      {
        name: "커피나무",
        level: "Beginner",
        type: "tree",
        place: "all",
        price: "all",
        life: "all",
        height: "all",
        imgUrl:
          "https://images.pexels.com/photos/170383/pexels-photo-170383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        name: "파키라 ",
        level: "Beginner",
        type: "foliage",
        place: "all",
        price: "all",
        life: "all",
        height: "all",
        imgUrl: "https://barunflower.com/data/item/1538894140/list.jpg",
      },
      {
        name: "산세베리아",
        level: "Beginner",
        type: "foliage",
        place: "all",
        price: "all",
        life: "all",
        height: "all",
        imgUrl:
          "https://cleanqplus.com/data/editor/2110/3546874990_1634265487.7264.jpg",
      },
      {
        name: "올리브나무",
        level: "Intermediate",
        type: "tree",
        place: "all",
        price: "all",
        life: "all",
        height: "all",
        imgUrl:
          "https://img.29cm.co.kr/next-product/2022/05/29/14d38398b7d3412fa39e169e2916b35c_20220529165508.jpg?width=700",
      },
      {
        name: "로즈마리",
        level: "Intermediate",
        type: "Herb",
        place: "outdoor",
        price: "5_won",
        life: "all",
        height: "all",
        imgUrl:
          "https://www.costco.co.kr/medias/sys_master/images/hcf/h9b/31276669403166.jpg",
      },
      {
        name: "제라늄",
        level: "Beginner",
        type: "flower",
        place: "all",
        price: "5_won",
        life: "all",
        height: "all",
        imgUrl:
          "https://m.hsflower.co.kr/web/product/big/202011/7339f9b88a16527f2291aa48f8700e8f.jpg",
      },
      {
        name: "뱅갈고무나무",
        level: "Beginner",
        type: "tree",
        place: "indoor",
        price: "5_won",
        life: "all",
        height: "all",
        imgUrl: "https://kt1144.co.kr/data/item/1657949929/67GF6rCI1_1.jpg",
      },
      {
        name: "홍콩야자",
        level: "Intermediate",
        type: "foliage",
        place: "indoor",
        price: "5_won",
        life: "all",
        height: "all",
        imgUrl:
          "https://file.honestflower.kr/media/images/productimage/1649223866/%ED%99%8D%EC%BD%A9%EC%95%BC%EC%9E%90_10_large.webp",
      },
      {
        name: "장미",
        level: "Expert",
        type: "flower",
        place: "all",
        price: "5_won",
        life: "all",
        height: "all",
        imgUrl:
          "https://www.artiplaza.com/shopimages/arti/002002000201.jpg?1695783922",
      },
      {
        name: "행운목",
        level: "Beginner",
        type: "foliage",
        place: "indoor",
        price: "all",
        life: "all",
        height: "all",
        imgUrl:
          "https://m.35플라워.com/web/product/big/202212/77a7d772eba64dff90e2848bece01b59.jpg",
      },
      {
        name: "바질",
        level: "Beginner",
        type: "Herb",
        place: "indoor",
        price: "10_won",
        life: "all",
        height: "all",
        imgUrl:
          "https://maengsfarm.com/web/product/tiny/202312/33cce2491294989cfcf67aa0dbb3bb2d.jpg",
      },
      {
        name: "스투키",
        level: "Beginner",
        type: "succulents",
        place: "indoor",
        price: "5_won",
        life: "all",
        height: "all",
        imgUrl:
          "https://th4.tmon.kr/thumbs/image/7aa/1b6/572/d17bc0981_700x700_95_FIT_1548838298.jpg",
      },

      {
        name: "레몬나무",
        level: "Expert",
        type: "tree",
        place: "indoor",
        price: "all",
        life: "all",
        height: "all",
        imgUrl:
          "https://img.29cm.co.kr/next-product/2020/07/06/b9cde40449c04003a66093c5e4c1eb81_20200706165116.jpg?width=700",
      },
      {
        name: "피쉬본",
        level: "Beginner ",
        type: "succulents",
        place: "indoor",
        price: "all",
        life: "all",
        height: "all",
        imgUrl:
          "https://www.housoop.com/data/goods/11/2023/05/194_temp_16836124329290view.jpg",
      },
      // 추가 식물 데이터를 여기에 넣을 수 있습니다.
    ];

    // 쿼리 파라미터에 따라 식물 데이터를 필터링
    const filteredPlants = plants.filter((plant) => {
      if (level && plant.level !== level) return false;
      if (type && plant.type !== "all" && plant.type !== type) return false;
      if (place && plant.place !== "all" && plant.place !== place) return false;
      if (price && plant.price !== "all" && plant.price !== price) return false;
      if (life && plant.life !== "all" && plant.life !== life) return false;
      if (height && plant.height !== "all" && plant.height !== height) return false;
      return true;
    });

    return HttpResponse.json({
      plants: filteredPlants,
    });
  }),
];
