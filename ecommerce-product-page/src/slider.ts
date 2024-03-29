// Slider scroll into function
function scrollSlider(slidesRef: NodeList, direction: string | undefined, currentSlide: number) {
  if(direction === 'next') {
    (slidesRef[currentSlide] as HTMLElement).removeAttribute('data-visibility');
    (slidesRef[currentSlide + 1] as HTMLElement).setAttribute('data-visibility', 'true');
    (slidesRef[currentSlide + 1] as HTMLElement).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
  } else {
    (slidesRef[currentSlide] as HTMLElement).removeAttribute('data-visibility');
    (slidesRef[currentSlide - 1] as HTMLElement).setAttribute('data-visibility', 'true');
    (slidesRef[currentSlide - 1] as HTMLElement).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
  }
}

// Check arrows
function checkSliderArrows(slidesRef: NodeList, sliderArrowControls: NodeList) {  
	let currentIndexSlide = Array.from(slidesRef).findIndex((slide) => (slide as HTMLElement).dataset.visibility)
	if(currentIndexSlide === 0 && sliderArrowControls) {
		(sliderArrowControls[0] as HTMLElement).classList.add('hidden')
	} else if (currentIndexSlide === slidesRef.length - 1 && sliderArrowControls) {
		(sliderArrowControls[1] as HTMLElement).classList.add('hidden')
	} else {
		Array.from(sliderArrowControls).forEach(btn => (btn as HTMLElement).classList.remove('hidden'))
	}
}

// Slider init
function sliderInit(slides:any, arrows:any) {
  arrows.forEach((btn:HTMLButtonElement) => {
    btn.addEventListener('click', () => {
      if(slides) {
        let currentSlide = Array.from(slides).findIndex(slide => (slide as HTMLElement).dataset.visibility)
        if(btn instanceof HTMLElement) {
          let direction: string | undefined = btn.dataset.action;
          scrollSlider(slides, direction, currentSlide)
        }
        
        checkSliderArrows(slides, arrows)
      }
    })
  })
}

// Slider by thumb
function slideByThumb(thumbs: NodeList, slides: NodeList) {
  thumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(thumb => (thumb as HTMLElement).classList.remove('active'))
      if(!(thumb as HTMLElement).classList.contains('active')){
        (thumb as HTMLElement).classList.add('active')
      }
      (slides[index] as HTMLElement).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    })
  })
}

export {sliderInit, slideByThumb}