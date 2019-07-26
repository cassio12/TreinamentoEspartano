let box; 
let checkbox1;
let checkbox2;
let questions = [
	{
		quest: 'o ceu é azul ?',
		options: ['sim', 'não'],
		res: 'sim'
	},
	{
		quest: 'a água molha ?',
		options: ['sim', 'não'],
		res: 'sim'
	},
	{
		quest: 'o vento sopra ?',
		options: ['sim', 'não'],
		res: 'sim'
	}
]
console.log(questions)
	function criarElemento(ele, texto) {
		let tag = document.createElement(ele)
		let conteudo = document.createTextNode(texto);
		console.log(tag)
		console.log(conteudo)

		let tagConteudo = tag.appendChild(conteudo);
		console.log(tagConteudo)
		return tagConteudo
		document.body.appendChild(tag)
	}

function renderMain() {
	let input = criarElemento('input', questions[0].options[0])
	let checkSim = criarElemento('p', questions[0].quest)
	let form = document.createElement('form')
	form.appendChild(checkSim)
	form.appendChild(checkSim)
	//let checkNao = criarElemento('input', questions[0].options[1])
	// function start(){
	// 	let texto = questions[0].options[0]
	// 	checkbox1 = criarElemento('p', texto)
	// 	checkbox2 = criarElemento('input', questions[0].options[1])
	// 	console.log(checkbox1, checkbox2)
	// 	box = document.getElementById('box').innerHTML = questions[0].quest
	// 	document.getElementById('input1').innerHTML = checkbox1
	// 	document.getElementById('input2').innerHTML = checkbox2
	// 	console.log(box)
	// }
	// checkSim.addEventListener("click", function() {
 //  	alert("Hello World!");
	// });

	// function nextQuest() {
	// 	console.log('clicou')

	// 	box = document.getElementById('box')
		
	// 	if (box.innerHTML == questions[0].quest){
	// 		box.innerHTML = questions[1].quest
	// 	}
	// 	else if (box.innerHTML == questions[1].quest){
	// 		box.innerHTML = questions[2].quest
	// 	}
	// 	else {
	// 		box.innerHTML = 'fim das perguntas'
	// 	}
	// }
	document.body.appendChild(form)
}
// document.body.appendChild(renderMain())