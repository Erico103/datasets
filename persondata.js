 const countries = document.getElementById('countryList');
 const output = document.getElementById('output');

countries.addEventListener('click',()=>{
    let countryList = randomPersonData.map((list)=>{
        console.log(list.region)
        return `<li>${list.region}</li>`
        
    }).sort().join("")
    output.innerHTML = countryList
})

const capricornButton = document.getElementById('capricornWomen');

capricornButton.addEventListener("click", () => {
  const woman = randomPersonData
    .filter(women => {
      return women.gender === "female";
    })
    .filter(person => {
      if (person.age > 30) {
        return person;
      }
    })
    .map(person => {
      return `
         <div class ="capwoman"
         <div>
         <img src="${person.photo}"
         </div>
         <div>
         
         ${person.name} ${person.surname}
         <br>
         ${person.region}
         
         </div>
         </div>
         `;
    })
    .join("");
  output.innerHTML = woman;
});



