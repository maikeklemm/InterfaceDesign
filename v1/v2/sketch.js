
var mic;
// var amp;
// var volhistory = [];


function setup() {
	createCanvas(windowWidth, windowHeight);
	// createCanvas(400, 400);
	mic = new p5.AudioIn();
	mic.start();
	// amp = new p5.Amplitude();
}

function draw() {
	background(0);
	var vol = mic.getLevel();

	volhistory.push(vol);
	stroke(255);
	noFill();
	beginShape();
	for (var i = 0; i < volhistory.length; i++) {
		var y = map(volhistory[i], 0, 1, height / 2, 0);
		vertex(i, y);
	}
	endShape();
	if (volhistory.lenght > width) {
		volhistory.splice(0, 1);
	}


	// ellipse (windowWidth/2, windowHeight/2, vol*10000 , vol*10000);

	console.log(vol);


}