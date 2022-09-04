

// how we can add the cards items in the cart and manipulate with them

let cards = document.getElementById('cards');
let cartBodyInner = document.querySelector('.cart__body-cards');
let cartBody = document.querySelector('.cart__body');
let cartFooter = document.getElementById('cart__footer');

let cardsData = [
  {
    id: 1,
    title: "Краска Wallquest, Brownsone MS90102",
    img: "1.jpg",
    price: "6000",
    filterClasses: {
      new: false,
      available: "available",
      contract: "contract",
      exclusive: false,
      sale: false
    },
    filters: {
      new: false,
      available: true,
      contract: true,
      exclusive: false,
      sale: false
    },
    raiting: 1,
    inCart: 0
  },
  {
    id: 2,
    title: "Краска Wallquest, Brownsone MS90102",
    img: "2.png",
    price: "4800",
    filterClasses: {
      new: false,
      available: "available",
      contract: "contract",
      exclusive: false,
      sale: false
    },
    filters: {
      new: false,
      available: true,
      contract: true,
      exclusive: false,
      sale: false
    },
    raiting: 2,
    inCart: 0
  },
  {
    id: 3,
    title: "Краска Wallquest, Brownsone MS90102",
    img: "3.png",
    price: "5290",
    filterClasses: {
      new: false,
      available: false,
      contract: "contract",
      exclusive: false,
      sale: false
    },
    filters: {
      new: false,
      available: false,
      contract: true,
      exclusive: false,
      sale: false
    },
    raiting: 3,
    inCart: 0
  },
  {
    id: 4,
    title: "Краска Wallquest, Brownsone MS90102",
    img: "4.png",
    price: "2800",
    filterClasses: {
      new: false,
      available: "available",
      contract: "contract",
      exclusive: false,
      sale: false
    },
    filters: {
      new: false,
      available: true,
      contract: true,
      exclusive: false,
      sale: false
    },
    raiting: 4,
    inCart: 0
  },
  {
    id: 5,
    title: "Краска Wallquest, Brownsone MS90102",
    img: "5.png",
    price: "3400",
    filterClasses: {
      new: "new",
      available: "available",
      contract: "contract",
      exclusive: false,
      sale: false
    },
    filters: {
      new: true,
      available: true,
      contract: true,
      exclusive: false,
      sale: false
    },
    raiting: 5,
    inCart: 0
  },
  {
    id: 6,
    title: "Краска Wallquest, Brownsone MS90102",
    img: "6.png",
    price: "6000",
    filterClasses: {
      new: false,
      available: "available",
      contract: "contract",
      exclusive: false,
      sale: false
    },
    filters: {
      new: false,
      available: true,
      contract: true,
      exclusive: false,
      sale: false
    },
    raiting: 1,
    inCart: 0
  },
  {
    id: 7,
    title: "Краска Wallquest, Brownsone MS90102",
    img: "7.png",
    price: "4800",
    filterClasses: {
      new: false,
      available: false,
      contract: "contract",
      exclusive: false,
      sale: false
    },
    filters: {
      new: false,
      available: false,
      contract: true,
      exclusive: false,
      sale: false
    },
    raiting: 2,
    inCart: 0
  },
  {
    id: 8,
    title: "Краска Wallquest, Brownsone MS90102",
    img: "8.png",
    price: "5290",
    filterClasses: {
      new: false,
      available: false,
      contract: false,
      exclusive: false,
      sale: false
    },
    filters: {
      new: false,
      available: false,
      contract: false,
      exclusive: false,
      sale: false
    },
    raiting: 3,
    inCart: 0
  },
  {
    id: 9,
    title: "Краска Wallquest, Brownsone MS90102",
    img: "9.png",
    price: "2800",
    filterClasses: {
      new: false,
      available: "available",
      contract: false,
      exclusive: "exclusive",
      sale: false
    },
    filters: {
      new: false,
      available: true,
      contract: false,
      exclusive: true,
      sale: false
    },
    raiting: 4,
    inCart: 0
  },
  {
    id: 10,
    title: "Краска Wallquest, Brownsone MS90102",
    img: "10.png",
    price: "3400",
    filterClasses: {
      new: false,
      available: "available",
      contract: "contract",
      exclusive: false,
      sale: false
    },
    filters: {
      new: false,
      available: true,
      contract: true,
      exclusive: false,
      sale: false
    },
    raiting: 5,
    inCart: 0
  },
  {
    id: 11,
    title: "Краска Wallquest, Brownsone MS90102",
    img: "1.jpg",
    price: "6000",
    filterClasses: {
      new: false,
      available: false,
      contract: "contract",
      exclusive: "exclusive",
      sale: false
    },
    filters: {
      new: false,
      available: false,
      contract: true,
      exclusive: true,
      sale: false
    },
    raiting: 1,
    inCart: 0
  },
  {
    id: 12,
    title: "Краска Wallquest, Brownsone MS90102",
    img: "2.png",
    price: "4800",
    filterClasses: {
      new: false,
      available: false,
      contract: "contract",
      exclusive: false,
      sale: "sale"
    },
    filters: {
      new: false,
      available: false,
      contract: true,
      exclusive: false,
      sale: true
    },
    raiting: 1,
    inCart: 0
  },
  {
    id: 13,
    title: "Краска Wallquest, Brownsone MS90102",
    img: "6.png",
    price: "5290",
    filterClasses: {
      new: false,
      available: false,
      contract: "contract",
      exclusive: "exclusive",
      sale: "sale"
    },
    filters: {
      new: false,
      available: false,
      contract: true,
      exclusive: true,
      sale: true
    },
    raiting: 4,
    inCart: 0
  },
  {
    id: 14,
    title: "Краска Wallquest, Brownsone MS90102",
    img: "4.png",
    price: "2800",
    filterClasses: {
      new: "new",
      available: "available",
      contract: "contract",
      exclusive: false,
      sale: false
    },
    filters: {
      new: true,
      available: true,
      contract: true,
      exclusive: false,
      sale: false
    },
    raiting: 5,
    inCart: 0
  },
  {
    id: 15,
    title: "Краска Wallquest, Brownsone MS90102",
    img: "8.png",
    price: "3400",
    filterClasses: {
      new: "new",
      available: "available",
      contract: "contract",
      exclusive: false,
      sale: "sale"
    },
    filters: {
      new: true,
      available: true,
      contract: true,
      exclusive: false,
      sale: true
    },
    raiting: 3,
    inCart: 0
  }
]

