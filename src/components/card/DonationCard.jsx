
import Card from "./Card";

const DonationCard = ({cards}) => {
    console.log(cards);
    return (
        <div className="py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    cards?.map(card =><Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default DonationCard;