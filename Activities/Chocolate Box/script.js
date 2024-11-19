document.addEventListener("DOMContentLoaded", () => {
    // Sticky Header on Scroll
    window.addEventListener('scroll', function () {
        const header = document.querySelector("header");
        if (window.pageYOffset > 100) {
            header.classList.add('is-scrolling');
        } else {
            header.classList.remove('is-scrolling');
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-nav');
    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
    });

    // Login Modal
    const userIcon = document.getElementById("user-icon");
    const loginModal = document.getElementById("login-modal");
    const closeModal = document.getElementById("close-btn");

    if (userIcon && loginModal && closeModal) {
        userIcon.addEventListener("click", () => {
            loginModal.style.display = "flex";
        });

        closeModal.addEventListener("click", () => {
            loginModal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target === loginModal) {
                loginModal.style.display = "none";
            }
        });
    }

    // Add to Cart Modal
    const cart = [];
    const productsData = {
        "Summer Special": {
            image: "images/summer special.png",
            price: 15.99,
        },
        "Valentine's Day Offer": {
            image: "images/valentines.png",
            price: 18.99,
        }
    };

    function showAddToCartModal(productName) {
        const product = productsData[productName];
        if (!product) return;

        const modal = document.createElement('div');
        modal.classList.add('modal');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const modalText = document.createElement('p');
        modalText.textContent = `Do you want to add the ${productName} to your cart?`;

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Yes, Add to Cart';

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'No, Thanks';

        modalContent.appendChild(modalText);
        modalContent.appendChild(addToCartButton);
        modalContent.appendChild(cancelButton);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        addToCartButton.addEventListener('click', () => {
            const existingProduct = cart.find(item => item.name === productName);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ ...product, name: productName, quantity: 1 });
            }
            updateCartNotification();
            modal.remove();
        });

        cancelButton.addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }

    // Show Cart Modal
    function showCart() {
        const cartModal = document.createElement('div');
        cartModal.classList.add('cart-modal');

        const cartContent = document.createElement('div');
        cartContent.classList.add('cart-content');

        const cartTitle = document.createElement('h3');
        cartTitle.textContent = 'Your Cart';

        const cartItemsList = document.createElement('ul');
        cartItemsList.classList.add('cart-items-list');

        let totalPrice = 0;

        if (cart.length === 0) {
            const emptyMessage = document.createElement('p');
            emptyMessage.textContent = 'Your cart is empty!';
            cartContent.appendChild(cartTitle);
            cartContent.appendChild(emptyMessage);
        } else {
            cart.forEach(item => {
                const listItem = document.createElement('li');
                listItem.classList.add('cart-item');

                const productImage = document.createElement('img');
                productImage.src = item.image;
                productImage.alt = item.name;
                productImage.classList.add('cart-item-image');

                const productDetails = document.createElement('div');
                productDetails.classList.add('cart-item-details');

                const productName = document.createElement('span');
                productName.textContent = item.name;
                productName.classList.add('cart-item-name');

                const productQuantity = document.createElement('span');
                productQuantity.textContent = `Qty: ${item.quantity}`;
                productQuantity.classList.add('cart-item-quantity');

                const productPrice = document.createElement('span');
                productPrice.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
                productPrice.classList.add('cart-item-price');

                totalPrice += item.price * item.quantity;

                productDetails.appendChild(productName);
                productDetails.appendChild(productQuantity);

                listItem.appendChild(productImage);
                listItem.appendChild(productDetails);
                listItem.appendChild(productPrice);
                cartItemsList.appendChild(listItem);
            });

            cartContent.appendChild(cartTitle);
            cartContent.appendChild(cartItemsList);

            const totalPriceElement = document.createElement('div');
            totalPriceElement.classList.add('cart-total');
            totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
            totalPriceElement.style.fontWeight = 'bold';
            totalPriceElement.style.textAlign = 'right'; // Align text to the right
            totalPriceElement.style.marginTop = '15px';

            cartContent.appendChild(totalPriceElement);
        }

        const closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.classList.add('close-cart-button');
        closeButton.addEventListener('click', () => cartModal.remove());
        cartContent.appendChild(closeButton);

        cartModal.appendChild(cartContent);
        document.body.appendChild(cartModal);
    }

    // Update Cart Notification
    function updateCartNotification() {
        const cartNotification = document.getElementById("cart-notification");
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

        if (totalItems > 0) {
            cartNotification.textContent = totalItems;
            cartNotification.style.display = "block";
        } else {
            cartNotification.style.display = "none";
        }
    }

    // Event Listeners for Promotional Offers
    const summerOfferImage = document.querySelector('.summer img');
    const valentinesOfferImage = document.querySelector('.valentines img');
    const cartIcon = document.querySelector(".fa-shopping-cart");

    if (summerOfferImage) {
        summerOfferImage.addEventListener('click', () => {
            showAddToCartModal('Summer Special');
        });
    }

    if (valentinesOfferImage) {
        valentinesOfferImage.addEventListener('click', () => {
            showAddToCartModal('Valentine\'s Day Offer');
        });
    }

    if (cartIcon) {
        cartIcon.addEventListener("click", showCart);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Event Listener for "Build Yours Now" Button
    const buildYoursButton = document.getElementById("build-yours-button");
    if (buildYoursButton) {
        buildYoursButton.addEventListener("click", () => {
            showBuildYourChocolateModal();
        });
    }

    function showBuildYourChocolateModal() {
        // Create Modal Structure
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const modalTitle = document.createElement('h3');
        modalTitle.textContent = 'Build Your Chocolate Box';

        const flavorSelect = document.createElement('select');
        flavorSelect.innerHTML = `
            <option value="Original">Original Chocolate</option>
            <option value="Milk">Milk Chocolate</option>
            <option value="Dark">Dark Chocolate</option>
            <option value="Hazel Praline">Hazel Praline</option>
        `;

        const personalizationInput = document.createElement('input');
        personalizationInput.type = 'text';
        personalizationInput.placeholder = 'Enter your message';

        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.min = 1;
        quantityInput.value = 1;

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';

        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';

        modalContent.appendChild(modalTitle);
        modalContent.appendChild(createLabelWithElement('Choose Flavor:', flavorSelect));
        modalContent.appendChild(createLabelWithElement('Personalized Message:', personalizationInput));
        modalContent.appendChild(createLabelWithElement('Quantity:', quantityInput));
        modalContent.appendChild(addToCartButton);
        modalContent.appendChild(cancelButton);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Add Event Listeners
        addToCartButton.addEventListener('click', () => {
            const selectedFlavor = flavorSelect.value;
            const message = personalizationInput.value || 'No message';
            const quantity = parseInt(quantityInput.value, 10);
            const pricePerBox = 20.0; // Example price per box

            const customBox = {
                name: `${selectedFlavor} Chocolate Box`,
                image: `images/${selectedFlavor.toLowerCase().replace(' ', '-')}.png`,
                price: pricePerBox,
                quantity: quantity,
                message: message,
            };

            // Add to cart
            cart.push(customBox);
            updateCartNotification();
            modal.remove();
        });

        cancelButton.addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }

    function createLabelWithElement(labelText, element) {
        const container = document.createElement('div');
        const label = document.createElement('label');
        label.textContent = labelText;
        container.appendChild(label);
        container.appendChild(element);
        return container;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    
    // Event Listener for "Build Yours Now" Button
    const buildYoursButton = document.getElementById("build-yours-button");
    if (buildYoursButton) {
        buildYoursButton.addEventListener("click", () => {
            showBuildYourChocolateModal();
        });
    }

    function showBuildYourChocolateModal() {
        // Prevent scrolling on the background
        document.body.classList.add('modal-open');
    
        // Create Backdrop
        const backdrop = document.createElement('div');
        backdrop.classList.add('backdrop');
    
        // Create Modal
        const modal = document.createElement('div');
        modal.classList.add('modal');
    
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
    
        const modalTitle = document.createElement('h3');
        modalTitle.textContent = 'Build Your Chocolate Box';
    
        const flavorSelect = document.createElement('select');
        flavorSelect.innerHTML = `
            <option value="Original">Original Chocolate</option>
            <option value="Milk">Milk Chocolate</option>
            <option value="Dark">Dark Chocolate</option>
            <option value="Hazel Praline">Hazel Praline</option>
        `;
    
        const personalizationInput = document.createElement('input');
        personalizationInput.type = 'text';
        personalizationInput.placeholder = 'Enter your message';
    
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.min = 1;
        quantityInput.value = 1;
    
        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
    
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
    
        modalContent.appendChild(modalTitle);
        modalContent.appendChild(createLabelWithElement('Choose Flavor:', flavorSelect));
        modalContent.appendChild(createLabelWithElement('Personalized Message:', personalizationInput));
        modalContent.appendChild(createLabelWithElement('Quantity:', quantityInput));
        modalContent.appendChild(addToCartButton);
        modalContent.appendChild(cancelButton);
        modal.appendChild(modalContent);
        document.body.appendChild(backdrop);
        document.body.appendChild(modal);
    
        // Add Event Listeners
        addToCartButton.addEventListener('click', () => {
            document.body.classList.remove('modal-open');
            modal.remove();
            backdrop.remove();
        });
    
        cancelButton.addEventListener('click', () => {
            document.body.classList.remove('modal-open');
            modal.remove();
            backdrop.remove();
        });
    
        backdrop.addEventListener('click', () => {
            document.body.classList.remove('modal-open');
            modal.remove();
            backdrop.remove();
        });
    }    
});

