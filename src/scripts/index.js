const leftSliderArrow = document.querySelector('.slider-arrow_left')
const rightSliderArrow = document.querySelector('.slider-arrow_right')

const bankLeftSliderArrow = document.querySelector('.bank-arrow-left')
const bankRightSliderArrow = document.querySelector('.bank-arrow-right')


const slider = document.querySelector('.slider')
const bankSlider = document.querySelector('.bank-slider')

function handleRightArrowClick(slider, offset) {
  slider.scroll({
    left: slider.scrollLeft + offset,
    behavior: 'smooth'
  })

}
function handleLeftArrowClick(slider, offset) {
  slider.scroll({
    left: slider.scrollLeft - offset,
    behavior: 'smooth'
  })

}



function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.x,
    top: rect.top
  };
}

rightSliderArrow.addEventListener('click', () => {
  handleRightArrowClick(slider, 322)
})
leftSliderArrow.addEventListener('click', () => {
  handleLeftArrowClick(slider, 322)
})

bankLeftSliderArrow.addEventListener('click', () => {
  handleLeftArrowClick(bankSlider, 559)
})
bankRightSliderArrow.addEventListener('click', () => {
  handleRightArrowClick(bankSlider, 559)
})


// отправка формы


const nameInput = document.querySelector('#name')
const phoneNumberInput = document.querySelector('#number')
const emailInput = document.querySelector('#email')
const priceInput = document.querySelector('#price')

const submitFormButton = document.querySelector('#send-form-button')
const form = document.querySelector('#form')
submitFormButton.classList.add('disabled')

function handleChange(event) {
  if (nameInput.value &&
    phoneNumberInput.value &&
    emailInput.value &&
    priceInput.value)
    submitFormButton.classList.remove('disabled')
  else
    submitFormButton.classList.add('disabled')
}

form.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', handleChange)
})
function handleSubmit(event) {
  event.preventDefault()

  fetch(`/Send.php`, {
    method: 'POST',
    body: {
      name: nameInput.value,
      phone: phoneNumberInput.value,
      email: emailInput.value,
      sum: priceInput.value
    }
  })
    .then(response => {
      nameInput.value = ''
      phoneNumberInput.value = ''
      emailInput.value = ''
      priceInput.value = ''
    }).catch(error => {
      console.error(error)
    })
}

form.addEventListener('submit', handleSubmit)