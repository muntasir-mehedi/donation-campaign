import Input from "../components/input/Input";
import DonationCard from "../components/card/DonationCard";
import { useLoaderData } from "react-router-dom";

const Home = () => {

    const cards = useLoaderData()
    
    return (
        <div>
            <Input></Input>
            <DonationCard cards={cards}></DonationCard>
        </div>
    );
};

export default Home;