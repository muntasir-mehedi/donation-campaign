import { useEffect, useState } from "react";
import Card from "../components/card/Card";


const Donation = () => {

    const [donation, setDonetion] = useState();
    const [noData, setNoData] = useState();
    useEffect(()=>{

        const donateItems = JSON.parse(localStorage.getItem('donation'))
        if (donateItems) {
            setDonetion(donateItems)
        } else {
            setNoData('No Data')
        }
    },[])

    return (
        <div>
            {noData ? <p className="flex justify-center items-center">{noData}</p> 
            : 
            <div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 py-8">
                    {donation?.map(card=><Card key={card.id} card={card}></Card>)}
                </div>

            </div>}
        </div>
    );
};

export default Donation;