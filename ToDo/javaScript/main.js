let status = {
	click: false
}
let sendTarefas = () => {
	status.click = true
	let tarefaDigitada = document.getElementById('tarefa').value
	console.log(tarefaDigitada)
	let lista  = document.getElementById("lu").innerHTML;
	lista = lista + '<li>' + tarefaDigitada + '</li>'
	document.getElementById("lu").innerHTML = lista;
	console.log(status.click)
	if (status.click != false) {
		tarefaDigitada = ''
		status.click = false
		console.log(tarefaDigitada)
		console.log(status.click)
	}
	else {
		console.log('não entrou')
	}
}
