async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeomrails/api/main/numero_usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

        const data = [
            {

                x: nomeDasRedes,
                y: quantidadeUsuarios,
                type: 'bar'
            }

        ]
    

        const graficos = document.createElement('div')
        graficos.className = 'grafico'
        Document.getElementById('graficos-container').appenChild(graficos)
        Plotly.newPlot(grafico, data)

  }

  quantidadeUsuarios()