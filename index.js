let display = document.querySelector('#display')
let submitBtn = document.querySelector('.submit')
class Add{
    constructor(amount){
        this.amount = amount
    }
}

function addMoney(amount){
    let added = new Add(amount)
    items = []
    items.push(added)


}
const UICtrl = (function(){

    const UISelectors = {
        //Buttons
        cashBtn : '.submit', 
        grocBtn : '.Groc',
        gasBtn : '.Gas',
        utilBtn : '.Utilities',
        rentBtn : 'rent',
        clothesBtn: '.Clothes',
        childBtn: '.Child', 

        //Inputs
        cashIn : '#cash',
        grocIn : '#Groceries',
        gasIn : '#Gas',
        utilIn : '#Utilities',
        rentIn : '#rent',
        clotheIn: '#Clothes',
        childIn: '#Child',

        //Display
        display: '.display'
    }
})

addMoney : 

const addIncome = function(e){
    e.preventDefault()
    const amount = UICtrl.getDescriptionInput();
    const newMoney = 0;

    if(amount.amountInput !== ''){
        let amt = new Add()
         newMoney = amt.addMoney(amount.amountInput)


    }
    let totalAmount = document.createElement('section')
    totalAmount.classList.add('total-amount')
    totalAmount.innerHTML = `<p> ${newMoney}</p>`
    display.appendChild(totalAmount)
    

}
submitBtn.addEventListener('click', addIncome)
//document.querySelector('submit', addIncome)
//document.querySelector('click', addIncome)









