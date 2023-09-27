

const Input = () => {


    return (
        <div className="hero h-80 " style={{ backgroundImage: 'url(https://i.ibb.co/FqqZJ98/Rectangle-4287.png)' }} >
            <div className="">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                    <div className="flex items-center justify-center">
                        <input
                            type="text"
                            className="p-2 border border-stone-600 border-r-0 rounded-l-lg w-72 focus:outline-none focus:border-blue-500"
                            placeholder="Enter something..."
                        />
                        <button className="p-2 bg-red-500 text-white rounded-r-lg border-l-0 border border-stone-600">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Input;