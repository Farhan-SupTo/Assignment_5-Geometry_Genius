let serial = 0
function displayData(btnInnerText, inputData) {
    const tableContainer = document.getElementById('table-container')
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${btnInnerText}</td>

    <td>${inputData}cm<sup>2</sup> </td>
    <td><button style='background-color: #008CBA'>Convert to m<sup>2</sup> </button> </td>
    `

    tableContainer.appendChild(tr)
}

function calData(cardInputFiled1, cardInputFiled2) {
    const cardInputFiledInner = document.getElementById(cardInputFiled1).innerText
    const cardValueParse = parseFloat(cardInputFiledInner)
    const cardInputFiledInner2 = document.getElementById(cardInputFiled2).innerText
    const cardValueParse2 = parseFloat(cardInputFiledInner2)
    const cardCalResult = .5 * cardValueParse * cardValueParse2

    return cardResult2dig = cardCalResult.toFixed(2)

}

// ###############################################################
function calForTriRec(InputFiled1, InputFiled2) {
    const cardValue1 = document.getElementById(InputFiled1).value
    cardValue1.value ='';
    if (isNaN(cardValue1) || cardValue1=='') {
        alert('Please provide a number')
        return;
    }

    const cardValueParse1 = parseFloat(cardValue1)
    
    const cardValue2 = document.getElementById(InputFiled2).value
    cardValue2.value = '';
    if (isNaN(cardValue2) || cardValue1=='' ) {
        alert('Please provide a number')
        return;
    }
    const cardValueParse2 = parseFloat(cardValue2)
    
    return cardValueTriRec= [cardValueParse1,cardValueParse2]

}
// ############### 1 Triangle Calculation ############
document.getElementById('card1').addEventListener("click", function () {
    


    const card1Title = document.getElementById('card1Title').innerText
    calForTriRec('card1w','card1I')

    card1Result2dig=.5 * cardValueTriRec[0] *cardValueTriRec[1]
    serial += 1

    displayData(card1Title, card1Result2dig)

})
// ############### 2 Rectangle Calculation ############
document.getElementById('card2').addEventListener("click", function () {
    


    const card2Title = document.getElementById('card2Title').innerText
    calForTriRec('card2b','card2I')
    card2Result2dig=cardValueTriRec[0] *cardValueTriRec[1]
    serial += 1

    displayData(card2Title, card2Result2dig)

})

// ##################################################################
// ############### 3 Parallelogram Calculation ############
document.getElementById('card3').addEventListener("click", function () {
    serial += 1

    const card3Title = document.getElementById('card3Title').innerText

    const card3InputFiled1 = document.getElementById('card3InputFiled1').innerText
    const card3Value1 = parseFloat(card3InputFiled1)

    const card3InputFiled2 = document.getElementById('card3InputFiled2').innerText
    const card3Value2 = parseFloat(card3InputFiled2)
    const card3Result = card3Value1 * card3Value2
    const card3Result2dig = card3Result.toFixed(2)

    displayData(card3Title, card3Result2dig)

})
// #################### 4 Rhombus Calculation ###########
document.getElementById('card4').addEventListener("click", function () {
    serial += 1

    const card4Title = document.getElementById('card4Title').innerText
    calData('card4InputFiled1', 'card4InputFiled2')

    displayData(card4Title, cardResult2dig)

})


// ############### 5 Pentagon Calculation ##########
document.getElementById('card5').addEventListener("click", function () {
    serial += 1

    const card5Title = document.getElementById('card5Title').innerText
    calData('card5InputFiled1', 'card5InputFiled2')

    displayData(card5Title, cardResult2dig)

})

// ############## 6 Ellipse section##########
document.getElementById('card6').addEventListener("click", function () {

    serial += 1
    const card6Title = document.getElementById('card6Title').innerText

    const card6InputFiled1 = document.getElementById('card6InputFiled1').innerText
    const card6Value1 = parseFloat(card6InputFiled1)

    const card6InputFiled2 = document.getElementById('card6InputFiled2').innerText
    const card6Value2 = parseFloat(card6InputFiled2)
    const card6Result = 3.1415 * card6Value1 * card6Value2
    const card6Result2dig = card6Result.toFixed(2)

    displayData(card6Title, card6Result2dig)

})
