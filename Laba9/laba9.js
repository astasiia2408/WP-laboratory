const URL = 'https://usersdogs.dmytrominochkin.cloud/dogs';
const Src = 'https://usersdogs.dmytrominochkin.cloud';
let close = document.getElementById('close');
let body = document.getElementsByTagName('body')[0];

let a = 0;

fetch(URL)
.then(result => result.json())
.then(dogs => {

        dogs.forEach(dog => {
            
            main.insertAdjacentHTML("beforebegin", 
            `<div class="grid open_modal" onclick="Display(this)"  value="${a}">
            <img src="${Src}${dog.dogImage}" alt="dog">
            <div class="textAling">
            <h1>${dog.title}</h1>
            <p>${dog.sex}</p>
            </div>
            </div>`);
            a++;

        });    
})
.catch(err => console.error(err));
    
function Display(info) {
   
     a = info.getAttribute('value');

    
    fetch(URL)
    .then(result => result.json())
    .then(dogs => {
    
    dogs.forEach(dog => {
                
        document.getElementById("link").src = Src + dogs[a].dogImage;
        document.getElementById("name").innerHTML = dogs[a].title;
        document.getElementById("sex").innerHTML = dogs[a].sex;
        document.getElementById("age").innerHTML = dogs[a].age;
        document.getElementById("description").innerHTML = dogs[a].description;
        
    
        backside.classList.add('sight'); 
        body.classList.add('sections'); 

        }); 

    }) 
    .catch(err => console.error(err));
  }

close.onclick = function() {  
    backside.classList.remove('sight');
    body.classList.remove('sections'); 
};