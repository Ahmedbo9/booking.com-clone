import { Link } from "react-router-dom";
import { useAppContext } from "../../contexts/app-context";


const Header = () => {

    const { isLogged } = useAppContext();

    return (
        <div className="bg-blue-800 py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-3xl text-white font-bold tracking-tight">
                    <Link to="/">Booking.ca</Link>
                </span>

                <div className="flex space-x-2">
                    {isLogged ?
                        <>
                            <Link to='"/sign-in'> My Bookings

                            </Link>

                            <Link to='"/sign-in'> My Hotels

                            </Link>

                            <button></button>
                        </> : <Link
                            to="/sign-in"
                            className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
                        >
                            Sign In
                        </Link>}



                </div>



            </div>
        </div>
    );
};

export default Header;