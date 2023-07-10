const tipValues = document.querySelectorAll('.tip-value');
const errorBillMsg = 'Add valid value for bill';

const emptyValue = (e) => {
  e.value = '';
}

bill.addEventListener('click', () => {
  emptyValue(bill);
});

person.addEventListener('click', () => {
  emptyValue(person);
});

bill.addEventListener('change', (e) => {
  if(bill.value && bill.value != 0){
    tipValues.forEach( tip => {
      tip.disabled = false;
    });
    reset.disabled = false;
  } else {
    tipValues.forEach( tip => {
      tip.disabled = true;
    });
    console.log('Not a valid value');
    errorBill.textContent = errorBillMsg;
  }
})

tipValues.forEach( tip => {
  tip.addEventListener('change', (e) => {
    removeClass(tipValues, 'selected');
    if(e.target.value){
      person.disabled = false;
      tip.classList.add('selected');
    }
  }) 
});

person.addEventListener('keyup', (e) => {
  if(e.target.value){
    let billValue = Number(bill.value);
    let tipValue =  Number(document.querySelector('.selected').value);
    let totalPerson = Number(e.target.value);
    let totalTip = calcTipPerson(calcTip(billValue, tipValue), totalPerson);
    let total = calcTotalPerson(calcTotal(billValue, calcTip(billValue, tipValue)), totalPerson);
    totalTipForPerson.textContent = totalTip.toFixed(2);
    totalForPerson.textContent = total.toFixed(2);
  }
});

reset.addEventListener('click', () => {
  bill.value = '0';
  person.value = '0';
  totalTipForPerson.textContent = '0.00';
  totalForPerson.textContent = '0.00';
})

const removeClass = (element, className) => {
  element.forEach( item => item.classList.remove(className));
}

const calcTip = (billVal, tipVal) => {
  return billVal * tipVal / 100;
}

const calcTotal = (bill, tip) => {
  return bill + tip
}

const calcTipPerson = (totalTip, person) => {
  return totalTip / person
}

const calcTotalPerson = (total, person) => {
  return total / person
}