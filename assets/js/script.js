document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("fez").onclick = function () {
        var lista = document.getElementsByTagName('ul')[0];
        var itens = lista.getElementsByTagName('li');
        if (fez.checked) {
            itens[0].style.display='flex';
            itens[1].style.display='flex';
        } else {
            itens[0].style.display='none';
            itens[1].style.display='none';
        }}
        document.getElementById("nao_fez").onclick = function () {
            var lista = document.getElementsByTagName('ul')[0];
            var itens = lista.getElementsByTagName('li');
            if (nao_fez.checked) {
                itens[2].style.display='flex';
                itens[3].style.display='flex';
            } else {
                itens[2].style.display='none';
                itens[3].style.display='none';
            }}
    
})
