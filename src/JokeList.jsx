import { useQuery } from "react-query";
//import useFetchApi from "./useFetchApi";

function JokeList() {
  const {
    data: joke,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery("joke", fetchJoke, {
    // staleTime: 6000,
    refetchOnWindowFocus: false,
  });

  function fetchJoke() {
    return fetch("https://official-joke-api.appspot.com/jokes/random").then(
      (response) => response.json()
    );
  }
  // const {
  //   data: joke,
  //   isLoding,
  //   errorMessage,
  // } = useFetchApi("https://official-joke-api.appspot.com/jokes/random");
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isSuccess && <h3>{joke.setup + "" + joke.punchline}</h3>}
      {isError && <div>{error.message}</div>}
    </div>
  );
}

export default JokeList;
