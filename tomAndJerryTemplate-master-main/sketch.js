var gato,animgato1
var rato,animrato1
var fundo,imgfundo




function preload() {
    //carregue as imagens aqui
    animgato1 = loadImage("cat1.png","cat2.png","cat3.png","cat4.png")
    imgfundo = loadImage("garden.png")
    animrato1 = loadImage("mouse1.png","mouse2.png","mouse3.png","mouse4.png")




}

function setup(){
    createCanvas(1000,800);
    rato = createSprite(200,600)
    rato.addImage(animrato) 
    rato.scale = 0.2

    gato = createSprite(870,600)
    gato.addImage(animgato) 
    gato.scale = 0.15

    //crie os sprites de gato e rato aqui
    
}

function draw() {
    background(rgb)
   
   
    if(gato.isTouching(rato)){
        gato.velocityX = 0
        gato.setAnimation


    }

    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui


}
