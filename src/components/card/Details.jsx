import swal from "sweetalert";


const Details = ({donate}) => {
    const { id, img, title, description, price, title_color } = donate || {};

    const handleDonate = ()=>{
        const addDonateItems = []
        const donateItems = JSON.parse(localStorage.getItem('donation'))
        if(!donateItems){
            addDonateItems.push(donate)
            localStorage.setItem('donation',JSON.stringify(addDonateItems))
            swal("Good job!", "Donetion Added!", "success");
        }else{

            const isExits = donateItems.find(donate => donate.id == id)

            if(!isExits){

                addDonateItems.push(...donateItems, donate)
                localStorage.setItem('donation',JSON.stringify(addDonateItems))
                swal("Good job!", "Donetion Added!", "success");
            }else{
                swal('Error', "Already Added!", "error");
            }

        }
    }
    return (

        <div className="p-11 hero">
            <div className=" w-11/12">
                <div className="relative">
                        <img className="w-full md:h-96" src={img} alt="" />
                        <div className="w-12/12 h-8 bg-gray-700 ">
                        <button onClick={handleDonate} className="md:text-sm text-xs rounded p-1 text-white" style={{backgroundColor: title_color}}>Donate ${price}</button>
                        </div>
                        <h1 className="text-3xl font-bold pt-3">{title}</h1>
                        <p className="py-6"> {description} </p>
                </div>
            </div>
        </div>
    );
};

export default Details;