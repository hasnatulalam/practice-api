const searchFood = ()=>{
    const searchField =document.getElementById('search-field')
    const searchValue =searchField.value;
     searchField.value='';
     const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;
     fetch(url)
     .then(res=>res.json())
     .then(data=>displayFood(data.meals))

}
const displayFood = meals=>{
    const searchResult =document.getElementById('search-result');
     for(const meal of meals ){
        //  console.log(meal)
        const div =document.createElement('div')
        div.classList.add('col')
        div.innerHTML=`
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
    </div>
        
        
        
                           
       `;
       searchResult.appendChild(div)
     }
}
 const loadMealDetail=mealId=>{
     
     const  url =`https://www.themealdb.com/api/json/v1/1/search.php?i=${mealId}`
     fetch(url)
      .then(res=>res.json())
     .then(data=>displaySingleMeal(data.meals[0]))
 }
 const displaySingleMeal =meal=>{
     console.log(meal)
    const mealDetails=document.getElementById('meal-details')
    const div=document.createElement('div')
    div.classList.add('col')
    
    div.innerHTML=`
    
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
  
        `;
        mealDetails.appendChild(div)

 }
