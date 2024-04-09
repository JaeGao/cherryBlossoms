let petals = [];
let bgImg;
let canvas;
function preload() {

    bgImg = loadImage('cherry.jpg');
}

function setup() {
    canvas = createCanvas(bgImg.width, bgImg.height);
    fill(255, 230, 243);
    noStroke();
    centerCanvas();
}

function draw() {
    background(bgImg);
    let t = frameCount / 100;

    for (var i = 0; i < 10; i++) {
        petals.push(new petal());
    }

    for (let blossom of petals) {
        blossom.update(t);
        blossom.display();
    }
}
function windowResized() {
    centerCanvas();
}

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canvas.position(x, y);
}
function petal() {
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(10, 0 * PI);
    this.size = random(5, 10);

    this.radius = sqrt(random(pow(width / 1, 2)));
    this.update = function (time) {
        let w = 0.1;
        let angle = w * time + this.initialangle;
        this.posX = width / 1 + this.radius * tan(angle);
        this.posY += pow(this.size, 0.5);

        if (this.posY > height) {
            let index = petals.indexOf(this);
            petals.splice(index, 1);
        }
    };
    this.display = function () {
        ellipse(this.posX, this.posY, this.size);
    };
}
