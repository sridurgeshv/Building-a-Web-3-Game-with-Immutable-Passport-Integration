class PlayerBullet extends Bullet {
    constructor(x, y, up) {
        super(x, y);
        this.up = up;
    }

    update() {
        if(this.up){
            this.y -= 6;
        } else {
            this.y += 6;
        }
    }

    isOffScreen(){
        if(this.y < 0 || this.y > height){
            return true
        }else{
            return false
        }
    }
}