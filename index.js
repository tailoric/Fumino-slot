var slot1 = new Image();
var slot2 = new Image();
var slot3 = new Image();
function Slot(element, picturePositions, imageHeight, pictureHeight){
    this.element = element;
    this.picturePositions = picturePositions;
    this.imageHeight = imageHeight;
    this.pictureHeight = pictureHeight;
    this.refreshIntervalId;
    this.slotPosY = 0;
    this.iterator = 0;
    var _this = this;

    this.stopSlot = function(){
        window.clearInterval(_this.refreshIntervalId);
        _this.iterator = 0;
    }
    this.startSlots = function(stopIterationCount){
        _this.refreshIntervalId = setInterval(_this.rollSlots, 1, stopIterationCount);
    }
    this.rollSlots = function(stopIterationCount){
        _this.slotPosY = (_this.slotPosY % _this.imageHeight) + 5;
        _this.element.style.backgroundPosition = '0 '+ _this.slotPosY + 'px';
        if(_this.slotPosY % _this.pictureHeight === 0){
            _this.iterator++;
        }
        if(_this.iterator === stopIterationCount){
            _this.stopSlot()
        }
    }
}

function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
var dy = 50;
var y = 0;
function draw(){
    var ctx = document.getElementById('slots').getContext('2d');
    ctx.clearRect(0,0, 600, 300);
    if(y > 300){
        y = (300-slot1.height);
    }
    if (y > (300 - slot1.height)){
        ctx.drawImage(slot1, 0, y - slot1.height+1, slot1.width, slot1.height);
        ctx.drawImage(slot2, slot1.width , y - slot1.height+1, slot1.width, slot1.height);
        ctx.drawImage(slot2, slot1.width *2, y - slot1.height+1, slot1.width, slot1.height);
    }
    ctx.drawImage(slot1, 0, y, slot1.width, slot1.height);
    ctx.drawImage(slot2, slot1.width, y, slot2.width, slot2.height);
    ctx.drawImage(slot3, slot1.width * 2, y, slot2.width, slot2.height);
    y+= dy
    window.requestAnimationFrame(draw);
}

function init(){
    slot1.src = 'slot1.png';
    slot2.src = 'slot2.png';
    slot3.src = 'slot3.png';
    window.requestAnimationFrame(draw);
}



window.onload = function(){
    init();
}
