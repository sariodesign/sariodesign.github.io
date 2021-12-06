const tipValues = document.querySelectorAll('.tip-value');

tipValues.forEach( tip => {
  tip.addEventListener('change', (e) => {
    let billValue = Number(bill.value);
    let tipValue = Number(e.target.value);
    let totalPeople = Number(people.value);
    console.log('Tip value: ', calcTip(billValue, tipValue));
    console.log('Total with tip value: ', calcTotal(billValue, calcTip(billValue, tipValue)));
    console.log('Total tip per people: ', calcTipPeople(calcTip(billValue, tipValue), totalPeople));
    console.log('Total with tip per people: ', calcTotalPeople(calcTotal(billValue, calcTip(billValue, tipValue)), totalPeople));
  }) 
});

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