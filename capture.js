let width = 320;
let height = 0;

let streaming = false;

let video, canvas, photo, startButton;

function setup(){
	video = document.getElementById('video');
	canvas = document.getElementById('canvas');
	photo = document.getElementById('photo');
	startButton = document.getElementById('startButton');

	navigator.mediaDevices.getUserMedia({video: true, audio: false})
	.then((stream)=>{
		video.srcObject = stream;
		video.play();
	})
	.catch((error)=>{
		console.log('Error: ' + error);
	});

	video.addEventListener('canplay', (e)=>{
		if(!streaming){
			height = video.videoHeight / (video.videoWidth/width);

			video.setAttribute('width', width);
	        video.setAttribute('height', height);
	        canvas.setAttribute('width', width);
	        canvas.setAttribute('height', height);
	        streaming = true;
		}
	}, false);

	startButton.addEventListener('click', function(ev){
      takePhoto();
      ev.preventDefault();
    }, false);

    //clearPhoto();
}

function clearPhoto(){
	let context = canvas.getContext('2d');
	context.fillStyle = '#AAA';
	context.fillRect(0, 0, canvas.width, canvas.height);
	let data = canvas.toDataURL('image/png');
	photo.setAttribute('src', data);
}

function takePhoto(){
	let context = canvas.getContext('2d');
	canvas.width = width;
	canvas.height = height;
	context.drawImage(video, 0, 0, width, height);
	let data = canvas.toDataURL('image/png');
	photo.setAttribute('src', data);
}

window.addEventListener('load', setup, false);