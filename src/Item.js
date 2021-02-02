import { Link } from "react-router-dom"

const Item = ({id}) => {
    return (
        <>
            <div className="overlay" style={{ pointerEvents: "auto" }}>
               <Link to="/"/>
            </div>
            <div className="card-content-container open">
                <div className="card-content">
                    <div className="card-image-container">
                        <img className="card-image" src={`images/${id}.jpg`} alt=""/>
                    </div>
                </div>

            </div>
        </>
    );
}
 
export default Item;