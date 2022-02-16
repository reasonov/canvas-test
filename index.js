// РИСОВАНИЕ

const canvasPlot = document.getElementById('canvas-plot')
const ctx = canvasPlot.getContext('2d');

function drawCircle(x ,y) {
    ctx.beginPath();

    ctx.arc(x,y,6,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    ctx.closePath();
}

function drawLine(fromX, fromY, toX, toY) {
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
}

// ВЫЗОВ ФУНКЦИЙ И НЕ РИСОВАНИЕ

class Circle {
    constructor(x, y, oldX = 0, oldY = 0) {
        this.x = x;
        this.y = y;
        // this.oldX = oldX;
        // this.oldY = oldY;
        //
        // this.clear = function() {
        //     ctx.clearRect(0, 0, canvasPlot.width, canvasPlot.height)
        // }
        //
        // this.update = function () {
        //     if(this.x > this.oldX) {
        //         this.x -= 1;
        //     } else if(this.x < this.oldX) {
        //         this.x += 1;
        //     }
        //
        //     if(this.y > this.oldY) {
        //         this.y -= 1;
        //     } else if(this.y < this.oldY) {
        //         this.y += 1;
        //     }
        // }
        //
        // this.render = function() {
        //     ctx.beginPath();
        //     drawCircle(this.x, this.y);
        // }
    }
}

let circlesList;

function createCirclesList() {

    // let oldXCoords = [];
    // let oldYCoords = [];

    let xCoords;
    let yCoords;

    let numberOfCircles = randomNumber(2, 8);

    const marginOfCircles = 610 / (numberOfCircles - 1);

    // if(circlesList) {
    //
    //     for(let i = 0; i < circlesList.length; i++) {
    //         oldXCoords.push(circlesList[i].x);
    //         oldYCoords.push(circlesList[i].y);
    //     }
    // }

    circlesList = [];

    for(let i = 0; i < numberOfCircles; i++) {

        if(i === 0) {
            xCoords = 10;
        } else {
            xCoords = Math.round(marginOfCircles * i);
        }
        yCoords = randomNumber(40, 420);

        circlesList[i] = new Circle(xCoords, yCoords);  //oldXCoords[i], oldYCoords[i]
    }

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

}

function createGraph() {

    circlesList.forEach((item, number, arr) => {
        drawCircle(item.x, item.y);
        if(number + 1 < arr.length) {
            drawLine(arr[number + 1].x, arr[number + 1].y, item.x, item.y);
        }
    })

}

createCirclesList();
createGraph();

// ПЕРЕСТРОЕНИЕ

canvasPlot.addEventListener('click', () => {

    ctx.clearRect(0, 0, canvasPlot.width, canvasPlot.height)

    createCirclesList();

    circlesList.forEach((item) => {

        // item.oldX = item.x;
        // item.oldY = item.y;

        // animation.call(item);

    })

    createGraph();

})

// function tick(qwe, zzz) {
//     requestAnimationFrame(tick);
//
//     if(zzz) {
//
//         zzz.update();
//         zzz.clear();
//         zzz.render();
//     }
// }
//
// function animation() {
//
//     requestAnimationFrame(tick);
//
//     const asd = this;
//
//     tick(null, asd)
// }