let basket = JSON.parse(localStorage.getItem('data')) || [];

function generateCards () {
  return (cards.innerHTML = cardsData
    .map((card) => {
      let {id, title, img, price} = card;
      let search = basket.find(x => x.id === id) || [];
      return `
        <div id="product-id-${id}" class="card cardId hover new" data-sort="6000" data-popular="true" data-new="true" data-filter="new">
          <div class="card__image-block"><img class="card__image" src="./images/cards/${img}" alt=${title} /></div>
          <div class="card__content-block">
            <h3 class="card__title">${title}</h3>
            <div class="card__price">${price} ₽</div>
            <div class="card__btn-position">
              <div id="${id}" class="quantity">
                ${search.item === undefined ? 0 : search.item}
              </div>
              <button onclick="increment(${id})" class="card__btn btnAdd"></button>
            </div>
          </div>
        </div>
      `;
    })
    .join("")
  );
};

generateCards();

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (cartBodyInner.innerHTML = basket.map(x => {
      let {id, item} = x;
      let search = cardsData.find((y) => y.id === id) || [];
      return `
        <div class="cart__item">
          <img class="cart__item-img" src="./images/cards/${search.img}" alt="${search.title}" data-id="" />
          <div class="cart__item-descr">
              <h4 class="cart__item-descr-title">${search.title}</h4>
              <div class="cart__item-price">${search.price * item} ₽</div>
          </div>
          <div class="cart__item-buttons">
            <button onclick="decrement(${id})" class="btn-minus"></button>
            <span id="${id}">${item}</span>
            <button onclick="increment(${id})" class="btn-plus"></button>
          </div>
          <button onclick="removeItem(${id})" class="btn-remove"></button>
          <button class="btn-restore"></button>
        </div>
      `;
    })
    .join(""))
  } else {
    cartBody.style.color = 'black';
    cartBody.innerHTML = `
      <h2> The cart is empty </h2>
    `
  }
}
generateCartItems();


let increment = (id) => {
  let selectedCard = id;
  let search = basket.find(x => x.id === selectedCard);

  if (search === undefined) {
    basket.push({
      id: selectedCard,
      item: 1,
    })
  } else {
    search.item += 1;
  }

  generateCartItems();
  update(selectedCard);
  localStorage.setItem('data', JSON.stringify(basket));
};

let decrement = (id) => {
  let selectedCard = id;
  let search = basket.find(x => x.id === selectedCard);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selectedCard);
  basket = basket.filter(x => x.item !== 0);
  generateCartItems();
  localStorage.setItem('data', JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find(x => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  // console.log(search);
  calculation();
  totalAmount();
};

let removeItem = (id) => {
  let selectedCard = id;
  basket = basket.filter((x) => x.id !== selectedCard);
  generateCartItems();
  totalAmount();
  calculation();
  localStorage.setItem('data', JSON.stringify(basket));
}

let clearCart = () => {
  basket = [];
  generateCartItems();
  calculation();
  localStorage.setItem('data', JSON.stringify(basket));
}

let totalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket.map((x) => {
      let {item, id} = x;
      let search = cardsData.find((y) => y.id === id) || [];
      return item * search.price;
    }).reduce((x, y) => x + y, 0);
    cartFooter.innerHTML = `
      <div class="count-block"><span>Итого</span><span class="totalCount">${amount} ₽</span></div>
      <button class="orderBtn">Оформить заказ</button>
    `
  } else return;
}
totalAmount();

let calculation = () => {
  let cartIcon = document.getElementById('cart-count');
  cartIcon.innerHTML = basket.map(x => x.item).reduce((x, y) => x + y, 0);
}

calculation();

// show hide cart

document.querySelector('.cartBtn').addEventListener('click', () => {
  document.querySelector('.cart').style.display = 'block';
  window.scrollTo(0, 0);
  document.body.style.overflow = 'hidden';
  
  document.querySelector('.btn-close').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.cart').style.display = 'none';
    document.body.style.overflow = 'visible';
  })
});


// slider

const sliders = (slides, direction, prev, next) => {
  let slideIndex = 1;
  const items = document.querySelectorAll(slides);

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach(item => {
      item.classList.add("animated");
      item.style.display = "none";
    })

    items[slideIndex - 1].style.display = "block";
  }

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  try {
    const prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next);

    prevBtn.addEventListener('click', () => {
      plusSlides(-1);
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRight');
    })
    nextBtn.addEventListener('click', () => {
      plusSlides(1);
      items[slideIndex - 1].classList.remove('slideInRight');
      items[slideIndex - 1].classList.add('slideInLeft');
    })
  } catch (e) {

  }

}

sliders();