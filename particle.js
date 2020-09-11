class Particle {
    constructor(x,y,radius) {
      var options = {
          restitution:1,
            density:1,
        friction:0
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
        this.color=color(random(0,255),random(0,255),random(0,255));

      ellipseMode(RADIUS);
      
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };