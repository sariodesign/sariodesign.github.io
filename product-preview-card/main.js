const cart = document.querySelector('js-cart');

// Create a class for the element
class ProductCard extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create card
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "product-card");
    
    // Create element for the image
    const image = document.createElement("picture");
    image.setAttribute("class", "product-image");
    const imageMobile = document.createElement("img");
    imageMobile.src = this.getAttribute("data-image");

		if(this.hasAttribute("data-desktop-image")){
			// Create element for responsive image desktop
			const imageDesktop = document.createElement("source")
			imageDesktop.setAttribute("media", "(min-width:768px)");
			imageDesktop.srcset = this.getAttribute("data-desktop-image");
			image.appendChild(imageDesktop);
			image.appendChild(imageMobile);
		} else {
			image.appendChild(imageMobile);
		}

		// Create card text info content
		const info = document.createElement("div");
		info.setAttribute("class", "product-info");
    
    // Create element for the category
    const category = document.createElement("span");
    category.setAttribute("class", "product-category");
    category.textContent = this.getAttribute("data-category");
    
    // Create element for the name
    const name = document.createElement("h1");
    name.setAttribute("class", "product-name");
    name.textContent = this.getAttribute("data-name");
    
    // Create element for the info
    const description = document.createElement("p");
    description.setAttribute("class", "product-description");
    description.textContent = this.getAttribute("data-description");

		// Create element for the price
    const price = document.createElement("div");
    price.setAttribute("class", "product-price");

		const currentPrice = document.createElement("span");
		currentPrice.setAttribute("class", "product-current-price");
		currentPrice.textContent = this.getAttribute("data-current-price");

		if(this.hasAttribute("data-full-price")){
			// Create element for discount price
			const fullPrice = document.createElement("span");
			fullPrice.setAttribute("class", "product-full-price");
			fullPrice.textContent = this.getAttribute("data-full-price");

			price.appendChild(currentPrice);
			price.appendChild(fullPrice);
		} else {
			price.appendChild(currentPrice);
		}

		// Create element for the button
		const addToCartButton = document.createElement("button");
		addToCartButton.setAttribute("class", "add-to-cart");
		addToCartButton.textContent = 'Add to Cart';

		addToCartButton.addEventListener('click', () => {
			this.addToCart()
		})

		// Append element content
		info.appendChild(category);
		info.appendChild(name);
		info.appendChild(description);
		info.appendChild(price);
		info.appendChild(addToCartButton);


    // Create some CSS to apply to the shadow dom
    const style = document.createElement("style");

    style.textContent = `
      .product-card {
				background-color: #fff;
				border-radius: 8px;
        display:flex;
        flex-direction: column;
				margin: 0 auto;
				overflow: hidden;
				width: calc(100% - 32px);
      }

			.product-image img {
				max-width: 100%;
				vertical-align: bottom;
			}

			.product-info {
				background-color: #fff;
				display: flex;
				flex-direction: column;
				padding: 24px;
			}

      .product-category {
				color: hsl(228, 12%, 48%);
        font-size: 14px;
				letter-spacing: 2px;
				margin-bottom: 16px;
				text-transform: uppercase;
      }
      
			.product-name {
				font-family: 'Fraunces', serif;
        font-size: 30px;
        margin: 0 0 24px;
      }

			.product-description {
				color: hsl(228, 12%, 48%);
				font-size: 14px;
				line-height: 24px;
				margin: 0 0 32px;
			}

			.product-price {
				align-items: center;
				display: flex;
				font-family: 'Fraunces', serif;
				gap: 20px;
				margin-bottom: 24px;
			}

			.product-full-price {
				color: hsl(228, 12%, 48%);
				text-decoration: line-through;
			}

			.product-current-price {
				color: hsl(158, 36%, 37%);
				font-size: 32px;
			}

			.add-to-cart {
				background-color: hsl(158, 36%, 37%);
				border: 0;
				border-radius: 8px;
				color: #fff;
				font-weight: 700;
				margin: 0 auto;
				padding: 16px 0;
				width: 100%;
			}

			@media (hover:hover) {
				.add-to-cart:hover {
					background-color:hsl(156, 42%, 18%);
					cursor: pointer;
				}
			}

			@media(min-width: 768px) {
				.product-card {
					flex-direction: row;
					width: 600px;
				}

				.product-info {
					padding: 20px 24px;
				}

				.product-image {
					flex: 1 0 300px;
				}
			}
      
    `;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(image);
    wrapper.appendChild(info);
  }
}

// Define the new element
customElements.define("product-card", ProductCard);
