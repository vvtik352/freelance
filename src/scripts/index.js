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
    handleRightArrowClick(slider, 350)
})
leftSliderArrow.addEventListener('click', () => {
    handleLeftArrowClick(slider, 350)
})

bankLeftSliderArrow.addEventListener('click', () => {
    handleLeftArrowClick(bankSlider, 599)
})
bankRightSliderArrow.addEventListener('click', () => {
    handleRightArrowClick(bankSlider, 599)
})