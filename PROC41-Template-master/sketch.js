const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var thunder, thunder1, thunder2, thunder3, thunder4;
var thunderCreatedFrame;
var umbrella;
var maxDrops = 100;
var drops = [];

function preload() {
    thunder1 = loadImage("images/images/1.png");
    thunder2 = loadImage("images/images/2.png");
    thunder3 = loadImage("images/images/3.png");
    thunder4 = loadImage("images/images/4.png");

}

function setup() {
    createCanvas(700, 700);
    engine = Engine.create();
    world = engine.world;


    umbrella = new Umbrella(400, 330, 400);
    if (frameCount % 400 === 0) {

        for (var i = 0; i < maxDrops; i++) {
            drops.push(new Drop(random(0, 700), random(0, 700)));
        }

    }
}
function draw() {
    background("black");
    Engine.update(engine);

    rand = Math.round(random(1, 4));
    if (frameCount % 40 === 0) {
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(350, 350), random(100, 100), 10, 10);
        switch (rand) {
            case 1: thunder.addImage(thunder1);
                break;
            case 1: thunder.addImage(thunder2);
                break;
            case 3: thunder.addImage(thunder3);
                break;
            case 4: thunder.addImage(thunder4);
                break;
            default: break;
        }

        thunder.scale = random(0.3, 0.5)

    }
drawSprites();
    if (thunderCreatedFrame + 10 === frameCount && thunder) {
        thunder.destroy();
    }



    umbrella.display();
    for (var i = 1; i < maxDrops; i++) {
        drops[i].updatedrop();
        drops[i].drawdrop();

    }
}

