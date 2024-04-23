

// styling
import "../styles/Main_card.css";

function Card({ name, image, type, level }) {

  return (
    <div className="main_search_plant_card01 main_search_plant_card00">
      <img className="main_search_plant_img" src={image} alt={name} />
      <div className="main_search_plant_name">{name}</div>

      <div className="main_search_plant_feature">
        <p>#{type}</p> <p>#{level}</p>
      </div>
    </div>
  );
}

export default Card;
