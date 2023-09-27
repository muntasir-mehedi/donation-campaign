import { useEffect, useState } from "react";
import Card from "../components/card/Card";
import { PieChart } from "recharts";


const Donation = () => {

    const [donation, setDonetion] = useState([]);
    const [noData, setNoData] = useState();
    const [isShow, setIsShow] = useState()
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
                    {
                        isShow ? donation?.map(card=><Card key={card.id} card={card}></Card>)
                        :
                        donation?.slice(0,4).map(card=><Card key={card.id} card={card}></Card>)
                    }
                </div>
            </div>}
            {donation?.length > 4 && <button onClick={()=>setIsShow(!isShow)} className="block mx-auto bg-green-700 p-2 rounded text-white">See more</button>}
            {donation?.length > 4 && (<PieChart data={donation.length}
          totalData={12}></PieChart>
      )}
        </div>
    );
};

export default Donation;