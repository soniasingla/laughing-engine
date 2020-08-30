// Basic setup
// Determine winner
// Basic AT & Winner Notification
// Minimax Algorithm

var origBoard;
// It's an array used for tracking pf what's in each sqaure the tic-tac-toe board if it's an X or O.
const huplayer = 'O';
const aiplayer = 'X';
const wincombo = [
    [0,1,2], [3,4,5],[6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
]

const cells = document.querySelectorAll('.cell');

startgame();

// function to start the game
function startgame()
{
    // to hide the display of endgame
    document.querySelector(".endgame").style.display = "none"; 
    // modern way of defining arrays that it should be from 1 to 9
    origBoard = Array.from(Array(9).keys());
    // loop used for removing after endgame and when the user clicks on the replay button   
    for(var i=0;i< cells.length;i++)
    {
        // there should be nothing in the cell when game is restarting
        cells[i].innerText = '';
        // when game is restarting we want to remove the background color
        cells[i].style.removeProperty(`background-color`);
        // event listener at click event
        cells[i].addEventListener('click', turnclick, false);
    }
}

function turnclick(square)
{
    turn(square.target.id, huplayer);
}

function turn(squareID, player)
{
    origBoard[squareID] = player;
    document.getElementById(squareID).innerText = player;
    let gamewon = checkwin(origBoard, player);
    if (gamewon) gameover(gamewon);
}

function checkwin(board, player)
{
    // here we will check the winning combo, if we get that then we won the game otherwise yaya loose
}