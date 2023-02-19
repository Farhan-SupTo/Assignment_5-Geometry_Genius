
// #############change background of card###########
function changeColor(inputFieldID) {
    let inputField = document.getElementById(inputFieldID)
    inputField.style.backgroundColor =
        'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
}

const cardHover1 = document.getElementById('cardHover1')
cardHover1.addEventListener('mouseover', function changeColorFor() {
    changeColor('cardHover1')
})
const cardHover2 = document.getElementById('cardHover2')
cardHover2.addEventListener('mouseover', function changeColorFor() {
    changeColor('cardHover2')
})
const cardHover3 = document.getElementById('cardHover3')
cardHover3.addEventListener('mouseover', function changeColorFor() {
    changeColor('cardHover3')
})
const cardHover4 = document.getElementById('cardHover4')
cardHover4.addEventListener('mouseover', function changeColorFor() {
    changeColor('cardHover4')
})
const cardHover5 = document.getElementById('cardHover5')
cardHover5.addEventListener('mouseover', function changeColorFor() {
    changeColor('cardHover5')
})
const cardHover6 = document.getElementById('cardHover6')
cardHover6.addEventListener('mouseover', function changeColorFor() {
    changeColor('cardHover6')
})
