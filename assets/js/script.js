function converter() {
    const audio = new Audio('assets/sound/moosound.mp3')
    audio.play()
    let paragrafoResultado = document.querySelector("#resultado_texto")
    let moedaBase = document.querySelector("#select_base").value
    let converterParaMoeda = document.querySelector("#select_converter_para").value
    let valorBase = document.querySelector("#inputValorBase").value
    fetch(`https://api.frankfurter.dev/v1/latest?base=${moedaBase}&symbols=${converterParaMoeda}`)
    .then((resp) => resp.json())
    .then((data) => {
        const quantiaConvertida = (valorBase * data.rates[converterParaMoeda]).toFixed(2)
        paragrafoResultado.textContent = quantiaConvertida;
        document.querySelector(".paragrafo_resultado_moeda").textContent = converterParaMoeda;
    });

}







