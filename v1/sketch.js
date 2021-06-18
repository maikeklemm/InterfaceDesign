
var mic;
var amp;
var volhistory = [];
var video;
var memoryVideos = [['../input/video_2.mp4'],['../input/video_1.mp4'],['../input/video_4.mp4']]

function setup() {


	var cnv = createCanvas(windowWidth, windowHeight);
	// cnv.style('display', 'block');
	cnv.style('display', 'inline');
	

	mic = new p5.AudioIn();
	mic.start();
	amp = new p5.Amplitude();

	

	//video

	// video = createCapture(VIDEO);

	video = createVideo (memoryVideos[Math.floor(Math.random() * memoryVideos.length)], vidLoad);
	video.size(windowWidth,windowHeight);
	video.hide();
	console.log("video" );


	// resetSketch();
}

// function createVideo (){

// 	video = createVideo (memoryVideos[Math.floor(Math.random() * memoryVideos.length)], vidLoad);
// 	video.size(windowWidth,windowHeight);
// 	console.log("video" );

//  }


function vidLoad() {
	video.loop();
	video.volume(0);
  }

  

function draw() {
	// background(0);


	image(video, 0, 0)

	var vol = mic.getLevel();

	volhistory.push(vol);
	// stroke(255);
	// noFill();
	// beginShape();
	// for (var i = 0; i < volhistory.length; i++) {
	// 	var y = map(volhistory[i], 0, 1, height / 2, 0);
	// 	vertex(i, y);
	// }
	// endShape();
	// if (volhistory.lenght > windowWidth) {
	// 	volhistory.splice(0, 1);
	// }


	var positionX = windowHeight*(2*(-vol));
	translate(0,windowHeight-(1/5*windowHeight));
	console.log(positionX);

if (positionX > -300) { 						
	noStroke();
	fill(255, 204, 0);
	ellipse (windowWidth/2, positionX , 100 , 100);

 } 


 else { 
	noStroke();
	fill(255, 100, 0);
	ellipse (windowWidth/2, positionX , 150 , 150);
	
	background('rgba(0%,0%,0%,0.25)');
	// setTimeout(resetSketch, 3000);
	resetSketch();


	// for (i = 0; positionX > -130; i++) {
	// 	background('rgba(0%,0%,0%,0.25)')
	//   }
	
  } 

function resetSketch(){

	video = createVideo (memoryVideos[Math.floor(Math.random() * memoryVideos.length)], vidLoad);
	video.size(windowWidth,windowHeight);
	video.hide();
	console.log("new video")
}


	// // var positionX = (windowHeight/5+(windowHeight/2))*(5*(-vol));
	// var positionX = windowHeight*(2*(-vol));

	// translate(0,windowHeight-(1/5*windowHeight));

	// // ellipse (windowWidth/2, windowHeight/2, vol*10000 , vol*10000);
	// ellipse (windowWidth/2, positionX , 100 , 100);




	console.log(vol);


}

