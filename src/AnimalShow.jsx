import { useState } from "react";
import bird from "./animalPics/bird.svg";
import cat from "./animalPics/cat.svg";
import cow from "./animalPics/cow.svg";
import dog from "./animalPics/dog.svg";
import gator from "./animalPics/gator.svg";
import horse from "./animalPics/horse.svg";
import heart from "./animalPics/heart.svg";

export const animals = [
    bird, 
    cat, 
    cow,
    dog, 
    gator, 
    horse
];

const AnimalShow = ({ type }) => {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    }

    return (
        <div className="flex justify-center items-center relative border border-gray-300 rounded p-2.5 m-2.5 shadow-md w-52 h-52" onClick={handleClick}>
            <img src={type} alt={type} height="200"/>
            <img className="absolute bottom-5 right-5" src={heart} alt="heart" style={{ width: 10 + 10 * clicks + "px" }}/>
        </div>
    )
};

export default AnimalShow;