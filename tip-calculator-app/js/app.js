const tipValues = document.querySelectorAll('.tip-value');
const errorBillMsg = 'Add valid value for bill';

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
    errorBill.textContent = errorBillMsg;
  }
})

tipValues.forEach( tip => {
  tip.addEventListener('change', (e) => {
    removeClass(tipValues, 'selected');
    if(e.target.value){
      people.disabled = false;
      tip.classList.add('selected');
    }
  }) 
});

people.addEventListener('change', (e) => {
  let billValue = Number(bill.value);
  let tipValue =  Number(document.querySelector('.selected').value);
  let totalPeople = Number(e.target.value);
  let totalTip = calcTipPeople(calcTip(billValue, tipValue), totalPeople);
  let total = calcTotalPeople(calcTotal(billValue, calcTip(billValue, tipValue)), totalPeople);
  totalTipForPeople.textContent = totalTip.toFixed(2);
  totalForPeople.textContent = total.toFixed(2);
});

const removeClass = (element, className) => {
  element.forEach( item => item.classList.remove(className));
}

const calcTip = (billVal, tipVal) => {
  return billVal * tipVal / 100;
}

const calcTotal = (bill, tip) => {
  return bill + tip
}

const calcTipPeople = (totalTip, people) => {
  return totalTip / people
}

const calcTotalPeople = (total, people) => {
  return total / people
}