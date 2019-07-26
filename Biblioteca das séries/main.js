function handerMain(){
//criando elementos e armazeno em variaveis
	let series = []
	const form = document.createElement('form')
	const input = document.createElement('input');
	const sub = document.createElement('input');
	const input2 = document.createElement('input');
	const div = document.createElement('div');
	const pesquisa = document.createElement('input');
	const btnpesquisa = document.createElement('input');
//seto atributos aos inputs
	btnpesquisa.setAttribute('type', 'submit')
	sub.setAttribute('type', 'submit')
	input.setAttribute('placeholder', 'série')
	input2.setAttribute('placeholder', 'descrição')
	pesquisa.setAttribute('placeholder', 'pesquisar')
//insiro os elementos no html
	div.appendChild(input)
	div.appendChild(input2)
	div.appendChild(sub)
	div.appendChild(pesquisa)
	div.appendChild(btnpesquisa)
	form.appendChild(div)
//evento de click para inserir serie no html
	sub.addEventListener("click", function(){
	//evita que o botão reinicie a pagia toda vez que é clicado 
		event.preventDefault();
	//criando elementos e armazeno em variaveis
		let p1 = document.createElement('p');
		let titlebtnAdd = document.createElement('p');
		let titlebtnDel = document.createElement('p');
		let h1 = document.createElement('h1');
		let div = document.createElement('div');
		let btnDel = document.createElement('button');
		let btnAdd = document.createElement('button');
	//inserindo texto digitado nos inputs em variaveis
		let txtInput = document.createTextNode(input.value);
		let txtInput2 = document.createTextNode(input2.value);
	//atribuindo emojs nas variaveis dos botões deletar e adicinar
		titlebtnAdd = document.createTextNode('👍');
		titlebtnDel = document.createTextNode('👎');
	//inserindo elementos no html
		btnAdd.appendChild(titlebtnAdd)
		btnDel.appendChild(titlebtnDel)
		p1.appendChild(txtInput2)
		h1.appendChild(txtInput)
		div.appendChild(btnAdd)
		div.appendChild(btnDel)
		div.appendChild(h1)
		div.appendChild(p1)
		form.appendChild(div)
	//adicionando evento ao botão de adicionar 
		btnAdd.addEventListener("click", function(){
		//evita que o botão reinicie a pagia toda vez que é clicado 
			event.preventDefault();
		//insere valores dos input no array
			series.push({
				titulo:txtInput.nodeValue,
				descricao:txtInput2.nodeValue
			})
		//remove a div assim que os valores são inseridos no array
			if((div !== '')){
				div.remove(div);
			}
			else{

			}
			console.log(series)
			//innerHTML = series
		})
	//zerando valores dos inputs 
		input.value = ''
		input2.value = ''
	//adicionando evento ao botão de remover
		btnDel.addEventListener("click", function(){
		//evita que o botão reinicie a pagia toda vez que é clicado
			event.preventDefault();
		//remove a div 
			if((div !== '')){
				div.remove(div);
				console.log('removeu')
			}
			else{
				console.log('não removeu')
			}
		})
	});
	//adicionando evento ao botão de pesquisa
	btnpesquisa.addEventListener("click", function(){
	//evita que o botão reinicie a pagia toda vez que é clicado
		event.preventDefault();
	//selecionando elementoo por ID
		let serieSelect = document.getElementById('serieSelect');
	//criando for para pesquisar series 
		let textPesqui = pesquisa.value;
		let series_cont = series.length;
  	let titulos = [];
  	let descricao = [];
  	let cont = 0;
  	for (let i=0; i < series_cont; i++){
  		titulos.push(series[i].titulo);
  		descricao.push(series[i].descricao);
  		if(textPesqui != titulos[cont]){
  			console.log('não é')
  			serieSelect.innerHTML = '<h1>Série não encontrada</h1>' 
  			cont++
  		}
  		else{
  			serieSelect.innerHTML = '<h1>' + titulos[cont] + '</h1>' + '<p>' + descricao[cont] + '</p>'
  			console.log('é')
  			console.log('titulos',titulos[cont])
  			cont++
  		}
  	}
  	//zerando valores dos inputs 
		pesquisa.value = ''
	})
	//inserindo elemento form no corpo do site
	document.body.appendChild(form)
}
//chamando a função assim que a pagina é carregada 
window.onload = handerMain()