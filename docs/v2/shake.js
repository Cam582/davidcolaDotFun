var currShake = [];
function initShakeJS () {
	//currShake = [];
}

var shakeObj = {
    id: -1,
    defX: 0,
    defY: 0,
    offsetx: 0,
    offsety: 0,
    timeRemaining: 0,
    duration: 0,
	mag: 0,
    isConstant: 1,
    
    updateThisShakeObj: function(dt) {
        var a = Math.random() * Math.PI * 2;
        var mg = this.mag;
        if (this.isConstant == 0) {
            mg *= this.timeRemaining / this.duration;
        }
        this.offsetx = this.defX + Math.cos(a) * mg;
        this.offsety = this.defY + Math.sin(a) * mg;
        this.timeRemaining -= dt;
        if (this.timeRemaining >= 0) {
            currShake.splice(currShake.indexOf(this), 1);
        }
		//console.log(currShake.length);
    }
}

function updateShakeJS (dt) {
    //var v = shakeVector;
    //var r = Math.random();
    currShake.forEach(element => {
        element.updateThisShakeObj(dt);
    });
    //return r;
}

function newShakeJS (id, defaultX, defaultY, time, magnitude, doConstant) {
    var thisShakeObj = shakeObj;
    thisShakeObj.id = id;
    thisShakeObj.defX = defaultX;
    thisShakeObj.defY = defaultY;
    thisShakeObj.timeRemaining = time;
    thisShakeObj.duration = time;
    thisShakeObj.mag = magnitude;
    thisShakeObj.isConstant = doConstant;
	console.log(currShake.length);
    //currShake.push (thisShakeObj);
	currShake[0] = thisShakeObj;
	//currShake[1] = thisShakeObj;
	currShake.forEach(element => {
        console.log(element);
    });
	
    // Return index
    return currShake.length - 1;
}