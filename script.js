//criando variaveis para ler os botões e os conteudos no cardápio
const botoesMenu = document.querySelectorAll('.botaoMenu'); 
const conteudos = document.querySelectorAll('.conteudo');


// estrutura para executar as funções e adicionar aos parametros( foreach )

botoesMenu.forEach((botaoMenu, indice) => {
    botaoMenu.addEventListener('click' , () => {
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botaoMenu);

        esconderConteudoAnterior();
         
        mostrarConteudoRelacionado(indice);

    })
})

function mostrarConteudoRelacionado(indice) {
    conteudos[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderConteudoAnterior() {
    const conteudoAtivo = document.querySelector('.ativa');
    conteudoAtivo.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
