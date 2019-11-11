let img, img2;
let data, data2;

function preload() {
	img = loadImage('assets/DSC01881 copy.JPG');
	data = loadJSON('assets/data.json');
	img2 = loadImage('assets/andy_MOOSK_edit.JPG');
	data2 = loadJSON('assets/data_edit.json');
}

function setup() {
	createCanvas(1200, 600);
	image(img, 0, 0);
	image(img2, 600, 0);
	drawLandmarks();
}

function draw() {
	//image(img, 0, 0);	
}

function drawLandmarks()
{
	fill(255, 204, 0);
	for(let landmark in data.faceLandmarks)
	{
		if(data.faceLandmarks.hasOwnProperty(landmark))
		{
			ellipse(data.faceLandmarks[landmark].x, data.faceLandmarks[landmark].y, 5, 5);
		}
	}
	// ellipse(233.9, 276.7, 5, 5);
	// ellipse(339.9, 260.4, 5, 5);
	// ellipse(282.8, 333.2, 5, 5);
	// ellipse(236.3, 391.6, 5, 5);
	// ellipse(352.1, 378.7, 5, 5);
	for(let landmark in data2.faceLandmarks)
	{
		if(data2.faceLandmarks.hasOwnProperty(landmark))
		{
			ellipse(data2.faceLandmarks[landmark].x+600, data2.faceLandmarks[landmark].y, 5, 5);
		}
	}
}