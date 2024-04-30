window.onload = function () {
const btn = document.getElementById("btn")
        btn.addEventListener("click", () => {
        
        const temperatura = document.getElementById("temperatura")
        const preciptacao = document.getElementById("preciptacao")
        const humidade = document.getElementById("humidade")
        const entrada = String(document.getElementById("entrada").value)
        const img = document.getElementById("img")
        const nomecidade = document.getElementById('cidade')
        const hora = document.getElementById("hora")
        const aviso = document.getElementById('aviso')
        const main = document.getElementById('main')
        const btn2 = document.getElementById('btn2')
        btn2.addEventListener('click', () => {
                        const aviso = document.getElementById('aviso')
                         const main = document.getElementById('main')
                        main.style.opacity = 1
                        aviso.style.visibility = 'hidden'
                })
        if (entrada.length === 0) {
                aviso.style.visibility = 'visible'
                main.style.opacity = 0.1
                const p = document.getElementById('texto')
                p.textContent = 'Informe a cidade O nome da cidade que pretendes er as previsões climáticas'
        }
        else {

              document.getElementById("entrada").value =  ''
              const cidade = entrada.toLowerCase()
                fetch(`http://localhost:8080/${cidade}`).then(res => {
                        res.json().then(dados => {
                                console.log(dados[ 0 ])
                                const nomeRes = dados[ 0 ].nome
                                const temppRes = dados[ 0 ].temperatura
                                const preciptRes = dados[ 0 ].preciptacao
                                const humidadRes = dados[ 0 ].humidade
                                const horaRes= dados[0].hora
                                temperatura.textContent = temppRes
                                preciptacao.textContent = preciptRes
                                hora.textContent = horaRes
                                nomecidade.textContent = String(nomeRes).toUpperCase()
                                humidade.textContent = humidadRes

                                if (temppRes >= 20 && temppRes < 30) {
                                        img.src = '/icons/icons8-partly-cloudy-day-48.png'
                                }else if (temppRes >= 30 ) {
                                        img.src = '/icons/icons8-summer-48.png'
                                }
                                else if (temppRes >= 10  && temppRes < 20) {
                                        img.src = '/icons/icons8-rainfall-48.png'
                                }else if (temppRes >= 30 ) {
                                        img.src = '/icons/icons8-now-torm-48.png'
                                }
                                else if (temppRes < 0) {
                                        img.src = '/icons/icons8-night-48.png'
                                }

 
                                
                      }).catch(err => {
                               console.log(`Ocorreu um erro ${err}`)
                               const aviso = document.getElementById('aviso')
                               const main = document.getElementById('main')
                              const p = document.getElementById('texto')
                              p.textContent = `Infelizmente A cidade não encotra-se presente no nosso banco de dados `
                               main.style.opacity = 0.1
                               aviso.style.visibility = 'visible'
                             
              })
                }).catch(err => {
                        console.log(`Ocorreu um erro ${err}`)
                        const aviso = document.getElementById('aviso')
                        const main = document.getElementById('main')
                        const p = document.getElementById('texto')
                        p.textContent = 'Infelizmente encotramos um erro ao tentar concetar-se com o nosso Servidor , verifiqe a sua conecção á internet'
                        main.style.opacity = 0.1
                        aviso.style.visibility = 'visible'
              })
        }
})
        
}