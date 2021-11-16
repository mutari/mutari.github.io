//global variabels
let ctx
let player  = new Player();
let canvas;

function initCanvas() {
    canvas = document.querySelector('#canvas')
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx = canvas.getContext('2d');
  
	ctx.beginPath();
	ctx.rect(10, 10, 50, 50);
  	ctx.fillStyle = 'limegreen';
  	ctx.fill();

    draw();
}

function draw() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.draw(ctx);

}

function Point(x = 0, y = 0) {
    this.x = x, this.y = y;
    this.move     = (x, y) => { this.x += x; this.y += y; }
    this.goTo       = (x, y) => { this.x = x; this.y = y; }
}

function Player() {

    let width = 20;

    this.point = new Point();

    this.draw = (ctx) => {
        ctx.beginPath();
        ctx.rect(this.point.x - (width/2), this.point.y - (width/2), width, width);
        ctx.fillStyle = 'limegreen';
        ctx.fill();
    }

}


// events

document.addEventListener('mousemove', event => {
    
    let x = event.offsetX, y = event.offsetY;
    player.point.goTo(x, y);
    draw();

})

document.addEventListener('DOMContentLoaded', event => {
    
    initCanvas()

})

document.addEventListener('resize', event => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})