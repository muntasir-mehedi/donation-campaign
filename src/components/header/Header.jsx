import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <img src="/public/images/Logo.png" alt="" />
                </div>
                <div>
                    <ul className="flex">
                        <li className="p-2"><NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }>Home</NavLink>
                        </li>

                        <li className="p-2"><NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }>Donation</NavLink>
                        </li>

                        <li className="p-2"><NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }>Statistics</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;