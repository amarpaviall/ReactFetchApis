import { useQuery } from "react-query";
//import useFetchApi from "./useFetchApi";

function FoodList() {
  // const {
  //   data: items,
  //   isLoding,
  //   errorMessage,
  // } = useFetchApi("https://www.themealdb.com/api/json/v1/1/categories.php");

  const {
    data: items,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery("items", fetchPosts, {
    retry: false,
  });

  function fetchPosts() {
    return fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(
      (response) => response.json()
    );
  }

  return (
    <div>
      <h1>Categories</h1>
      {isLoading && <div>Loading...</div>}
      {isSuccess && (
        <ul>
          {items.categories.map((item) => (
            <li key={item.idCategory}>
              <img src={item.strCategoryThumb} />
              {/* <a href={`${item.idCategory}`}>{item.strCategory}</a> */}
              <h3>{item.strCategory}</h3>
              <p>{item.strCategoryDescription}</p>
            </li>
          ))}
        </ul>
      )}
      {isError && <div>{error.message}</div>}
    </div>
  );
}

export default FoodList;
