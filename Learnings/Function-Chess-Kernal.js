/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   firstLine();
   secondLine();
   thirdLine();
   secondLine();
   thirdLine();
}
function firstLine()
{
   putBeeper();
 twoMoves_Beeper();
  twoMoves_Beeper();
  turnLeft();
}
function twoMoves_Beeper()
{
   move();
  move();
  putBeeper();
}

function secondLine()
{

   move();
   turnLeft();
   move();
   putBeeper();
   twoMoves_Beeper();
   move();
   turnRight();
}
function thirdLine()
{
   move();
   turnRight();
   putBeeper();
   twoMoves_Beeper();
   twoMoves_Beeper();
    turnLeft();
   
}
