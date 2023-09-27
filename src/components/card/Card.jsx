import { Link } from "react-router-dom";


const Card = ({ card }) => {
    const { id, img, category, title, background_color, category_color, title_color } = card || {};
    return (
        <Link to={`/showdetails/${id}`}>
            <div className="card w-72 rounded-lg border border-x-lime-400" style={{ backgroundColor: background_color }}>
                <div className="rounded-lg overflow-hidden">
                    <img className="w-72 h-48" src={img} alt="photo" />
                </div>
                <div className="p-4 ">
                    <div className="badge" style={{ color: title_color, backgroundColor: category_color }}> {category} </div>
                    <h2 className="text-xl font-semibold" style={{ color: title_color }}>
                        {title}
                    </h2>
                </div>
            </div>
        </Link>
    );
};

export default Card;