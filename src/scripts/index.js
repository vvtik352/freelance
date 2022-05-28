const leftSliderArrow = document.querySelector('.slider-arrow_left')
const rightSliderArrow = document.querySelector('.slider-arrow_right')


const slider = document.querySelector('.slider')

function handleRightArrowClick() {
    slider.scroll({
        left: slider.scrollLeft + 350 * 3 + 200,
        behavior: 'smooth'
    })

}
function handleLeftArrowClick() {
    slider.scroll({
        left: slider.scrollLeft - 350 * 3 - 200,
        behavior: 'smooth'
    })
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    console.error(rect);
    return {
        left: rect.x,
        top: rect.top
    };
}

rightSliderArrow.addEventListener('click', handleRightArrowClick)
leftSliderArrow.addEventListener('click', handleLeftArrowClick)