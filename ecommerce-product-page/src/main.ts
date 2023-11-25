// =========== Import ==========
import addToCart from "./cart"
import { sliderInit, slideByThumb } from "./slider"

// Menu items link
const menuMobile:HTMLDialogElement | null = document.querySelector('.menu-mobile')
const openMenuMobileBtn = document.querySelector('.open-icon')
const closeMenuMobileBtn = document.querySelector('.close-icon')
const desktopMatchMedia = window.matchMedia("(min-width: 1024px)");

openMenuMobileBtn?.addEventListener('click', () => {
  menuMobile!.showModal()
})

closeMenuMobileBtn?.addEventListener('click', () => {
  menuMobile?.classList.add('slide-out')
  setTimeout(() => {
    menuMobile!.close()
    menuMobile!.classList.remove('slide-out')
  }, 300)
})

// Select dom element for show quantity add to cart
const QUANTITY_DISPLAY:Element | null = document.querySelector('#quantity')

// Select handler element for update quantity
const quantityHandlerBtn = document.querySelectorAll<HTMLButtonElement>(".cart-quantity-btn")

// Start quantity to 0
let InitialCartQuantity:number = 0

if(QUANTITY_DISPLAY !== null){
  QUANTITY_DISPLAY.textContent = InitialCartQuantity.toString()
}

// Function add and remove quantity
function updatedQuantity(element:HTMLButtonElement) {
  if(element.dataset.action === 'increment') {
    InitialCartQuantity += 1
     
  } else {
    if (InitialCartQuantity > 0) {
      InitialCartQuantity -= 1;
    }
  }

  return InitialCartQuantity.toString();
}

// Function handler for show quantity
quantityHandlerBtn.forEach(button => {
  button.addEventListener('click', () => {
    QUANTITY_DISPLAY!.textContent = updatedQuantity(button)!.toString()
  })
})


// ==================== Cart functions ====================
const baseProduct = {
  title: 'Fall Limited Edition Sneakers',
  thumb: 'image-product-1-thumbnail.jpg',
  price: 125
}

const openCartBtn = document.querySelector('.open-cart-btn')
const addCartBtn = document.querySelector('.cart-add-btn')
const cartDialog:HTMLDialogElement | null = document.querySelector('.cart-dialog')
const cartContent = document.querySelector('#dialog-content')

cartDialog?.addEventListener('click', (e) => {
  if (!(e.target instanceof HTMLElement)) return;
  if(e.target.nodeName === 'DIALOG'){
    cartDialog?.close();
  } else if(e.target.nodeName === 'BUTTON') {
    cartContent!.innerHTML = `<p>Your cart is empty.</p>`
    InitialCartQuantity = 0
    QUANTITY_DISPLAY!.textContent = InitialCartQuantity.toString()
    if(cartDialog?.hasAttribute('open')) {
      cartDialog.close();
    }
  }
})

openCartBtn?.addEventListener('click', () => {  
  if(cartDialog?.hasAttribute('open')) {
    cartDialog.close();
  } else {
    cartDialog?.show();
  }
})

addCartBtn?.addEventListener('click', () => {
  if(Number(QUANTITY_DISPLAY!.textContent) > 0) {
    addToCart(Number(QUANTITY_DISPLAY!.textContent), baseProduct, cartContent)
    console.log('add to cart')
  }
})


// ==================== Slider functions ====================
const sliderPopup:HTMLDialogElement | null = document.querySelector('.slider-popup-container')
const sliderPopupRemover: HTMLButtonElement | null = document.querySelector('.slider-popup-remover')

if(desktopMatchMedia.matches){
  let slidesHero = document.querySelectorAll('.slider-hero .slide')
  let slidesPopup = document.querySelectorAll('.slider-popup .slide')
  let arrowsPopup = document.querySelectorAll('.slider-popup .arrows button')

  slidesHero.forEach(slide => {
    slide.addEventListener('click', () => {
      sliderPopup?.showModal()
    })
  })

  sliderPopupRemover?.addEventListener('click', () => {
    sliderPopup?.close()
  })

  sliderInit(slidesPopup, arrowsPopup)

  // Thumbs function
  const thumbPopupImages = document.querySelectorAll('.slider-popup .thumbs figure');
  const thumbHeroImages = document.querySelectorAll('.slider-hero .thumbs figure');
  slideByThumb(thumbPopupImages, slidesPopup)
  slideByThumb(thumbHeroImages, slidesHero)

} else {
  let slides = document.querySelectorAll('.slider-hero .slide')
  let sliderArrowControls = document.querySelectorAll('.slider-hero .arrows button')

  sliderInit(slides, sliderArrowControls)
}