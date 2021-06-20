
var mic;
var amp;
var volhistory = [];
var video;
var memoryVideos = [['../input/video_2.mp4'],['../input/video_1.mp4'],['../input/video_4.mp4'],['../input/video_5.mp4'],['../input/video_7.mp4'],['../input/video_8.mp4'],['../input/video_9.mp4']]

function setup() {


	alert('Dir werden gleich Videos vorgespielt. Das Ziel ist es durch eine ruhige Atmung Ruhe zu schaffen und die Videos verschwinden zu lassen. Atme hierfür durch die Nase ein und langsam durch den Mund hörbar aus. Der Kreis visualisiert deinen Atem und wenn du hörbar ausatmest wird er dir dies durch seine Position und Farbe anzeigen.');
	var cnv = createCanvas(windowWidth, windowHeight);
	// cnv.style('display', 'block');
	cnv.style('display', 'inline');
	
	let awenser = confirm('Diese Website benutzt Ihr Mikrofon.');
	
	  
	if (awenser == true){
	mic = new p5.AudioIn();
	mic.start();
	amp = new p5.Amplitude();
	}
	

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
	fill(255, 255, 255);
	ellipse (windowWidth/2, positionX , 100 , 100);

 } 


 else { 
	noStroke();
	fill(89, 117, 255);
	ellipse (windowWidth/2, positionX , 150 , 150);
	
	background('rgba(0%,0%,0%,0.25)');
	setTimeout(noVideo, 100);
	setTimeout(resetSketch, 5000);
	// resetSketch();


	// for (i = 0; positionX > -130; i++) {
	// 	background('rgba(0%,0%,0%,0.25)')
	//   }
	
  } 
function noVideo(){
	
	video = createVideo (['../input/video_black.mp4'],vidLoad);
	video.size(windowWidth,windowHeight);
	video.hide();
	console.log("black video");

}
function resetSketch(){

	video = createVideo (memoryVideos[Math.floor(Math.random() * memoryVideos.length)], vidLoad);
	video.size(windowWidth,windowHeight);
	video.hide();
	console.log("new video");
}


	// // var positionX = (windowHeight/5+(windowHeight/2))*(5*(-vol));
	// var positionX = windowHeight*(2*(-vol));

	// translate(0,windowHeight-(1/5*windowHeight));

	// // ellipse (windowWidth/2, windowHeight/2, vol*10000 , vol*10000);
	// ellipse (windowWidth/2, positionX , 100 , 100);




	console.log(vol);


}

