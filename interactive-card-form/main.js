const form = document.querySelector('.js-form');
const formMessage = document.querySelector('.js-form-confirm');
const fullName = document.querySelector('div[data-fullname]');
const cardNumber = document.querySelector('div[data-card-number]');
const cardMonth = document.querySelector('div[data-month]');
const cardYear = document.querySelector('div[data-year]');
const cardCvc = document.querySelector('div[data-cvc]');
const inputFields = document.querySelectorAll('.js-input');
const continueBtn = document.querySelector('.js-continue')


const fillCardField = (dataField, dataContent) => {
    if(dataContent) {
        document.querySelector(`div[data-${dataField}]`).textContent = dataContent;
    }
}

const fillFullName = (dataFullname) => {
    let placeholderFullName = 'Firstname Lastname';
    return dataFullname ? dataFullname : placeholderFullName;
}

const splitCardNumber = (numberString) => {
    let placeholderCardNumber = '0000 0000 0000 0000';
    let regex = /.{1,4}/g;
    return numberString ? numberString.match(regex).join(' ') : placeholderCardNumber;
}

const fillMonth = (dataMonth) => {
    let placeholderMonth = 'MM';
    return dataMonth ? dataMonth : placeholderMonth;
}

const fillYear = (dataYear) => {
    let placeholderYear = 'YY';
    return dataYear ? dataYear : placeholderYear;
}

const fillCvc = (dataCvc) => {
    let placeholderCvc = 'E.G. CVC';
    return dataCvc ? dataCvc : placeholderCvc;
}

inputFields.forEach((item) => {
    item.addEventListener('keyup', (e) => {
        let dataInput = e.target.dataset.input;
        let inputContent = e.target.value;
        switch (dataInput) {
            case 'fullname':
                fillCardField(dataInput, fillFullName(inputContent))
                break;
            case 'card-number':
                console.log('Input')
                fillCardField(dataInput, splitCardNumber(inputContent))
                break;
            case 'card-month':
                console.dir(e.target.value)
                fillCardField(dataInput, fillMonth(inputContent))
                break;
            case 'card-year':
                fillCardField(dataInput, fillYear(inputContent))
                break;
            case 'card-cvc':
                fillCardField(dataInput, fillCvc(inputContent))
                break;
        }
    })
})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    form.classList.add('hidden')
    formMessage.classList.remove('hidden')

    console.log('Form')
    // handle submit
});

continueBtn.addEventListener('click', () => {
    location.reload()
})