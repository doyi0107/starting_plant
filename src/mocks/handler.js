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
    const plantId = query.get("plantId");

    const plants = [
      {
        id: 0,
        name: "몬스테라",
        level: "Beginner",
        type: "foliage",
        place: "all",
        price: "1_won",
        life: "all",
        height: "all",
        imgUrl:
          "https://mblogthumb-phinf.pstatic.net/MjAxNzA5MjVfMjAw/MDAxNTA2MzM5NTY3OTkw.oI0G9tvPgKkEZLlPwkC2amJsfrB3FkwkgAoXV06I-54g.1m68ClT0Pvyyt50NlUQqKs7dF7yMvwCs_l-njl7lIOYg.JPEG.julyhoho/0280001005425_1260.jpg?type=w800",
        temperature: 25,
        explain:
          "몬스테라는 열대 우림에서 자라는 식물로, 크고 구멍이 뚫린 잎이 특징입니다. 이 구멍은 강한 바람이나 물방울이 잎을 손상시키지 않도록 돕습니다. 몬스테라는 실내에서 잘 자라며, 밝은 간접광을 선호합니다. 과습을 피하고 통풍이 잘 되는 토양에서 잘 자랍니다.",
      },
      {
        id: 1,
        name: "커피나무",
        level: "Beginner",
        type: "tree",
        place: "all",
        price: "all",
        life: "all",
        height: "all",
        imgUrl:
          "https://images.pexels.com/photos/170383/pexels-photo-170383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        temperature: 20,
        explain: "//",
      },
      {
        id: 2,
        name: "파키라 ",
        level: "Beginner",
        type: "foliage",
        place: "all",
        price: "all",
        life: "all",
        height: "all",
        imgUrl: "https://barunflower.com/data/item/1538894140/list.jpg",
        temperature: 23,
        explain:
          "커피나무는 커피콩을 생산하는 식물로, 열대 지역에서 자라는 상록수입니다. 실내에서 재배할 때는 밝은 간접광을 제공하고, 토양이 마르기 시작하면 충분히 물을 주어야 합니다. 커피나무는 습한 환경을 선호하며, 실내에서 꽃을 피우기는 어렵지만 잘 관리하면 열매를 맺을 수도 있습니다.",
      },
      {
        id: 3,
        name: "산세베리아",
        level: "Beginner",
        type: "foliage",
        place: "all",
        price: "all",
        life: "all",
        height: "all",
        imgUrl:
          "https://cleanqplus.com/data/editor/2110/3546874990_1634265487.7264.jpg",
        temperature: 23,
        explain:
          "산세베리아, 또는 뱀꼬리라고도 불리는 이 식물은 매우 관리하기 쉽고 견고하여 초보자에게 추천되는 식물입니다. 물을 많이 필요로 하지 않으며, 낮은 빛 조건에서도 잘 자랍니다. 공기 정화 능력이 뛰어나고, 잎이 곧게 서며 다양한 색상과 패턴을 가지고 있습니다.",
      },
      {
        id: 4,
        name: "올리브나무",
        level: "Intermediate",
        type: "tree",
        place: "all",
        price: "all",
        life: "all",
        height: "all",
        imgUrl:
          "https://img.29cm.co.kr/next-product/2022/05/29/14d38398b7d3412fa39e169e2916b35c_20220529165508.jpg?width=700",
        temperature: 25,
        explain:
          "올리브나무는 지중해 지역이 원산지인 상록수로, 밝은 햇빛을 많이 필요로 합니다. 실내에서 재배할 때는 가능한 한 밝은 곳에 두어야 하며, 겨울에는 온도가 너무 낮아지지 않도록 주의해야 합니다. 올리브나무는 건조한 환경을 선호하며, 물은 토양이 건조해진 후에 충분히 주는 것이 좋습니다.",
      },
      {
        id: 5,
        name: "로즈마리",
        level: "Intermediate",
        type: "Herb",
        place: "outdoor",
        price: "5_won",
        life: "all",
        height: "all",
        imgUrl:
          "https://www.costco.co.kr/medias/sys_master/images/hcf/h9b/31276669403166.jpg",
        temperature: 18,
        explain:
          "로즈마리는 향기가 강한 허브로, 요리에 흔히 사용됩니다. 햇빛을 매우 좋아하며, 실내에서 재배시에도 가능한 한 밝은 곳에 두어야 합니다. 토양은 잘 배수되는 것을 사용하고, 과습을 피해야 합니다. 로즈마리는 건조한 조건을 견디는 능력이 뛰어나며, 정기적인 가지치기를 통해 더욱 풍성하게 자랄 수 있습니다.",
      },
      {
        id: 6,
        name: "제라늄",
        level: "Beginner",
        type: "flower",
        place: "all",
        price: "5_won",
        life: "all",
        height: "all",
        imgUrl:
          "https://m.hsflower.co.kr/web/product/big/202011/7339f9b88a16527f2291aa48f8700e8f.jpg",
        temperature: 22,
        explain:
          "제라늄은 밝은 색상의 꽃을 피우는 인기 있는 관엽식물로, 주로 화분에 심어 베란다나 정원에서 자랍니다. 햇빛을 좋아하며, 통풍이 잘 되고 배수가 잘되는 토양에서 잘 자랍니다. 물은 흙이 마르면 충분히 주되 과습을 피해야 합니다. 다양한 색상과 향이 있어 선택의 폭이 넓습니다.",
      },
      {
        id: 7,
        name: "뱅갈고무나무",
        level: "Beginner",
        type: "tree",
        place: "indoor",
        price: "5_won",
        life: "all",
        height: "all",
        imgUrl: "https://kt1144.co.kr/data/item/1657949929/67GF6rCI1_1.jpg",
        temperature: 29,
        explain:
          "뱅갈고무나무는 인테리어에 자주 사용되는 큰 잎이 매력적인 식물입니다. 실내에서 잘 자라며, 밝은 간접광을 선호합니다. 과습을 피하기 위해 흙이 완전히 마른 후에 물을 주는 것이 좋습니다. 공기 정화 능력이 뛰어나 실내 공기를 개선하는데 도움을 줍니다.",
      },
      {
        id: 8,
        name: "홍콩야자",
        level: "Intermediate",
        type: "foliage",
        place: "indoor",
        price: "5_won",
        life: "all",
        height: "all",
        imgUrl:
          "https://file.honestflower.kr/media/images/productimage/1649223866/%ED%99%8D%EC%BD%A9%EC%95%BC%EC%9E%90_10_large.webp",
        temperature: 17,
        explain:
          "홍콩야자는 우아한 모습과 강한 생명력으로 인기 있는 실내 장식용 식물입니다. 밝은 간접광을 선호하며, 과습에 주의해야 합니다. 실내에서 기르기 쉬우며, 정기적으로 물을 주되 뿌리가 물에 잠기지 않도록 해야 합니다. 공기 정화 기능도 좋아 실내 환경 개선에 도움을 줍니다.",
      },
      {
        id: 9,
        name: "장미",
        level: "Expert",
        type: "flower",
        place: "all",
        price: "5_won",
        life: "all",
        height: "all",
        imgUrl:
          "https://www.artiplaza.com/shopimages/arti/002002000201.jpg?1695783922",
        temperature: 26,
        explain:
          "장미는 다양한 색상과 향기로 유명한 꽃으로, 정원이나 화분에서 잘 자랍니다. 충분한 햇빛과 영양분이 필요하며, 정기적인 가지치기로 건강을 유지할 수 있습니다. 물은 균일하게 주되 뿌리가 썩지 않도록 주의해야 합니다. 사랑과 아름다움의 상징으로 많이 사랑받습니다.",
      },
      {
        id: 10,
        name: "행운목",
        level: "Beginner",
        type: "foliage",
        place: "indoor",
        price: "all",
        life: "all",
        height: "all",
        imgUrl:
          "https://m.35플라워.com/web/product/big/202212/77a7d772eba64dff90e2848bece01b59.jpg",
        temperature: 23,
        explain:
          "행운목은 풍수지리에서 길운을 가져다 준다고 알려진 식물로, 자라기 쉬워 초보자도 잘 키울 수 있습니다. 밝은 간접광을 선호하며, 과습을 피하기 위해 흙이 건조해지면 충분히 물을 주어야 합니다. 공기 정화 능력이 좋아 실내에 두기 적합합니다. 매력적인 모양과 쉬운 관리로 많은 사람들이 선호합니다.",
      },
      {
        id: 11,
        name: "바질",
        level: "Beginner",
        type: "Herb",
        place: "indoor",
        price: "10_won",
        life: "all",
        height: "all",
        imgUrl:
          "https://maengsfarm.com/web/product/tiny/202312/33cce2491294989cfcf67aa0dbb3bb2d.jpg",
        temperature: 22,
        explain:
          "바질은 향기가 강하고 요리에 자주 사용되는 허브입니다. 햇빛을 많이 필요로 하며, 물은 흙이 마르기 시작할 때 주어야 합니다. 잎이 풍부한 향을 내며, 다양한 종류가 있습니다. 따뜻한 기후를 선호하며, 실내에서 자라게 할 때에도 충분한 햇빛을 받도록 해야 합니다.",
      },
      {
        id: 12,
        name: "스투키",
        level: "Beginner",
        type: "succulents",
        place: "indoor",
        price: "5_won",
        life: "all",
        height: "all",
        imgUrl:
          "https://th4.tmon.kr/thumbs/image/7aa/1b6/572/d17bc0981_700x700_95_FIT_1548838298.jpg",
        temperature: 20,
        explain:
          "스투키는 관리가 매우 쉬운 식물로, 낮은 빛에서도 잘 자라며 물을 적게 필요로 합니다. 짙은 녹색의 광택이 나는 잎이 특징이며, 공기 정화 능력도 뛰어납니다. 물은 흙이 완전히 마른 후에 주는 것이 좋습니다. 느린 성장률을 가지고 있지만, 장기간 건강하게 유지될 수 있습니다.",
      },

      {
        id: 13,
        name: "레몬나무",
        level: "Expert",
        type: "tree",
        place: "indoor",
        price: "all",
        life: "all",
        height: "all",
        imgUrl:
          "https://img.29cm.co.kr/next-product/2020/07/06/b9cde40449c04003a66093c5e4c1eb81_20200706165116.jpg?width=700",
        temperature: 25,
        explain:
          "레몬나무는 햇빛을 많이 필요로 하는 식물로, 실내에서 재배할 경우 밝은 곳에 두어야 합니다. 충분한 물과 정기적인 비료가 필요하며, 겨울에는 실내로 옮겨 온도를 유지해 주어야 합니다. 레몬나무는 온화한 기후를 선호하며, 정성을 들여 관리하면 실내에서도 신선한 레몬을 수확할 수 있습니다.",
      },
      {
        id: 14,
        name: "피쉬본",
        level: "Beginner ",
        type: "succulents",
        place: "indoor",
        price: "all",
        life: "all",
        height: "all",
        imgUrl:
          "https://www.housoop.com/data/goods/11/2023/05/194_temp_16836124329290view.jpg",
        temperature: 23,
        explain:
          "피쉬본은 독특한 모양의 선인장으로, 어두운 곳에서도 잘 자랄 수 있으나, 밝은 간접광에서 더 잘 자랍니다. 고유의 물고기 뼈 모양의 잎이 특징이며, 물은 흙이 마르면 충분히 주되, 과습을 피해야 합니다. 아름다운 꽃을 피우기도 하며, 공중습도가 높은 환경을 선호합니다.",
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
