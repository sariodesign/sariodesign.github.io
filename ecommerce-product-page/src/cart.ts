type Product = {
	thumb: string,
	title: string,
	price: number
}

function addToCart(quantity:number, product: Product, cart: Element | null) {
  // Create empty elements and add attributes
  const productContainer = document.createElement('div')
  productContainer.classList.add('cart-product')
  const productTextContent = document.createElement('div')
  const productTitle = document.createElement('h3')
  const productThumb = document.createElement('img')
  const productPrice = document.createElement('div')
  const productDelete = document.createElement('button')

  productThumb.setAttribute('src', product.thumb)
  productContainer.appendChild(productThumb)

  productTextContent.classList.add('cart-product-text')
  
  productTitle.textContent = product.title
  productTextContent.appendChild(productTitle)

  // Calculate price
  const basePrice = product.price
  const totalPrice = basePrice * quantity
  quantity > 1 ? productPrice.innerHTML = `$${basePrice.toFixed(2).toString()} x ${quantity.toString()} <strong>$${totalPrice.toFixed(2).toString()}</strong>` : productPrice.textContent = `$${basePrice.toFixed(2).toString()}`
  productTextContent.appendChild(productPrice)
  productContainer.appendChild(productTextContent)

  // Button for delete product
  productDelete.classList.add('cart-product-remove')
  productContainer.appendChild(productDelete)

  // Button checkout
  const checkoutBtn = document.createElement('button')
  checkoutBtn.classList.add('cart-add-btn')
  checkoutBtn.textContent = 'Checkout'


  cart!.innerHTML = '';
  cart?.appendChild(productContainer)
  cart?.appendChild(checkoutBtn)
}

export default addToCart