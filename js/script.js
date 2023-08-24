
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

function ativaExercicios() {

    const listaExer = document.querySelectorAll('.list-exercicios li');
    const exer = document.querySelectorAll('.js-exercicios');

    if(listaExer.length && exer.length) {

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
    }    
}
ativaExercicios();

function ativaPerguntas() {

    const AccordionList = document.querySelectorAll('[data-accordion] dt');

    if(AccordionList.length) {

        function clicou(){
            this.classList.toggle('ativo');
            this.nextElementSibling.classList.toggle('ativo');
        }
        AccordionList.forEach((item) => {
            item.addEventListener('click', clicou)
        })
    }    
}  
ativaPerguntas(); 

const btnMobile = document.querySelector('.btn-mobile');
const nav1 = document.querySelector("[data-nav='principal']");
const nav2 = document.querySelector("[data-nav='secundaria']");

btnMobile.addEventListener('click', handleClick)

function handleClick() {
    nav1.classList.toggle('ativo');
    nav2.classList.toggle('ativo');
}