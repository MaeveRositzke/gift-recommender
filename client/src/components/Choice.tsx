import "../App.css";

interface ChoiceProps {
    image: string;
    onChoiceClick: Function;
}

function Choice({image, onChoiceClick}: ChoiceProps) {
    return (
      <button className="" onClick={onChoiceClick}>{image}
      </button>
    )
}

export default Choice;