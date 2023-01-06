// Set up canvas and context
let cnv = document.getElementById("tic-tac-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Variables
let wins = 0;
let losses = 0;

let player = 1;

let array = [
    [0, 0, 0], 
    [0, 0, 0], 
    [0, 0, 0]
];

let mouseX, mouseY;

let winNumEl = document.getElementById("win-num");
let lossNumEl = document.getElementById("loss-num");

// OnLoad
window.addEventListener("load", drawBackground);

function drawAll() {
    // Draw Background
    drawBackground();
    checkArray();
    checkWin();
    checkSquareFill();
}

// Drawing the Lines
function drawBackground() {
    ctx.fillStyle = "white";
    ctx.fillRect (0, 0, 600, 600);

    // Draw vert line 1
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.beginPath(); 
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 600);
    ctx.stroke(); 

    // Draw vert line 2
    ctx.moveTo(400, 0);
    ctx.lineTo(400, 600);
    ctx.stroke();
    
    // Draw hori line 1
    ctx.moveTo(0, 200);
    ctx.lineTo(600, 200);
    ctx.stroke();

    // Draw hori line 2
    ctx.moveTo(0, 400);
    ctx.lineTo(600, 400);
    ctx.stroke();

    ctx.closePath();
}

function checkArray(){
    for (let i = 0; i < array.length; i++) {
        for (let t = 0; t < array[i].length; t++) {
            if (array[i][t] === 1) {
                drawX(i, t);
            } else if (array[i][t] === -1) {
                drawO(i, t);
            }
        }
    }
}

function checkWin() {
    // check row
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] === array[i][1] && array[i][0] === array[i][2] && array[i][0] !== 0) {
            if (i === 0) {
                ctx.lineWidth = 2;
                ctx.strokeStyle = "green";
                ctx.beginPath();
                ctx.moveTo(25, 100);
                ctx.lineTo(575, 100);
                ctx.stroke();
            } else if (i === 1) {
                ctx.lineWidth = 2;
                ctx.strokeStyle = "green";
                ctx.beginPath();
                ctx.moveTo(25, 300);
                ctx.lineTo(575, 300);
                ctx.stroke();
            } else if (i === 2) {
                ctx.lineWidth = 2;
                ctx.strokeStyle = "green";
                ctx.beginPath();
                ctx.moveTo(25, 500);
                ctx.lineTo(575, 500);
                ctx.stroke();
            }
            if (array[i][0] === 1) {
                wins++;
                winNumEl.innerHTML = wins;
                performResetAfterDelay();
            } else if (array[i][0] === -1) {
                losses++;
                lossNumEl.innerHTML = losses;
                performResetAfterDelay();
            }
        }
    }

    // check column
    for (let i = 0; i < array.length; i++) {
        if (array[0][i] === array[1][i] && array[0][i] === array[2][i] && array[0][i] !== 0) {
            if (i === 0) {
                ctx.lineWidth = 2;
                ctx.strokeStyle = "green";
                ctx.beginPath();
                ctx.moveTo(100, 25);
                ctx.lineTo(100, 575);
                ctx.stroke();
            } else if (i === 1) {
                ctx.lineWidth = 2;
                ctx.strokeStyle = "green";
                ctx.beginPath();
                ctx.moveTo(300, 25);
                ctx.lineTo(300, 575);
                ctx.stroke();
            } else if (i === 2) {
                ctx.lineWidth = 2;
                ctx.strokeStyle = "green";
                ctx.beginPath();
                ctx.moveTo(500, 25);
                ctx.lineTo(500, 575);
                ctx.stroke();
            }
            if (array[i][0] === 1) {
                wins++;
                winNumEl.innerHTML = wins;
                performResetAfterDelay();
            } else if (array[i][0] === -1) {
                losses++;
                lossNumEl.innerHTML = losses;
                performResetAfterDelay();
            }
        }
    }

    // check diagonals
    if (array[0][0] === array[1][1] && array[0][0] === array[2][2] && array[0][0] !== 0) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(575, 575);
        ctx.stroke();
        if (array[0][0] === 1) {
            wins++;
            winNumEl.innerHTML = wins;
            performResetAfterDelay();
        } else if (array[0][0] === -1) {
            losses++;
            lossNumEl.innerHTML = losses;
            performResetAfterDelay();
        }
    } else if (array[0][2] === array[1][1] && array[0][2] === array[2][0] && array[0][2] !== 0) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = "green";
        ctx.beginPath();
        ctx.moveTo(575, 25);
        ctx.lineTo(25, 575);
        ctx.stroke();
        if (array[0][2] === 1) {
            wins++;
            winNumEl.innerHTML = wins;
            performResetAfterDelay();
        } else if (array[0][2] === -1) {
            losses++;
            lossNumEl.innerHTML = losses;
            performResetAfterDelay();
        }
    }
}

function checkSquareFill() {
    
}

function drawX(row, column) {
    let startX, startY;
    if (row === 0) {
        startY = 150;
    } else if (row === 1) {
        startY = 350;
    } else if (row === 2) {
        startY = 550;
    }

    if (column === 0) {
        startX = 50;
    } else if (column === 1) {
        startX = 250;
    } else if (column === 2) {
        startX = 450;
    }

    // Draw X
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + 100, startY - 100);
    ctx.stroke();

    ctx.moveTo(startX, startY - 100);
    ctx.lineTo(startX + 100, startY);
    ctx.stroke();

    ctx.closePath();
}

function drawO(row, column) {
    let x, y;
    if (row === 0) {
        y = 100;
    } else if (row === 1) {
        y = 300;
    } else if (row === 2) {
        y = 500;
    }

    if (column === 0) {
        x = 100;
    } else if (column === 1) {
        x = 300;
    } else if (column === 2) {
        x = 500;
    }

    // Draw Circle
    ctx.lineWidth = 2;
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
}

function performResetAfterDelay() {
    // 1000 ms delay
    window.setTimeout(resetEverything, 1000)
  
}
  
function resetEverything() {
    array = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    drawBackground();
}

// Event Listener
window.addEventListener("click", checkMousePosition);
function checkMousePosition(event) {
    // Get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect(); 
      
    // Calc mouse coordinates using mouse event and canvas location info
    mouseX = event.clientX - cnvRect.left;
    mouseY = event.clientY - cnvRect.top;
    
    if (mouseX <= 600) {
        if (mouseY <= 600) {
            // Variables
            let i = 0;
            let t = 0;
            
            // Mouse X's position
            if (mouseX <= 200) {
                t = 0;
            } else if (mouseX <= 400) {
                t = 1;
            } else if (mouseX <= 600) {
                t = 2;
            }

            // Mouse Y's position
            if (mouseY <= 200) {
                i = 0;
            } else if (mouseY <= 400) {
                i = 1;
            } else if (mouseY <= 600) {
                i = 2;
            }
                
            // Check player
            if (player === 1) {
                if (array[i][t] === 0) {
                    array[i][t] = 1;
                }
            } else if (player === 0) {
                if (array[i][t] === 0) {
                    array[i][t] = -1;
                }
            
            }

            // Change players
            if (player === 1) {
                player = 0;
            } else {
                player = 1;
            }

            console.log(mouseX);
            console.log(mouseY);
            console.log(array);
            console.log(player);
            // Draw All
            drawAll();
        }
    }
}