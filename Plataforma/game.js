const canvas=document.getElementById("game");
const ctx=canvas.getContext("2d");

canvas.width=innerWidth;
canvas.height=innerHeight;

const music=document.getElementById("music");
const jumpSound=document.getElementById("jumpSound");
const coinSound=document.getElementById("coinSound");

document.body.onclick=()=>music.play();

const player={

x:100,
y:200,
w:45,
h:60,
dx:0,
dy:0,
ground:false,
coins:0

};

const gravity=.8;

const platforms=[

{x:0,y:500,w:600,h:100},
{x:650,y:430,w:250,h:30},
{x:980,y:350,w:250,h:30},
{x:1350,y:280,w:250,h:30}

];

const coins=[

{x:720,y:390},
{x:1060,y:310},
{x:1430,y:240}

];

const enemy={

x:850,
y:390,
w:40,
h:40,
dir:2

};

let camera=0;

let left=false;
let right=false;

document.getElementById("left").ontouchstart=()=>left=true;
document.getElementById("left").ontouchend=()=>left=false;

document.getElementById("right").ontouchstart=()=>right=true;
document.getElementById("right").ontouchend=()=>right=false;

document.getElementById("jump").ontouchstart=()=>{

if(player.ground){

player.dy=-15;
jumpSound.play();

}

}

function update(){

player.dx=0;

if(left) player.dx=-6;
if(right) player.dx=6;

player.dy+=gravity;

player.x+=player.dx;
player.y+=player.dy;

player.ground=false;

platforms.forEach(p=>{

if(player.x+player.w>p.x &&
player.x<p.x+p.w &&
player.y+player.h>p.y &&
player.y+player.h<p.y+25 &&
player.dy>=0){

player.y=p.y-player.h;
player.dy=0;
player.ground=true;

}

});

coins.forEach(c=>{

if(!c.collected &&
player.x<c.x+30 &&
player.x+player.w>c.x &&
player.y<c.y+30 &&
player.y+player.h>c.y){

c.collected=true;
player.coins++;
coinSound.play();

}

});

enemy.x+=enemy.dir;

if(enemy.x>950) enemy.dir=-2;
if(enemy.x<750) enemy.dir=2;

if(player.x<enemy.x+enemy.w &&
player.x+player.w>enemy.x &&
player.y<enemy.y+enemy.h &&
player.y+player.h>enemy.y){

player.x=100;
player.y=200;

}

camera=player.x-150;

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

let g=ctx.createLinearGradient(0,0,0,canvas.height);

g.addColorStop(0,"#64d7ff");
g.addColorStop(1,"#b8ff90");

ctx.fillStyle=g;
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#7CFC00";

platforms.forEach(p=>{

ctx.fillRect(p.x-camera,p.y,p.w,p.h);

});

ctx.fillStyle="gold";

coins.forEach(c=>{

if(!c.collected){

ctx.beginPath();
ctx.arc(c.x-camera,c.y,12,0,7);
ctx.fill();

}

});

ctx.fillStyle="red";

ctx.fillRect(enemy.x-camera,enemy.y,enemy.w,enemy.h);

ctx.fillStyle="#1976D2";

ctx.fillRect(player.x-camera,player.y,player.w,player.h);

ctx.fillStyle="white";
ctx.font="25px Arial";
ctx.fillText("Moedas: "+player.coins,20,40);

}

function loop(){

update();
draw();
requestAnimationFrame(loop);

}

loop();