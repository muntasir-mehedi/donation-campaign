import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const DonationCard = () => {
    const cards = useLoaderData()
    console.log(cards);
    return (
        <div>
            <div>
                {
                    cards?.map(card =><Card key={card.id}></Card>)
                }
            </div>
        </div>
    );
};

export default DonationCard;