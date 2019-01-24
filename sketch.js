function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(800, 600);
}

function draw() {
  // Set the background to black and turn off the fill color
  background(0);
	strokeWeight(1);

	const SIXTY = 60;
	const SIDELENGTH = 580
	const M_INTVL = height/SIXTY;
 	// time constants
	const h = hour();
	const m = minute();
	const s = second();

	// lines for the minute
	for (let i = 0; i<m; i++){
		const mm = map(m, 0, SIXTY, 0, height);
		const c = map(i, 0, SIXTY, 50, 255);
		stroke(170, 255-c, c);
		line(0, M_INTVL*i, width, M_INTVL*i);
	}

	// position of circle representing second
	const x = map(s, 0, SIXTY, 0, width);
	const y = 10*m + 20;

	// calculated next color
	const line_col = map(m, 0, SIXTY, 50, 255);

	// additional line that is continuously being drawn
	stroke(170, 255-line_col-1, line_col+1);
	line(0, 10*m + 2, x-23, 10*m+2);

	// draw circle
	noStroke()
	const ms = map(s, 0, SIXTY, 50, 255)
	fill(170, 255-line_col-1, line_col+1);
	ellipse(x,y, 55, 55);

	// outer circle size corresponding to hour
	noFill();
	strokeWeight(5);
	stroke(170, 255-line_col-1, line_col+1);
	const mh = map(h, 0, 24, 65, 250);
	ellipse(x,y, mh, mh);

	// outer circle representing limit
	strokeWeight(2);
	stroke(255, 255, 255);
	ellipse(x,y, 250, 250);

}
