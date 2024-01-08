document.getElementById("iniciarConversa").addEventListener("click", function() {
    var numero = document.getElementById("numero").value;
    // Remover caracteres não numéricos
    var numeroFormatado = numero.replace(/\D/g, "");
    // Redirecionar para a conversa no WhatsApp
    window.open("https://api.whatsapp.com/send?phone=55" + numeroFormatado);
    $('#cep').mask('00000-000');
    $('#numero').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00', { reverse: true });
    $('#money').mask("#.##0,00", { reverse: true });
});

        $('#cep').mask('00000-000');
        $('#numero').mask('(00) 00000-0000');
        $('#cpf').mask('000.000.000-00', { reverse: true });
        $('#money').mask("#.##0,00", { reverse: true });