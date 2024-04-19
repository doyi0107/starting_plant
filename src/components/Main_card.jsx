

// styling
import "../styles/Main_card.css";

function Card({ name, image, type, level }) {

  return (
    <div className="main_search_plant_card01 main_search_plant_card00">
      <img className = "plant_img" src={image} alt={name} />
      <div className="plant_name">{name}</div>

      <div className="plant_feature">
        {type}
        {level}
      </div>
    </div>
  );
}

export default Card;
