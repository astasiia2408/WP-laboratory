const URL = 'https://usersdogs.dmytrominochkin.cloud/dogs';
const Src = 'https://usersdogs.dmytrominochkin.cloud';
let body = $('body').get(0);

let a = 0;

  $.ajax(URL, {
      success: function(info){

           info.forEach(dog =>{

            main.insertAdjacentHTML("beforebegin",
             `<div class = "grid open_modal" onclick ="Display(this)" value="${a}">
             <img src = "${Src}${dog.dogImage}">
             <div class = "textAlign">
             <h2>${dog.title}</h2>
             <h4>${dog.sex}</h4>
            </div>
            </div>`);
            a++;


           });

      }


  });
    
function Display(info) {
   
     a = info.getAttribute('value');

    
    $.ajax(URL, {
    success: function(info){
        $('#link')[0].src = Src + info[a].dogImage;
        $('#name')[0].innerHTML = info[a].title;
        $('#sex')[0].innerHTML = info[a].sex;
        $('#age')[0].innerHTML = info[a].age;
        $('#description')[0].innerHTML = info[a].description; 

        backside.classList.add('sight'); 
        body.classList.add('sections'); 

    }

    })
}  
    

$('#close').click(function(){
    backside.classList.remove('sight');
    body.classList.remove('sections');
})