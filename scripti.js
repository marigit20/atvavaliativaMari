addEventListener("DOMContentLoaded", ()=>{
    var recebetel = localStorage.getItem("tele")
    document.getElementById("telefone").innerHTML=recebetel
})

addEventListener("DOMContentLoaded", ()=>{
    var recebecep = localStorage.getItem("cep")
    document.getElementById("cep").innerHTML=recebecep
})

addEventListener("DOMContentLoaded", ()=>{
    var recebecpf = localStorage.getItem("cpf")
    document.getElementById("cpf").innerHTML=recebecpf
})

addEventListener("DOMContentLoaded", ()=>{
    var recebecnpj = localStorage.getItem("cnpj")
    document.getElementById("cnpj").innerHTML=recebecnpj
})

addEventListener("DOMContentLoaded", ()=>{
    var recebecodigo = localStorage.getItem("codigo")
    document.getElementById("codigo").innerHTML=recebecodigo
})


