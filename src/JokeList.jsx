import useFetchApi from "./useFetchApi";

function JokeList() {
  const {
    data: joke,
    isLoding,
    errorMessage,
  } = useFetchApi("https://official-joke-api.appspot.com/jokes/random");
  return (
    <div>
      {isLoding && <div>Loding .......</div>}
      {joke && <h3>{joke.setup + "" + joke.punchline}</h3>}
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
}

export default JokeList;
