import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "./Details";


const ShowCard = () => {
    const [donate, setDonate] = useState({});
    const { id } = useParams();

    const donates = useLoaderData();

    useEffect(()=>{
        const findDonate = donates?.find((donate)=>donate.id==id)
        
        setDonate(findDonate)
    },[id, donates])
    console.log(donate);
    return (
        <div>
            <Details donate={donate}></Details>
        </div>
    );
};

export default ShowCard;