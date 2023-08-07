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


function ativaReceitas() {

    const icones = document.querySelectorAll('.icones i');
    const conteudoReceita = document.querySelectorAll('.js-conteudo-receita')

    if(icones.length && conteudoReceita.length) {

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
    }    
}
ativaReceitas();

const listaExer = document.querySelectorAll('.list-exercicios li');
const exer = document.querySelectorAll('.js-exercicios');

exer[0].classList.add('ativo');
function ativaConteudoE(index) {
    exer.forEach((exer) => {
        exer.classList.remove('ativo');
    })
    exer[index].classList.add('ativo');
}

listaExer.forEach((Lexer, index) => {
    Lexer.addEventListener('click', () => {
        ativaConteudoE(index)
    });
})