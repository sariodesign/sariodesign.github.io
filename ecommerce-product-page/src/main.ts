// Menu items link
const menuMobile:HTMLDialogElement | null = document.querySelector('.menu-mobile')
const openMenuMobileBtn = document.querySelector('.open-icon')
const closeMenuMobileBtn = document.querySelector('.close-icon')
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


// Slider functions
function checkSliderArrows() {
  let currentIndexSlide = Array.from(slides).findIndex((slide: Element) => (slide as HTMLElement).dataset.visibility)
  if(currentIndexSlide === 0) {
    sliderHandlerBtn[0].classList.add('hidden')
  } else if (currentIndexSlide === slides.length - 1) {
    sliderHandlerBtn[1].classList.add('hidden')
  } else {
    sliderHandlerBtn.forEach(btn => btn.classList.remove('hidden'))
  }
}

const sliderHandlerBtn = document.querySelectorAll('.arrows button')
const slides = document.querySelectorAll('.slide')

/* sliderHandlerBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    let currentSlide = Array.from(slides).findIndex(slide => slide.dataset.visibility)
    console.log(currentSlide)
    if(btn.dataset.action === 'next') {
      slides[currentSlide].removeAttribute('data-visibility');
      slides[currentSlide + 1].setAttribute('data-visibility', 'true')
      slides[currentSlide + 1].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    } else {
      slides[currentSlide].removeAttribute('data-visibility');
      slides[currentSlide - 1].setAttribute('data-visibility', 'true')
      slides[currentSlide - 1].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }

    checkSliderArrows()
  })
}) */

sliderHandlerBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    let currentSlide = Array.from(slides).findIndex((slide: Element) => (slide as HTMLElement).dataset.visibility)
    console.log(currentSlide)
    if (btn instanceof HTMLElement && btn.dataset.action === 'next') {
      (slides[currentSlide] as HTMLElement).removeAttribute('data-visibility');
      (slides[currentSlide + 1] as HTMLElement).setAttribute('data-visibility', 'true');
      (slides[currentSlide + 1] as HTMLElement).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    } else {
      (slides[currentSlide] as HTMLElement).removeAttribute('data-visibility');
      (slides[currentSlide - 1] as HTMLElement).setAttribute('data-visibility', 'true');
      (slides[currentSlide - 1] as HTMLElement).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }

    checkSliderArrows()
  })
})



// Cart functions
const baseProduct = {
  title: 'Fall Limited Edition Sneakers',
  thumb: 'image-product-1-thumbnail.jpg',
  price: 125
}

const openCartBtn = document.querySelector('.open-cart-btn')
const addCartBtn = document.querySelector('.cart-add-btn')
const cartDialog:HTMLDialogElement | null = document.querySelector('.cart-dialog')
const cartContent = document.querySelector('#dialog-content')

function addToCart(quantity:number) {
  // Create empty elements and add attributes
  const productContainer = document.createElement('div')
  productContainer.classList.add('cart-product')
  const productTextContent = document.createElement('div')
  const productTitle = document.createElement('h3')
  const productThumb = document.createElement('img')
  const productPrice = document.createElement('div')
  const productDelete = document.createElement('button')

  productThumb.setAttribute('src', baseProduct.thumb)
  productContainer.appendChild(productThumb)

  productTextContent.classList.add('cart-product-text')
  
  productTitle.textContent = baseProduct.title
  productTextContent.appendChild(productTitle)

  // Calculate price
  const basePrice = baseProduct.price
  const totalPrice = basePrice * quantity
  quantity > 1 ? productPrice.innerHTML = `$${basePrice.toFixed(2).toString()} x ${quantity.toString()} <strong>$${totalPrice.toFixed(2).toString()}</strong>` : productPrice.textContent = `$${basePrice.toFixed(2).toString()}`
  productTextContent.appendChild(productPrice)
  productContainer.appendChild(productTextContent)

  // Button for delete product
  productDelete.classList.add('cart-product-remove')
  productContainer.appendChild(productDelete)

  cartContent!.innerHTML = '';
  cartContent?.appendChild(productContainer)
}

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
    cartDialog?.showModal();
  }
})

addCartBtn?.addEventListener('click', () => {
  if(Number(QUANTITY_DISPLAY!.textContent) > 0) {
    addToCart(Number(QUANTITY_DISPLAY!.textContent))
    console.log('add to cart')
  }
})