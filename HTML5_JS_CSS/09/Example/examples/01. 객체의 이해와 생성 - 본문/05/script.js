function square( w, h ) {
	this.width = w;
	this.height = h;
	this.faceColor = "yellow";
	this.borderColor = "black";
	this.position = { x: 100, y: 100 };
}

var mysquare = new square( 20, 30 );

delete mysquare.depth;
document.writeln(mysquare.depth);