import "../App.css";
import { Link } from "react-router";

function NavBar({loggedIn}) {
    return (
        <>
            <nav className="fixed top-0 w-full navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
               <div className="flex justify-between items-center">

                    <div className="inline-block">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="inline-block">
                        <Link to="/about">About</Link>
                    </div>
                   {(location.pathname !== "/profile" && loggedIn) && (
                        <div className="inline-block">
                            <Link to="/profile">Profile</Link>
                        </div>
                   )}
                   {(location.pathname !== "/profile" && !loggedIn) && (
                       <div className="inline-block">
                           <Link to="/signup">Sign Up</Link>
                       </div>
                   )}

                </div>
            </nav>
        </>
    )
}

export default NavBar;
