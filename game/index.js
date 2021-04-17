let $start=document.querySelector('#start')
let $game=document.querySelector('#game')

$start.addEventListener('click', startGame)

function startGame(){
 $start.classList.add('hide')
$game.style.backgroundColor = '#fff'
renderBox()
}
function renderBox(){
   let box=document.createElement('div')
   
}
