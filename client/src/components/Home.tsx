import NavBar from "./NavBar";
import {useState} from "react";

function Home() {

    const [loggedIn, setLoggedIn] = useState(false)

    return (
    <>
        <NavBar loggedIn={loggedIn}></NavBar>
    </>
    )
}


export default Home;