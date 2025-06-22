const maze = [
  "###############",
  "#     #     # #",
  "# ### # ### # #",
  "# #   #   #   #",
  "# # ##### ### #",
  "#     #   #   #",
  "##### # ##### #",
  "#   # #     # #",
  "# ### ##### # #",
  "#     #   #   #",
  "# ### ### ### #",
  "#   #     #   #",
  "### ##### # ###",
  "#     #     E #",
  "###############"
];

const mazeContainer = document.getElementById("maze");
const message = document.getElementById("message");

let playerPos = { x: 1, y: 1 };

function renderMaze() {
  mazeContainer.innerHTML = "";

  for (let y = 0; y < maze.length; y++) {
    for (let x = 0; x < maze[y].length; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      if (maze[y][x] === "#") cell.classList.add("wall");
      if (maze[y][x] === "E") cell.classList.add("exit");
      if (x === playerPos.x && y === playerPos.y) cell.classList.add("player");

      mazeContainer.appendChild(cell);
    }
  }
}

function move(dx, dy) {
  const newX = playerPos.x + dx;
  const newY = playerPos.y + dy;

  if (maze[newY][newX] === "#") return;

  playerPos = { x: newX, y: newY };
  renderMaze();

  if (maze[newY][newX] === "E") {
    message.textContent = "Vous récupérez la clé rouge";
    window.removeEventListener("keydown", handleKey);
  }
}

function handleKey(e) {
  switch (e.key) {
    case "ArrowUp": move(0, -1); break;
    case "ArrowDown": move(0, 1); break;
    case "ArrowLeft": move(-1, 0); break;
    case "ArrowRight": move(1, 0); break;
  }
}

window.addEventListener("keydown", handleKey);
renderMaze();
