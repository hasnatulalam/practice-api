const loadCountry=()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data))
}
loadCountry()
const displayCountries=countries=>{
 const countryShow =document.getElementById('countries')
 
 for (const country of countries){

const div=document.createElement('div')
 div.classList.add('country')
 /* const countryP=document.createElement('p')
  countryP.innerText=country.name;
div.appendChild(countryP)
const h3=document.createElement('h3')
h3.innerText=country.capital;
div.appendChild(h3)
  const button=<button onclick="loadCountryName()(${'country.mame'})">details</button>;
  button.appendChild(div) */
  div.innerHTML=`
  <h3>${country.name}</h3>
  <p>${country.capital}<p>

  <button onclick="loadCountryByName('${country.name}')">Details</button>
  `
  
countryShow.appendChild(div)
}
}
/* const loadCountryName=name=>{
  const url=`https://restcountries.eu/rest/v2/name/${name}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displaySingleCountry(data[0]))
}
const displaySingleCountry=country=>{
  console.log(country)
  const countryDetails=document.getElementById('country-details')
  
 
  countryDetails.innerHTML=`
  
  <h4>${country.name}</h4>
    <p>population:${country.population}</p>
    <img  width="200px"src="${country.flag}">
   `
} */
const loadCountryByName=name=>{
  const url=`https://restcountries.eu/rest/v2/name/${name}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>displayCountryDetail(data[0]))
} 
const displayCountryDetail =country=>{
  console.log(country)
  const countryDiv =document.getElementById('country-detail');
  countryDiv.innerHTML =`
  <h4>${country.name}</h4>
  <p>population:${country.population}</p>
  <img  width="200px"src="${country.flag}">
 `
}
