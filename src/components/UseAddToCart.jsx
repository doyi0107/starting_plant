import { useRecoilState } from "recoil";
import { cartState } from "./atoms";
import { useAuth } from "../context/AuthContext"; 

const useAddToCart = () => {
  const [cart, setCart] = useRecoilState(cartState); 
  const { currentUser } = useAuth(); 

  const handleAddToCart = (plantId, name, image, type, level) => {
    if (!currentUser) {
      alert("로그인이 필요한 기능입니다.");
      return;
    }
    
    const isItemInCart = cart.some((item) => item.plantId === plantId);
    if (isItemInCart) {
      alert(`${name}은(는) 이미 장바구니에 담겨 있습니다.`);
      return;
    }

   const newItem = { plantId, name, image, type, level };
   const updatedCart = [...cart, newItem];
   setCart(updatedCart);
   localStorage.setItem("cart", JSON.stringify(updatedCart)); 
   window.confirm(`장바구니에 ${name}을 담겠습니까?`);
  };

  return handleAddToCart;
};

export default useAddToCart;
