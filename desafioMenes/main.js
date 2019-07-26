let menes = ['./assets/vouCair.jpg','./assets/vemTranquilo.jpg','./assets/souLindo.png'];

console.log(menes)

let sortMene = () => {
	let num = Math.floor(Math.random()*3);
	document.canvas.src = menes[num]
}