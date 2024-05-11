import { useRecoilState } from "recoil";
import { cartState } from "./atoms"; // 상태를 import
import { useAuth } from "../context/AuthContext"; // useAuth import

const useAddToCart = () => {
  const [cart, setCart] = useRecoilState(cartState); // Recoil 상태 사용
  const { currentUser } = useAuth(); // 현재 로그인 상태 확인


  const handleAddToCart = (plantId, name, image, type, level) => {
    // 로그인 상태 확인
    if (!currentUser) {
      alert("로그인이 필요한 기능입니다.");
      return;
    }

    const newItem = { plantId, name, image, type, level };
    setCart([...cart, newItem]);
    window.confirm("장바구니에 식물을 담겠습니까?");
  };

  return handleAddToCart;
};

export default useAddToCart;
