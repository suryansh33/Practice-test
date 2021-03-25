class Ball{
constructor(x,y,r){
var options={
    restitution:0.12
}
this.ball=Bodies.circle(x,y,r,options)
this.r=r;
World.add(world,this.ball);
}
display(){
    var pos=this.ball.position
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.r)
}
}