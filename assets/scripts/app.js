window.onload = function() {
    // Obtém o elemento <textarea>
    var textarea = document.getElementById("decodifica_entrada_texto");

    // Adiciona um evento de foco ao <textarea>
    textarea.addEventListener("focus", function() {
        // Seleciona todo o texto dentro do <textarea>
        this.select();
    });
};

function tornarVisivelBotao() {
    // Torna visível o botão de cópia
    var botaoCopiar = document.querySelector('.decodifica_saida_botao');
    botaoCopiar.style.display = 'block';

    // Torna invisíveis o parágrafo e a imagem
    var paragrafo = document.getElementById('decodifica_saida_texto2');
    var imagem = document.querySelector('.decodifica_saida_imagem');

    paragrafo.style.display = 'none';
    imagem.style.display = 'none';
}

function tornarInvisivelBotao() {
    // Torna visível o botão de cópia
    var botaoCopiar = document.querySelector('.decodifica_saida_botao');
    botaoCopiar.style.display = 'none';

    // Torna invisíveis o parágrafo e a imagem.
    var paragrafo1 = document.getElementById('decodifica_saida_texto1');
    var paragrafo2 = document.getElementById('decodifica_saida_texto2');    
    var imagem = document.querySelector('.decodifica_saida_imagem');
    
    paragrafo1.innerText = 'Nenhuma mensagem encontrada.';
    paragrafo2.style.display = 'block';
    imagem.style.display = 'block';
    
    // Seleciona o elemento textarea pelo seu ID
    var textarea = document.getElementById('decodifica_entrada_texto');

    // Define o texto desejado para ser inserido no textarea
    var texto = 'Digite seu texto.';

    // Define o valor do atributo 'value' do textarea para o texto desejado
    textarea.value = texto;
}

function criptografar() {
               
    // Obtém o texto digitado na textarea
    var entradaTexto = document.getElementById("decodifica_entrada_texto").value;  
     
    if (entradaTexto != "Digite seu texto.") {        

        // Aplica as substituições de acordo com as especificações
        var textoModificado = entradaTexto.replace(/e/g, "enter")
                                            .replace(/i/g, "imes")
                                            .replace(/a/g, "ai")
                                            .replace(/o/g, "ober")
                                            .replace(/u/g, "ufat");      

        // Exibe uma mensagem 
        alert("O Texto foi criptografado!");

        // Chama a função tornarVisivelBotao
        tornarVisivelBotao();

        // Exibe o texto criptografado na tag <p>
        document.getElementById("decodifica_saida_texto1").innerText = textoModificado;

    } else {

        alert("Digite um texto válido!");

    }

}

function descriptografar() {
        
    // Obtém o texto digitado na textarea
    var entradaTexto = document.getElementById("decodifica_entrada_texto").value;

    if (entradaTexto != "Digite seu texto.") {

        // Aplica as substituições de acordo com as especificações
        var textoModificado = entradaTexto.replace(/enter/g, "e")
                                                  .replace(/imes/g, "i")
                                                  .replace(/ai/g, "a")
                                                  .replace(/ober/g, "o")
                                                  .replace(/ufat/g, "u");
    

        // Exibe uma mensagem 
        alert("O Texto foi descriptografado!");

        // Chama a função tornarVisivelBotao
        tornarVisivelBotao();

        // Exibe o texto criptografado na tag <p>
        document.getElementById("decodifica_saida_texto1").innerText = textoModificado;

    } else {

        alert("Digite um texto válido!");

    }
}

function copiar_area_transferencia() {
    
    // Obtém o texto da tag <p> decodifica_saida_texto
    var textoParaCopiar = document.getElementById("decodifica_saida_texto1").innerText;
    
    // Cria um elemento de texto temporário para copiar o conteúdo
    var textareaTemporaria = document.createElement("textarea");
    textareaTemporaria.value = textoParaCopiar;
    
    // Adiciona o elemento temporário ao corpo do documento
    document.body.appendChild(textareaTemporaria);
    
    // Seleciona o conteúdo do elemento temporário
    textareaTemporaria.select();
    
    // Copia o conteúdo selecionado para a área de transferência
    document.execCommand("copy");
    
    // Remove o elemento temporário
    document.body.removeChild(textareaTemporaria);
    
    // Exibe uma mensagem de confirmação
    alert("Texto copiado para a área de transferência!");

    // Chama a função tornarVisivelBotao
    tornarInvisivelBotao();

}

