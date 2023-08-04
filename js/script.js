function ativaexercicios() {
    
    const divs = document.querySelectorAll('.caixa-e');
    if(divs.length) {

        function ativarConteudo(e) {
            const div = e.currentTarget
            div.nextElementSibling.classList.toggle('ativo');
        }
    
        divs.forEach((div) => {
            div.addEventListener('click', ativarConteudo);
        });
    }
}  
ativaexercicios();  

const icones = document.querySelectorAll('.icones i');
const conteudoReceita = document.querySelectorAll('.js-conteudo-receita')

function ativaIcon(i, index) {
    conteudoReceita.forEach((conteudo) => {
        conteudo.classList.remove('ativo');
    })
    conteudoReceita[index].classList.add('ativo');
    icones.forEach((i) => {
        i.classList.remove('ativo')
    })
    i.classList.add('ativo')
}

icones.forEach((i, index) => {
    i.addEventListener('click', () => {
        ativaIcon(i, index)
    })
})
