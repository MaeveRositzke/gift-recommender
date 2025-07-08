import NavBar from "./NavBar";
import {useState} from "react";
import Choices from "./Choices";

function Home() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [sessionStarted, setSessionStarted] = useState(false);
    const [sessionHistory, setSessionHistory] = useState([]);

    function handleChoice(choice: Object) {
        setSessionHistory([...sessionHistory, choice]);
    }

    return (
        <>
            <NavBar loggedIn={loggedIn}/>
            <div className="min-h-screen flex items-center justify-center">
                {!sessionStarted? (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-20 rounded-lg"
                    onClick={() => setSessionStarted(true)}
                    >Start</button>
                ) : (
                    <div className="vertical-align">
                        <p>Choices so far:</p>
                        <ol>{sessionHistory}</ol>
                        <Choices onChoice={handleChoice}/>
                    </div>
                )}
            </div>
        </>
    )
}

export default Home;