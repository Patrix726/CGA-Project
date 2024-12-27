
// Racing Gaming 

```
    var road = createSprite(205,200);
    road.setAnimation("road.png_1");
    road.width=1000;
    road.height=1000;
    road.scale=0.5;
    var car = createSprite(200,300)
    car.setAnimation("car.png_1")
    car.scale=0.5;

    var car2 = createSprite(100,300)
    car2.setAnimation("car2.png_1")
    car2.scale=0.5;

    var car3 = createSprite(325,350)
    car3.setAnimation("car3.png_1")
    car3.scale=0.5;

    var car4 = createSprite(50,30)
    car4.setAnimation("car4.png_1")
    car4.scale=0.5;

    var car5 = createSprite(200,300)
    car5.setAnimation("car5.png_1")
    car5.scale=0.5;

    var car6 = createSprite(100,10)
    car6.setAnimation("car6.png_1")
    car6.scale=0.5;

    var sprite = createSprite(200,200)
    sprite.setAnimation("sprite.png_1")
    sprite.scale=0.5;

    var timer=0;
    var timer2=0;
    var time=0;
    var gamestate=1;

    function draw(){

        //keymovements
        // here move to right
        if (keyDown("right")){
            car.x=car.x+10;
        }
        if (keyDown("left")){
            car.x=car.x-10;
        }

        // clashes
        if (car.isTouching(car2) || car.isTouching(car3) || car.isTouching(car4) || car.isTouching(car5) || car.isTouching(car6)){
            var screen = createSprite(200,200);
            screen.setAnimation("screen")
        }
        
        // To make sure cars is not overlapping others
        if (car2.isTouching(car3) || car2.isTouching(car4) || car2.isTouching(car5) || car2.isTouching(car6)){
        car2.y=randomNumber(0,0);
        car2.x=randomNumber(400,0);
        }

        if (car3.isTouching(car2) || car3.isTouching(car4) || car3.isTouching(car5) || car3.isTouching(car6)){
        car3.y=randomNumber(0,0);
        car3.x=randomNumber(400,0);
        }

        if (car4.isTouching(car5) || car4.isTouching(car6)){
        car4.y=randomNumber(0,0);
        car4.x=randomNumber(400,0);
        }
        
        if (car5.isTouching(car6)){
        car5.y=randomNumber(0,0);
        car5.x=randomNumber(400,0);
        }

        if (car2.y > 405){
            car2.y=randomNumber(0,0);
            car2.x=randomNumber(400,0);
        }

        if (car3.y > 405){
            car3.y=randomNumber(0,0);
            car3.x=randomNumber(400,0);
        }

        if (car4.y > 405){
            car4.y=randomNumber(0,0);
            car4.x=randomNumber(400,0);
        }

        if (car4.y > 405){
            car4.y=randomNumber(0,0);
            car4.x=randomNumber(400,0);
        }

        if (car5.y > 405){
            car5.y=randomNumber(0,0);
            car5.x=randomNumber(400,0);
        }

        if (car6.y > 405){
            car6.y=randomNumber(0,0);
            car6.x=randomNumber(400,0);
        }
        
        if (timer > 44){
            var screen3 =createSprite(200,200);
            screen3.setAnimation("screen3.png_1");
            screen3.scale = 1;
        }

        drawSprites();
        if (keyDown("space")){
            timer2 = world.seconds;
            gamestate = 2;
            
        }
        if (gamestate===2){
            timer=World.seconds-timer2;
            car2.velocityY=10;
            car3.velocityY=10;
            car4.velocityY=10;
            car5.velocityY=10;
            car6.velocityY=10;
            sprite.visible=false;
        }
        // timer text
        fill("while");
        textSize(20);
        text("Timer: "+timer,10,10,80,20);
        textFont("Courier New");
        }
```