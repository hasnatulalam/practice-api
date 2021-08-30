const loadQuots=()=>{
    fetch('https://randomuser.me/api/?results=5') 
    .then(res=>res.json())
    .then(data=>displayQuote(data))
}
loadQuots()
const displayQuote=buddy=>{
    const quoteElement =document.getElementById('quote');
    const buddies =buddy.results
     for(const buddy of buddies){
     console.log(buddy.name.first,buddy.name.last,buddy.email)
         
     
     const div =document.createElement('p')
       div.innerText =`${buddy.name.first}${buddy.name.last} ${buddy.email}`
       quoteElement.appendChild(div)
     }
}

