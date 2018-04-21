Animation(true);
let count = 0;
let PI_length = 10000;
let wid = Canvas.Element.width/2.5;
let hei = Canvas.Element.height/2.5;
let color = [	"rgb(255, 102, 255)","rgb(153, 153, 255)","rgb(0, 102, 255)","rgb(0, 255, 255)","rgb(0, 255, 153)",
							"rgb(102, 255, 102)","rgb(204, 255, 102)","rgb(255, 204, 0)","rgb(255, 153, 5","rgb(255, 80, 80)"
						];
let repeats = 100; //Speed drawing mode yaaaaaaaaaaaaas

function setup() {
	ClearCanvasOnLoop = false;

	Canvas.Rectangle((-wid-100),(-hei-100),(wid+100)*2,(hei+100)*2,"fill","black")
	Canvas.ctx.lineWidth = wid/20;
	for(let i=0;i<=9;i++) {
	const ang1 = AM.map(i-0.2,0,10,0,Math.PI*2);
	const ang2 = AM.map(i+0.2,0,10,0,Math.PI*2);
	const ang3 = AM.map(i,0,10,0,Math.PI*2);
	let p1 = new V2D(Math.cos(ang1)*(wid+wid/20) , Math.sin(ang1)*(hei+hei/20));
	let p2 = new V2D(Math.cos(ang2)*(wid+wid/20) , Math.sin(ang2)*(hei+hei/20));
	let p3 = new V2D(Math.cos(ang3)*(wid+wid/20) , Math.sin(ang3)*(hei+hei/20));

	Canvas.ctx.beginPath();
	Canvas.ctx.moveTo(p1.x,p1.y);
	Canvas.ctx.bezierCurveTo(p3.x, p3.y, p3.x, p3.y,p2.x,p2.y);
	Canvas.ctx.strokeStyle = color[i];
	Canvas.ctx.stroke();
}
	Canvas.alpha(0.2);

	Canvas.ctx.lineWidth = 1;
}

function draw() {
	if(FILE == undefined || count == PI_length) {return}

	for(let i=0;i<repeats;i++) {
		let d = DIDGIT.substring(count,count+2);
		let		d1 =  (d - d%10)/10;
		let		d2 = 			d%10;
		let p1 = calcPos(d1,true,);
		let p2 = calcPos(d2,true);
		let center = p1.add(p2).add(new V2D(0,0)).div(3);
		Canvas.ctx.beginPath();
		Canvas.ctx.moveTo(p1.x,p1.y);
		Canvas.ctx.bezierCurveTo(center.x, center.y, center.x, center.y,p2.x,p2.y);
		// Canvas.ctx.strokeStyle = color[d1];
		Canvas.Gradient(p1.x,p1.y,p2.x,p2.x,[color[d1],color[d2]]);
		Canvas.ctx.stroke();
	count++;
}
}

function download(){
		var download = document.getElementById("download");
		var image = Canvas.Element.toDataURL("image/png")
                    .replace("image/png", "image/octet-stream");
			  download.setAttribute("href", image);
			  //download.setAttribute("download","archive.png");
	}

function calcPos(index,rand) {
	let i = (rand) ? index-0.4 : index;
	if(rand) {i += count/(PI_length*1.2)}
	// let i = index;
	// 		i = (rand) ? i+(AM.RandInt(0,400)-200)/200 : i;
	const ang = AM.map(i,0,10,0,Math.PI*2);
	return new V2D(Math.cos(ang)*wid , Math.sin(ang)*hei);
}

function NoLoop() {
	Animation(false);
}
function Loop() {
	Animation(true);
}
function reload() {
	location.reload();
}
