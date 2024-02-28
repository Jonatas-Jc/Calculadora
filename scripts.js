
const numb = document.querySelector('.number').value


function numbers(num) {
    const display = document.querySelector('#screen').value

    document.querySelector('#screen').value = display + num
}

function clean() {
    document.querySelector('#screen').value = ''

}

function plusMinus(){
    const display = document.querySelector('#screen').value

    document.querySelector('#screen').value = display * -1
}

function calculate(){
        display = document.querySelector('#screen').value
        document.querySelector('#screen').value = eval(display)

}
function darkTheme(){
        const inputt = document.querySelector('.inpt')
        const tela = document.querySelector('body')

    console.log(inputt.checked);

    if(inputt.checked){
        tela.classList.add('teste')
    }
    else{
        tela.classList.remove('teste')
    }


}