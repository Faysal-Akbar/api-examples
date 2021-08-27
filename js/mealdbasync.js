const searchFood = async () => {
    const searchField = document.getElementById('search-field');
    const serachText = searchField.value;
    //clear data
    searchField.value = '';
    if(serachText == ''){
        
    }
    else{
        //load data 
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${serachText}`;
    const Response = await fetch(url);
    const data = await Response.json();
    displaySearchResult(data.meals);

    // fetch(url)
    // .then(Response => Response.json())
    // .then(data => displaySearchResult(data.meals))
    }
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` 
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div>
              <h5>${meal.strMeal}</h5>
              <p>${meal.strInstructions.slice(0,250)}</p>
            </div>
          </div>
        `
        searchResult.appendChild(div);
    })
}

// start meal id work 

const loadMealDetail = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    const Response = await fetch(url);
    const data = await Response.json();
    displayMealDetail(data.meals[0])
    // fetch(url)
    // .then(Response => Response.json())
    // .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    const mealDetails = document.getElementById('meal-detail');
    mealDetails.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5>${meal.strMeal}</h5>
              <p>${meal.strInstructions.slice(0,250)}</p>
            </div>
    `
    mealDetails.appendChild(div);
}