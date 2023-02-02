import React, { useState } from "react";
import AnimalShow from "./AnimalShow";
import { animals } from "./AnimalShow";

const getRandomAnimal = () => {
    return animals[Math.floor(Math.random() * animals.length)]
}

const App = () => {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    }

    return (
        <div className="flex flex-col items-center">
            <button className="bg-green-500 border border-green-600 text-white rounded p-2" onClick={handleClick}>Add Animal</button>
            <div className="flex flex-row flex-wrap justify-center">
            {
                animals.map((animal, idx) => {
                    return <AnimalShow type={animal} key={idx}/>
                })
            }
            </div>
        </div>
    )
}

export default App;