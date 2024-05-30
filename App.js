const navbar = document.querySelector(".nav");
const container = document.querySelector(".container");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const searchInput = document.querySelector("#searchInput");

const fetchData = async () => {
  let api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian");
  api = await api.json();
  console.log(api.meals);

  container.innerHTML = api.meals.map(item => `
    <div class="meal-item">
      <img src=${item.strMealThumb} alt="${item.strMeal}">
      <p>${item.strMeal}</p>
    </div>`).join("");
};

const Indian = async () => {
  let api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=indian");
  api = await api.json();
  console.log(api.meals);

  container.innerHTML = api.meals.map(item => `
    <div class="meal-item">
      <img src=${item.strMealThumb} alt="${item.strMeal}">
      <p>${item.strMeal}</p>
    </div>`).join("");
};

const american = async () => {
  let api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=american");
  api = await api.json();
  console.log(api.meals);

  container.innerHTML = api.meals.map(item => `
    <div class="meal-item">
      <img src=${item.strMealThumb} alt="${item.strMeal}">
      <p>${item.strMeal}</p>
    </div>`).join("");
};

btn1.addEventListener("click", fetchData);
btn2.addEventListener("click", Indian);
btn3.addEventListener("click", american);

const searchFood = async () => {
  const query = searchInput.value.trim();
  if (!query) {
    container.innerHTML = ""; // Clear the container if the input is empty
    return;
  }

  let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  api = await api.json();
  console.log(api.meals);

  if (api.meals) {
    container.innerHTML = api.meals.map(item => `
      <div class="meal-item">
        <img src=${item.strMealThumb} alt="${item.strMeal}">
        <p>${item.strMeal}</p>
      </div>`).join("");
  } else {
    container.innerHTML = "<p>No results found</p>"; // Display message if no meals found
  }
};

searchInput.addEventListener("input", searchFood);
