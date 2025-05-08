function rectangularCollision({ rectangular1, rectangular2 }) {
  return (
    rectangular1.attackBox.possition.x + rectangular1.attackBox.width >=
    rectangular2.possition.x &&
    rectangular1.attackBox.possition.x <=
    rectangular2.possition.x + rectangular2.width &&
    rectangular1.attackBox.possition.y + rectangular1.attackBox.height >=
    rectangular2.attackBox.possition.y &&
    rectangular1.attackBox.possition.y <=
    rectangular2.possition.y + rectangular2.height
  );
}

// !my changes
function determinWinner({ player, enmy, timerId }) {
  document.querySelector("#resultOfGame").style.display = "flex";
  clearTimeout(timerId);
  if (player.health === enmy.health) {
    winner = "Tie";
  } else if (player.health > enmy.health) {
    // enmy.switchSprite("death");
    winner = "Player 1 Wins!";
  } else if (player.health < enmy.health) {
    winner = "Player 2 Wins!";
  }

  document.querySelector("#resultOfGame").innerHTML = `
   <div>${winner}</div> 
  <div style="font-size: 20px">Restarting in 3 seconds...</div>
`;

  setTimeout(() => {
    location.reload();
  }, 3000);
}

let timer = 51;
let timerId;
function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000);
    timer--;
    document.querySelector("#timer").innerHTML = timer;
  }
  if (timer === 0) {
    determinWinner({ player: player1, enmy: enmy, timerId });
  }
}
