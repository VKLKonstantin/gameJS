
var button=document.querySelector('button');
var h1=document.querySelector('h1');
var a=document.querySelector('a');
var ppps=document.querySelectorAll('p')

/* for(var i=0;i<ppps.length;i++){
    ppps[i].addEventListener('mouseenter', function(event){
        event.target.style.color ='blue'
    })
} */


document.getElementById('wrapper').addEventListener('click', function(event){

    var tagName=event.target.tagName
    if(tagName==='P'){
        event.target.style.color='red'
    }
    if(event.target.classList.contains('color')){
        event.target.style.color= 'blue'
    }
})

document.querySelector('#alert').addEventListener('click', function(event){
    alert('jkjkjnkj')
})
document.querySelector('#confirm').addEventListener('click', function(event){
    var con=confirm('jkjkjnkj')
    if(con){
        alert('kjojijk')
    }
})
document.querySelector('#prompt').addEventListener('click', function(event){
    var con=prompt('jkjkjnkj')
   if(con>=9){
    alert('kjojijk') 
   }
})

var per = [
   {name:'Oleg', age:27},
   {name:'Petr', age:23},
   {name:'Svet',age:33}
]
    var foundPerson = per.find(function(person){
        if(person.age===33){
            return person.age
        }

    })

console.log(foundPerson)

