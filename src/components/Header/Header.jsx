import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
             <nav className=" text-red-700 text-center text-2xl font-medium p-4">
                <Link className="mr-4 p-2 hover:bg-blue-600 hover:text-white" to='/'> Home </Link>
                <Link className="mr-4 p-2 hover:bg-blue-600 hover:text-white" to='/users'> Users </Link>
                <Link className="mr-4 p-2 hover:bg-blue-600 hover:text-white" to='/about'> About </Link>
                <Link className="mr-4 p-2 hover:bg-blue-600 hover:text-white" to='/contact'> Contact </Link>
             </nav>
        </div>
    );
};

export default Header;
