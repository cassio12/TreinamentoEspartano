function renderMain(){
	let dados = [
		{
			"opportunity":
			{
				"id":149774,
				"name":"Consultor de Vendas",
				"published_at":"2019-07-29 11:09:01 -0300",
				"company_name":"Casamarela Noivas",
				"permalink":"http://trampos.co/oportunidades/149774-consultor-de-vendas"
			}
		},
		{
			"opportunity":
			{
				"id":149951,
				"name":"Designer Júnior",
				"published_at":"2019-07-29 10:58:37 -0300",
				"company_name":"BPF ",
				"permalink":"http://trampos.co/oportunidades/149951-designer-junior"
			}
		},
		{
			"opportunity":
			{
				"id":149771,
				"name":"Desenvolvedor Back-end ",
				"published_at":"2019-07-29 10:54:47 -0300",
				"company_name":"Askme | Marketing de Incentivo e Experiência de Marca",
				"permalink":"http://trampos.co/oportunidades/149771-desenvolvedor-back-end"
			}
		},
		{
			"opportunity":
			{
				"id":149949,
				"name":"Analista de Marketing Digital",
				"published_at":"2019-07-29 10:45:31 -0300",
				"company_name":"Em-motion",
				"permalink":"http://trampos.co/oportunidades/149949-analista-de-marketing-digital"
			}
		},
		{
			"opportunity":
			{
				"id":149940,
				"name":"Designer",
				"published_at":"2019-07-29 10:28:24 -0300",
				"company_name":"XP Investimentos",
				"permalink":"http://trampos.co/oportunidades/149940-designer"
			}
		},
		{
			"opportunity":
			{
				"id":149767,
				"name":"Desenvolvedor Front-end",
				"published_at":"2019-07-29 10:10:52 -0300",
				"company_name":"Projeto Internet",
				"permalink":"http://trampos.co/oportunidades/149767-desenvolvedor-front-end"
			}
		},
		{
			"opportunity":
			{
				"id":149721,
				"name":"Estagiário em Prospecção de Vendas",
				"published_at":"2019-07-29 10:09:48 -0300",
				"company_name":"Gaveteiro.com.br",
				"permalink":"http://trampos.co/oportunidades/149721-estagiario-em-prospeccao-de-vendas"
			}
		},
		{
			"opportunity":
			{
				"id":149719,
				"name":"Desenvolvedor Full Stack Pleno",
				"published_at":"2019-07-29 10:09:32 -0300",
				"company_name":"tc",
				"permalink":"http://trampos.co/oportunidades/149719-desenvolvedor-full-stack-pleno"
			}
		},
		{
			"opportunity":
			{
				"id":149903,
				"name":"Designer Freelancer ",
				"published_at":"2019-07-29 09:35:07 -0300",
				"company_name":"Social Tailors",
				"permalink":"http://trampos.co/oportunidades/149903-designer-freelancer"
			}
		},
		{
			"opportunity":
			{
				"id":149902,
				"name":"Analista de BI",
				"published_at":"2019-07-29 08:30:06 -0300",
				"company_name":"Mullen Lowe",
				"permalink":"http://trampos.co/oportunidades/149902-analista-de-bi"
			}
		}
	]

	console.log('dados', dados);
	let listaDeVagas = document.getElementById('listaDeVagas')
	let ulLista = document.createElement('ul')
	let cont = 0;
	let array = ['ola','tchau','quem','como']
	let nObj = dados.length;
	let idsVaga = [];
	listaDeVagas.appendChild(ulLista)
	console.log(ulLista)
	
	ulLista.style.height = "auto"
	// ulLista.style.listStyle = "none"
	ulLista.style.margin = "0"
	ulLista.style.display = "flex"
	ulLista.style.flexDirection = "column"


	for (let i = 0; i <= nObj; i++) {
		let text = document.createElement('p')
		// text.style.fontSize = "1em"
		namesVaga = dados[cont].opportunity.name
		text = document.createTextNode(namesVaga)
		let liLista = document.createElement('li')
		liLista.style.height = "8.5vh"
		liLista.appendChild(text)
		ulLista.appendChild(liLista)
		// liLista.appendChild(idsVaga)
		// console.log(idsVaga) 
		liLista = document.createTextNode('array[cont]')
		// console.log(liLista) 
		console.log(namesVaga)
		// if (idsVaga == dados[cont].opportunity.id){
		// 	console.log(dados[cont].opportunity.name)
		// 	console.log(dados[cont].opportunity.published_at)
		// 	console.log(dados[cont].opportunity.company_name)
		// 	console.log(dados[cont].opportunity.permalink)
		// }
		// else{
		// 	console.log('não é 	')
		// }
		// console.log(idsVaga) 	
		// console.log(opportunity)
		cont++
	}
	// console.log(opportunity)
	// console.log(idsVaga)
}
document.onload = renderMain()