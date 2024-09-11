const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res= await fetch(url)
    const dados = await res.jeson()
    console.log(dados);

}

vizualizarInformacoesGlobais()
