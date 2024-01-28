class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        fill(255);
        rect(this.x, this.y, 3, 10);
    }
}