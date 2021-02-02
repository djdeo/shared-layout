import { Link } from "react-router-dom";
import { items } from "./data";

const List = ({ selectedId }) => {
  return <ul className="card-list">
      {items.map(item => (
          <Card key={item.id} {...item} isSelectd={item.id === selectedId}/>
      ))}
  </ul>;
};

function Card({ id, title, category, theme }) {
  return (
    <li className={`card ${theme}`}>
      <div className="card-content-container">
        <div className="card-content">
          <div className="card-image-container">
            <img className="card-image" src={`images/${id}.jpg`} alt="" />
          </div>
        </div>
      </div>
      <Link to={id} className="card-open-link"/>
    </li>
  );
}

export default List;
