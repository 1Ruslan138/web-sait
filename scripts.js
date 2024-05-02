let cartItems = [];

    function navigateTo(page) {
        const contentContainer = document.getElementById('content-container');

            contentContainer.innerHTML = '';

            if (page === 'home') {
                document.getElementById('welcome-message').style.display = 'block';
            } else {
                document.getElementById('welcome-message').style.display = 'none';
            }

            switch (page) {
                case 'home':
                    document.getElementById('welcome-message').style.display = 'block';
                    break;
                case 'catalog/jackets':
                    loadClothingCards([
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Куртка', description: 'Отличная куртка для осенних прогулок.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Куртка', description: 'Еще одна стильная куртка.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Куртка', description: 'Еще одна стильная куртка.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Куртка', description: 'Еще одна стильная куртка.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Куртка', description: 'Еще одна стильная куртка.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Куртка', description: 'Еще одна стильная куртка.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Куртка', description: 'Еще одна стильная куртка.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Куртка', description: 'Еще одна стильная куртка.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Куртка', description: 'Еще одна стильная куртка.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Куртка', description: 'Еще одна стильная куртка.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Куртка', description: 'Еще одна стильная куртка.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Куртка', description: 'Еще одна стильная куртка.', price: '***** рублей' }
                    ]);
                    break;
                case 'catalog/t-shirts':
                    loadClothingCards([
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Футболка', description: 'Удобная футболка для повседневного ношения.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Футболка', description: 'Стильная футболка с принтом.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Футболка', description: 'Стильная футболка с принтом.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Футболка', description: 'Стильная футболка с принтом.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Футболка', description: 'Стильная футболка с принтом.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Футболка', description: 'Стильная футболка с принтом.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Футболка', description: 'Стильная футболка с принтом.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Футболка', description: 'Стильная футболка с принтом.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Футболка', description: 'Стильная футболка с принтом.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Футболка', description: 'Стильная футболка с принтом.', price: '***** рублей' },
                    ]);
                    break;
                case 'catalog/jeans':
                    loadClothingCards([
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Джинсы', description: 'Классические джинсы для комфортной посадки.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Джинсы', description: 'Модные джинсы с потертостями.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Джинсы', description: 'Модные джинсы с потертостями.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Джинсы', description: 'Модные джинсы с потертостями.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Джинсы', description: 'Модные джинсы с потертостями.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Джинсы', description: 'Модные джинсы с потертостями.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Джинсы', description: 'Модные джинсы с потертостями.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Джинсы', description: 'Модные джинсы с потертостями.', price: '***** рублей' },
                        { imageUrl: 'https://via.placeholder.com/300', title: 'Джинсы', description: 'Модные джинсы с потертостями.', price: '***** рублей' }
                    ]);
                    break;
                case 'contacts':
                    if (contentContainer) {
                        loadContacts([
                            { name: 'ФИО', email: 'Одежда@gmail.com', phone: '123-456-7890' },
                            { name: 'ФИО', email: 'Одежда@gmail.com', phone: '987-654-1110' },
                            { name: 'ФИО', email: 'Одежда@gmail.com', phone: '587-654-3210' },
                            { name: 'ФИО', email: 'Одежда@gmail.com', phone: '487-654-3310' }
                        ]);
                    }
                    break;
                case 'cart':
                    displayCartItems();
                    break;
            }

                        if (page !== 'home') {
                            document.getElementById('instruction').style.display = 'none';
                        } else {
                            document.getElementById('instruction').style.display = 'block';
                        }
                    }

                    function loadClothingCards(cards) {
                        const contentContainer = document.getElementById('content-container');

                        cards.forEach(card => {
                            const cardHtml = `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${card.imageUrl}" class="card-img-top" alt="Фото товара">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.description}</p>
                        <p class="card-text">Цена: ${card.price}</p>
                        <button class="btn btn-primary add-to-cart-btn" data-title="${card.title}" data-price="${card.price}">Добавить в корзину</button>
                    </div>
                </div>
            </div>
        `;
                            contentContainer.insertAdjacentHTML('beforeend', cardHtml);
                        });

                        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
                        addToCartButtons.forEach(button => {
                            button.addEventListener('click', addToCart);
                        });
                    }

                    function addToCart(event) {
                        const title = event.target.getAttribute('data-title');
                        const price = event.target.getAttribute('data-price');

                        cartItems.push({ title, price });
                        console.log(`Добавлено в корзину: ${title}, Цена: ${price}`);
                    }

                    function displayCartItems() {
                            const contentContainer = document.getElementById('content-container');
                            contentContainer.innerHTML = '';
                            if (cartItems.length === 0) {
                                contentContainer.innerHTML = '<p>Корзина пуста.</p>';
                            } else {
                                cartItems.forEach((item, index) => {
                                    const itemHtml = `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">Цена: ${item.price}</p>
                        <button class="btn btn-danger remove-from-cart-btn" data-index="${index}">Удалить из корзины</button>
                    </div>
                </div>
            </div>
            `;
                                    contentContainer.insertAdjacentHTML('beforeend', itemHtml);
                                });
                                const removeFromCartButtons = document.querySelectorAll('.remove-from-cart-btn');
                                removeFromCartButtons.forEach(button => {
                                    button.addEventListener('click', removeFromCart);
                                });
                        }
                        }

                        function removeFromCart(event) {
                            const index = event.target.getAttribute('data-index');
                            cartItems.splice(index, 1);
                            displayCartItems();
                        }

                    function loadContacts(contacts) {
                        const contentContainer = document.getElementById('content-container');

                        contacts.forEach(contact => {
                            const contactHtml = `
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${contact.name}</h5>
                        <p class="card-text">Email: ${contact.email}</p>
                        <p class="card-text">Phone: ${contact.phone}</p>
                    </div>
                </div>
            </div>
        `;
                            contentContainer.insertAdjacentHTML('beforeend', contactHtml);
        });
    }

 navigateTo('home');