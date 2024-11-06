function mascara_telefone() {
    let tel_formatado = document.getElementById("telefone").value;

    if (tel_formatado[0] !== "(") {
        if (tel_formatado[0] !== undefined) {
            document.getElementById("telefone").value = "(" + tel_formatado[0];
        }
    }

    if (tel_formatado[3] !== ")") {
        if (tel_formatado[3] !== undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3];
        }
    }

    if (tel_formatado[9] !== "-") {
        if (tel_formatado[9] !== undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9];
        }
    }
    localStorage.setItem("tele",tel_formatado)
}


function mascara_cep() {
    let cep_formatado = document.getElementById("cep").value;

    if (cep_formatado[2] !== ".") {
        if (cep_formatado[2] !== undefined) {
            document.getElementById("cep").value = cep_formatado.slice(0, 2) + "." + cep_formatado[2];
        }
    }

    if (cep_formatado[6] !== "-") {
        if (cep_formatado[6] !== undefined) {
            document.getElementById("cep").value = cep_formatado.slice(0, 6) + "-" + cep_formatado[6];
        }
    }
    localStorage.setItem("cep",cep_formatado)
}


function mascara_cpf() {
    let cpf_formatado = document.getElementById("cpf").value;

    if (cpf_formatado[3] !== ".") {
        if (cpf_formatado[3] !== undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 3) + "." + cpf_formatado[3];
        }
    }

    if (cpf_formatado[7] !== ".") {
        if (cpf_formatado[7] !== undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 7) + "." + cpf_formatado[7];
        }
    }

    if (cpf_formatado[11] !== "-") {
        if (cpf_formatado[11] !== undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 11) + "-" + cpf_formatado[11];
        }
    }
    localStorage.setItem("cpf",cpf_formatado)
}


function mascara_cnpj() {
    let cnpj_formatado = document.getElementById("cnpj").value;

    if (cnpj_formatado[2] !== ".") {
        if (cnpj_formatado[2] !== undefined) {
            document.getElementById("cnpj").value = cnpj_formatado.slice(0, 2) + "." + cnpj_formatado[2];
        }
    }

    if (cnpj_formatado[6] !== ".") {
        if (cnpj_formatado[6] !== undefined) {
            document.getElementById("cnpj").value = cnpj_formatado.slice(0, 6) + "." + cnpj_formatado[6];
        }
    }

    if (cnpj_formatado[10] !== "/") {
        if (cnpj_formatado[10] !== undefined) {
            document.getElementById("cnpj").value = cnpj_formatado.slice(0, 10) + "/" + cnpj_formatado[10];
        }
    }

    if (cnpj_formatado[15] !== "-") {
        if (cnpj_formatado[15] !== undefined) {
            document.getElementById("cnpj").value = cnpj_formatado.slice(0, 15) + "-" + cnpj_formatado[15];
        }
    }
    localStorage.setItem("cnpj",cnpj_formatado)
}


function mascara_codigo() {
    let codigo_formatado = document.getElementById("codigo").value;

    if (codigo_formatado[2] !== "_") {
        if (codigo_formatado[2] !== undefined) {
            document.getElementById("codigo").value = codigo_formatado.slice(0, 2) + "_" + codigo_formatado[2];
        }
    }

    if (codigo_formatado[5] !== "//") {
        if (codigo_formatado[5] !== undefined) {
            document.getElementById("codigo").value = codigo_formatado.slice(0, 5) + "//" + codigo_formatado[5];
        }
    }

    if (codigo_formatado[13] !== ".") {
        if (codigo_formatado[13] !== undefined) {
            document.getElementById("codigo").value = codigo_formatado.slice(0, 13) + "." + codigo_formatado[13];
        }
    }
     
    localStorage.setItem("codigo",codigo_formatado)
   
    
}




function enviarFormulario(event) {
    event.preventDefault(); 
    
    
    localStorage.setItem("nome", document.getElementById("nome").value);
    localStorage.setItem("endereco", document.getElementById("endereco").value);
    localStorage.setItem("cep", document.getElementById("cep").value);
    localStorage.setItem("cpf", document.getElementById("cpf").value);
    localStorage.setItem("telefone", document.getElementById("telefone").value);
    localStorage.setItem("cnpj", document.getElementById("cnpj").value);
    localStorage.setItem("codigo", document.getElementById("codigo").value);

    alert('informações enviadas'); 

 
    window.location.href = 'enviar.html';
}