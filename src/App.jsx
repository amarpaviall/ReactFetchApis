import { useState } from "react";
import "./App.css";
import FoodList from "./FoodList";
import JokeList from "./JokeList";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// Create a new QueryClient instance
const queryClient = new QueryClient();

function App() {
  // const [foodListVisible, setFoodListVisible] = useState(false);
  // const [jokeVisible, setJokeVisible] = useState(false);
  const [visibleComponent, setVisibleComponent] = useState(null);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="buttons">
        <button
          onClick={() =>
            setVisibleComponent((prev) => (prev === "food" ? null : "food"))
          }
        >
          Food Category List
        </button>
        <button
          onClick={() =>
            setVisibleComponent((prev) => (prev === "joke" ? null : "joke"))
          }
          className="marleft"
        >
          Show me Joke
        </button>
      </div>
      {visibleComponent === "food" && <FoodList />}
      {visibleComponent === "joke" && <JokeList />}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
