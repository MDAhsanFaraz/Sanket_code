let currentPlayer='X';
let gameState=['','','','','','','','','',''];
let winner=document.getElementById('winner');
const winConditions=[
          [0,1,2],
          [3,4,5],
          [6,7,8],
          [0,3,6],
          [1,4,7],
          [2,5,8],
          [0,4,8],
          [2,4,6]
]

// handle my click
function handleclick()
{
          let td=event.target;
          console.log(td);
          let index=td.getAttribute('index');
          // check if empty 
          if(td.innerHTML=='')
          {
                     td.innerHTML=currentPlayer;
                     gameState[index]=currentPlayer;
                         // check for winner
          // checkWinner();
          checkWinner();
          changePlayer();
          }
          
      
}
function changePlayer()
{
          currentPlayer=currentPlayer=='X'?'O':'X';
}
// initiliaze

// check for winner
function checkWinner()
{
          for(let i=0;i<8;i++)
          {
               var a=winConditions[i][0];     
               var b=winConditions[i][1];     
               var c=winConditions[i][2];  
               if(gameState[a]==currentPlayer&&
                    gameState[b]==currentPlayer&&
                    gameState[c]==currentPlayer)   
                    {
                              winner.innerHTML="Winner is"+currentPlayer;           
                    }
          }
}

// check for draw
function checkDraw()
{
          if(!gameState.includes('')&& winnerDeclared==false)
          {
                    winner.innerHTML='Game is Tied';
          }
}

function init()
{
          var tdCells= document.getElementsByTagName('td');
          console.log(tdCells);
          for(let i=0;i<9;i++)
          {
                    tdCells[i].addEventListener('click',handleclick);
          }
}
init();