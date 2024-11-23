import React, { useState } from "react";
import "./App.css";
import FoodList from "./FoodList";
import JokeList from "./JokeList";

function App() {
  const [foodListVisible, setFoodListVisible] = useState(false);
  const [jokevisible, setJokevisible] = useState(false);
  return (
    <>
      <div className="buttons">
        <button
          onClick={() =>
            setFoodListVisible((prevFoodListVisible) => !foodListVisible)
          }
        >
          Food Category List
        </button>
        <button
          onClick={() => setJokevisible((prevJokevisible) => !jokevisible)}
          className="marleft"
        >
          Show me Joke
        </button>
      </div>
      {foodListVisible && <FoodList />}
      {jokevisible && <JokeList />}
    </>
  );
}

export default App;
