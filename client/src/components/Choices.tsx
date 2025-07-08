import "../App.css";
import {useEffect, useState} from "react";
import Choice from "./Choice";

interface ChoicesProps {
    onChoice: Function;
}

function Choices({onChoice}: ChoicesProps) {

    const [choices, setChoices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/new-choices")
            .then(res => res.json())
            .then(data => setChoices(data))
            .catch(err => console.error(err));
    }, [Choice]);

    function handleClick(index: Number) {
        onChoice(choices[index])
    }

    if (choices.length < 2) {
        return <p>Loading choices...</p>;
    }

    return (
        <>
            <div className="choice-row">
                <Choice image={choices[0]["image"]} onChoiceClick={() => handleClick(0)} />
                <Choice image={choices[1]["image"]} onChoiceClick={() => handleClick(1)} />
                {/*<Choice value={choices[2]} onChoiceClick={() => handleClick(2)} />*/}
            </div>
            {/*<div className="choice-row">*/}
            {/*    <Choice value={choices[3]} onChoiceClick={() => handleClick(3)} />*/}
            {/*    <Choice value={choices[4]} onChoiceClick={() => handleClick(4)} />*/}
            {/*    <Choice value={choices[5]} onChoiceClick={() => handleClick(5)} />*/}
            {/*</div>*/}
            {/*<div className="choice-row">*/}
            {/*    <Choice value={choices[6]} onChoiceClick={() => handleClick(6)} />*/}
            {/*    <Choice value={choices[7]} onChoiceClick={() => handleClick(7)} />*/}
            {/*    <Choice value={choices[8]} onChoiceClick={() => handleClick(8)} />*/}
            {/*</div>*/}
        </>
    )
}

export default Choices;
