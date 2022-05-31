const leftSliderArrow = document.querySelector('.slider-arrow_left')
const rightSliderArrow = document.querySelector('.slider-arrow_right')

const bankLeftSliderArrow = document.querySelector('.bank-arrow-left')
const bankRightSliderArrow = document.querySelector('.bank-arrow-right')


const slider = document.querySelector('.slider')
const bankSlider = document.querySelector('.bank-slider')


handleResize()

document.addEventListener('resize', handleResize)

function handleResize() {
  slider.querySelectorAll('.slider-item__image').forEach(item => {
    item.style.width = Math.round(slider.clientWidth / 3) + 'px'
  })

  document.querySelector('.bank-arrow-left').style.width = Math.round(bankSlider.clientWidth / 4) + 'px'
  document.querySelector('.bank-arrow-left').style.height = Math.round(bankSlider.clientWidth / 4) + 'px'
  document.querySelector('.bank-arrow-right').style.width = Math.round(bankSlider.clientWidth / 4) + 'px'
  document.querySelector('.bank-arrow-right').style.height = Math.round(bankSlider.clientWidth / 4) + 'px'

  bankSlider.querySelectorAll('.slider-item__image').forEach(item => {
    console.error(bankSlider.clientWidth);
    item.style.width = bankSlider.clientWidth + 'px'
  })
}


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
  handleRightArrowClick(slider, slider.querySelector('.slider-item').clientWidth)
})
leftSliderArrow.addEventListener('click', () => {
  handleLeftArrowClick(slider, slider.querySelector('.slider-item').clientWidth)
})

bankLeftSliderArrow.addEventListener('click', () => {
  handleLeftArrowClick(bankSlider, bankSlider.querySelector('.slider-item').clientWidth)
})
bankRightSliderArrow.addEventListener('click', () => {
  handleRightArrowClick(bankSlider, bankSlider.querySelector('.slider-item').clientWidth)
})



// обработка блока comments со слайдером в виде точек

const comments = document.querySelector('.comments')

comments.querySelectorAll('.comment').forEach(item => {
  item.style.minWidth = Math.round(comments.clientWidth / 3) - 36 + 'px'
})

const dots = document.querySelectorAll('.dot')

comments.scroll({
  left: (comments.clientWidth - 16),
  behavior: 'smooth'
})


dots.forEach(dot => {
  if (dot.children.item(0).checked)
    dot.classList.toggle('dot_active')

  dot.addEventListener('click', handleDotClick)
})
function handleDotClick(event) {
  event.target.children.item(0).checked = !event.target.children.item(0).checked

  dots.forEach(dot => {
    if (!dot.children.item(0).checked)
      dot.classList.remove('dot_active')
    else
      dot.classList.add('dot_active')

    dot.addEventListener('click', handleDotClick)
  })

  switch (event.target.children.item(0).id) {
    case 'page-1':
      comments.scroll({
        left: 0,
        behavior: 'smooth'
      })
      break
    case 'page-2':
      comments.scroll({
        left: (comments.clientWidth - 16),
        behavior: 'smooth'
      })
      break
    case 'page-3':
      comments.scroll({
        left: comments.scrollLeft + (comments.clientWidth * 2),
        behavior: 'smooth'
      })
      break
  }
}



// отправка формы


const nameInput = document.querySelector('#name')
const phoneNumberInput = document.querySelector('#number')
const emailInput = document.querySelector('#email')
const priceInput = document.querySelector('#price')

const submitFormButton = document.querySelector('#send-form-button')
const form = document.querySelector('#form')
submitFormButton.classList.add('disabled')


//  все поля должны быть заполненны
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