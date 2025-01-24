

function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGamePiece.gravity = 0.05;
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea.start();
  }
  
  var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 480;
      this.canvas.height = 270;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.frameNo = 0;
    },
    clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
  /*
var character =
document.getElementById("character");
var block = document.getElementById('block');
function jump() {
    if(character.classList != "animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
       },500); 
}
*/


block.style.animation = "none";
block.style.display = "none";
    
    /*
    var blockLeft =
    parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 % characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("u lose... retry...")
    }
},10) */
var character = document.getElementById("character");
document.addEventListener("click",jump);
function jump(){
    character.classList.add("animate");
    setTimeout(removeJump,300);                                /* 300 = length of animation */
};
function removeJump(){
    character.classList.remove("animate");
}/*
var block = document.getElementById("block");
    var checkDead = setInterval(function(){
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        var characterTop =
        parseInt(window.getComputedStyle(character).
        getPropertyValue("top"));
    
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
      
         }     alert("Game over");
    }}

                                                               /* setInterval(checkDead, 10);  */