let matriz_render = document.getElementById("logical-game")
let grid;
let cols = 43
let rows = 173

function generate_grid(cols, rows){
  let arr = new Array(cols)

  for (let i = 0; i < arr.length; i++ ){
    arr[i] = new Array(rows)
  }
  
  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      arr[i][j] = Math.floor(Math.random() * 2 )
    }
  }

  return arr
}

function draw(){
  matriz_render.innerHTML = ""
  let next = new Array(cols)

  for (let i = 0; i < cols; i++){
    let linha = document.createElement("tr")
    next[i] = new Array(rows)
    for (let j = 0; j < rows; j++){
      let coluna = document.createElement("td")
      coluna.textContent = grid[i][j]
      
      if (grid[i][j] == 0){
        coluna.classList.add("dead-cell")
      }
      if (grid[i][j] == 1){
        coluna.classList.add("live-cell")
      }

      linha.appendChild(coluna)
    }
    matriz_render.appendChild(linha)
  }
    
  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      let neighbours = countNeighbours(grid, i, j)
      
      let state = grid[i][j]

      if (state == 0 && neighbours == 3){
        next[i][j] = 1
      } else if (state == 1 && (neighbours < 2 || neighbours > 3)){
        next[i][j] = 0
      } else{
        next[i][j] = state
      }
    }
  }

  grid = next
   
}

function countNeighbours(grid, x, y){
  let sum = 0;

  for (let i = -1; i < 2; i++){
    for (let j = -1; j < 2; j++){
      let row = (x + i + cols) % cols
      let col = (y + j + rows) % rows
      sum += grid[row][col]
    }
  }
  sum -= grid[x][y]
  return sum
}

function start(){
  grid = generate_grid(cols, rows)
  setInterval(function(){
    draw();
  }, 25)
}

start()
