class AlienBullet extends Bullet {
    constructor(x, y) {
        super(x, y);
        this.r = 2;
    }
    
    update() {
        this.y += 2;
    }
    hasHitPlayer(player) {
          if (dist(this.x, this.y, player.x, player.y) < this.r + player.r) {
            return true;
        }
        return false
      }
}