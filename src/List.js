import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { items } from "./data";

const List = ({ selectedId }) => {
  return (
    <ul className="card-list">
      {items.map((item) => (
        <Card
          key={item.id}
          {...item}
          isSelectd={item.id === selectedId}
        />
      ))}
    </ul>
  );
};

function Card({ id, title, category }) {
  return (
    <li className="card">
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div className="card-image-container" layoutId={`card-image-container-${id}`}>
            <img className="card-image" src={`images/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className="card-open-link" />
    </li>
  );
}

export default List;
