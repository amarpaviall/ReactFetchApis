import useFetchApi from "./useFetchApi";

function FoodList() {
  const {
    data: items,
    isLoding,
    errorMessage,
  } = useFetchApi("https://www.themealdb.com/api/json/v1/1/categories.php");

  return (
    <div>
      <h1>Categories</h1>
      {isLoding && <div>Loding .......</div>}
      {items && (
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
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
}

export default FoodList;
