//Posição da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//Velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variaveis da Raquete
let xRaquete = 10;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//Variaveis da Raquete Oponente
let xRaqueteOponente = 580;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo

let raquetada;
let ponto;
let trilha;

function preload(){
    trilha = loadSound("trilha.mp3")
    raquetada = loadSound("raquetada.mp3")
    ponto = loadSound("ponto.mp3")
}


function setup() {
  createCanvas(600, 400);
  trilha.loop()
}

function draw() {
  background(0);
  mostraBolinha();
  movimentoDaBolinha();
  colisãoDaBolinha();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentoRaquete();
  colisãoRaquete(xRaquete, yRaquete); 
  colisãoRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentaRaqueteOponente();
  incluiPlacar()
  marcaPonto()
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro)
  
}

function movimentoDaBolinha(){
  xBolinha += velocidadeXBolinha
  yBolinha += velocidadeYBolinha

}

function colisãoDaBolinha(){
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1;}
      
}

function mostraRaquete(x, y){
   rect(x, y, raqueteComprimento, raqueteAltura)

}

function movimentoRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }

}

function colisãoRaquete(x, y){
  colidiu =
   collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }

}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente -raqueteComprimento / 2 -90
  yRaqueteOponente += velocidadeYOponente
  
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(130, 10, 40, 20); 
  fill(255);
  text(meusPontos, 150, 26);
  fill(color(255, 140, 0));
  rect(430, 10, 40, 20); 
  fill(255);
  text(pontosDoOponente, 450, 26);
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1
    ponto.play()
  }
  if(xBolinha < 10){
    pontosDoOponente += 1
    ponto.play()
  }
}





  