

// how we can add the cards items in the cart and manipulate with them

let cards = document.getElementById('cards');
let cartBodyInner = document.querySelector('.cart__body-cards');
let cartBody = document.querySelector('.cart__body');
let cartFooter = document.getElementById('cart__footer');

let cardsData = [
  {
    "id": "1",
    "title": "Краска Wallquest, Brownsone MS90102",
    "img": "1.jpg",
    "price": "6000",
    "filterClasses": {
      "newClass": false,
      "available": "available",
      "contract": "contract",
      "exclusive": false,
      "sale": false
    },
    "popular": true,
    "inCart": 0,
    "filter": false
  },
  {
    "id": "2",
    "title": "Краска Wallquest, Brownsone MS90102",
    "img": "2.png",
    "price": "4800",
    "filterClasses": {
      "newClass": false,
      "available": "available",
      "contract": "contract",
      "exclusive": false,
      "sale": false
    },
    "popular": false,
    "inCart": 0,
    "filter": false
  },
  {
    "id": "3",
    "title": "Краска Wallquest, Brownsone MS90102",
    "img": "3.png",
    "price": "5290",
    "filterClasses": {
      "newClass": false,
      "available": false,
      "contract": "contract",
      "exclusive": false,
      "sale": false
    },
    "popular": false,
    "inCart": 0,
    "filter": false
  },
  {
    "id": "4",
    "title": "Краска Wallquest, Brownsone MS90102",
    "img": "4.png",
    "price": "2800",
    "filterClasses": {
      "newClass": false,
      "available": "available",
      "contract": "contract",
      "exclusive": false,
      "sale": false
    },
    "popular": false,
    "inCart": 0,
    "filter": false
  },
  {
    "id": "5",
    "title": "Краска Wallquest, Brownsone MS90102",
    "img": "5.png",
    "price": "3400",
    "filterClasses": {
      "newClass": "new",
      "available": "available",
      "contract": "contract",
      "exclusive": false,
      "sale": false
    },
    "popular": false,
    "inCart": 0,
    "filter": true
  },
  {
    "id": "6",
    "title": "Краска Wallquest, Brownsone MS90102",
    "img": "6.png",
    "price": "6000",
    "filterClasses": {
      "newClass": false,
      "available": "available",
      "contract": "contract",
      "exclusive": false,
      "sale": false
    },
    "popular": true,
    "inCart": 0,
    "filter": false
  },
  {
    "id": "7",
    "title": "Краска Wallquest, Brownsone MS90102",
    "img": "7.png",
    "price": "4800",
    "filterClasses": {
      "newClass": false,
      "available": false,
      "contract": "contract",
      "exclusive": false,
      "sale": false
    },
    "popular": true,
    "inCart": 0,
    "filter": false
  },
  {
    "id": "8",
    "title": "Краска Wallquest, Brownsone MS90102",
    "img": "8.png",
    "price": "5290",
    "filterClasses": {
      "newClass": false,
      "available": false,
      "contract": false,
      "exclusive": false,
      "sale": false
    },
    "popular": true,
    "inCart": 0,
    "filter": false
  },
  {
    "id": "9",
    "title": "Краска Wallquest, Brownsone MS90102",
    "img": "9.png",
    "price": "2800",
    "filterClasses": {
      "newClass": false,
      "available": "available",
      "contract": false,
      "exclusive": "exclusive",
      "sale": false
    },
    "popular": true,
    "inCart": 0,
    "filter": false
  },
  {
    "id": "10",
    "title": "Краска Wallquest, Brownsone MS90102",
    "img": "10.png",
    "price": "3400",
    "filterClasses": {
      "newClass": false,
      "available": "available",
      "contract": "contract",
      "exclusive": false,
      "sale": false
    },
    "popular": false,
    "inCart": 0,
    "filter": false
  },
  {
    "id": "11",
    "title": "Краска Wallquest, Brownsone MS90102",
    "img": "1.jpg",
    "price": "6000",
    "filterClasses": {
      "newClass": false,
      "available": false,
      "contract": "contract",
      "exclusive": "exclusive",
      "sale": false
    },
    "popular": true,
    "inCart": 0,
    "filter": false
  },
  {
    "id": "12",
    "title": "Краска Wallquest, Brownsone MS90102",
    "img": "2.png",
    "price": "4800",
    "filterClasses": {
      "newClass": false,
      "available": false,
      "contract": "contract",
      "exclusive": false,
      "sale": "sale"
    },
    "popular": true,
    "inCart": 0,
    "filter": false
  },
  {
    "id": "13",
    "title": "Краска Wallquest, Brownsone MS90102",
    "img": "6.png",
    "price": "5290",
    "filterClasses": {
      "newClass": false,
      "available": false,
      "contract": "contract",
      "exclusive": "exclusive",
      "sale": "sale"
    },
    "popular": false,
    "inCart": 0,
    "filter": false
  },
  {
    "id": "14",
    "title": "Краска Wallquest, Brownsone MS90102",
    "img": "4.png",
    "price": "2800",
    "filterClasses": {
      "newClass": "new",
      "available": "available",
      "contract": "contract",
      "exclusive": false,
      "sale": false
    },
    "popular": true,
    "inCart": 0,
    "filter": true
  },
  {
    "id": "15",
    "title": "Краска Wallquest, Brownsone MS90102",
    "img": "8.png",
    "price": "3400",
    "filterClasses": {
      "newClass": "new",
      "available": "available",
      "contract": "contract",
      "exclusive": false,
      "sale": "sale"
    },
    "popular": true,
    "inCart": 0,
    "filter": true
  },
]

let basket = JSON.parse(localStorage.getItem('data')) || [];

function generateCards () {
  return (cards.innerHTML = cardsData
    .map((card) => {
      let {id, title, img, price, popular, filter, filterClasses: {newClass, available, contract, sale, exclusive}} = card;
      
      let search = basket.find(item => item.id === id) || [];
      return `
        <div id="product-id-${id}" class="card cardId hover ${newClass} ${available} ${contract} ${sale} ${exclusive}" data-price="${price}" data-sort="${price}" data-popular="${popular}" data-new="${filter}" data-filter="new">
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
    cartBodyInner.innerHTML = basket.map(x => {
      let {id, item} = x;
      let search = cardsData.find((y) => y.id == id) || [];
      // console.log(cardsData.find((y) => y.id == id))
      document.querySelector(".cart__body-descr").style.display = 'flex';
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
    .join("");
  } else {
    cartBody.style.color = 'black';
    document.querySelector(".cart__body-descr").style.display = 'none';
    cartBodyInner.innerHTML = `
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
  totalAmount();
  localStorage.setItem('data', JSON.stringify(basket));
}

let totalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket.map((x) => {
      let {item, id} = x;
      let search = cardsData.find((y) => y.id == id) || [];
      console.log(search)
      return item * search.price;
    }).reduce((x, y) => x + y, 0);
    cartFooter.innerHTML = `
      <div class="count-block"><span>Итого</span><span class="totalCount">${amount} ₽</span></div>
      <button class="orderBtn">Оформить заказ</button>
    `
  } else cartFooter.innerHTML = ``;
}
totalAmount();

let calculation = () => {
  let cartIcon = document.getElementById('cart-count');
  let cartCoutItems = document.querySelector('.cart__body-title');
  let countItems = basket.map(x => x.item).reduce((x, y) => x + y, 0);
  cartIcon.innerHTML = countItems;
  cartCoutItems.innerHTML = countItems + " " + declOfNum(countItems, ['товар', 'товара', 'товаров']);

}

function declOfNum(number, titles) {  
  cases = [2, 0, 1, 1, 1, 2];  
  return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}


calculation();


  // count cards
let cardsCount = document.querySelectorAll('.card');
document.querySelector('.card-count').innerHTML = cardsCount.length + ' ' + declOfNum(cardsCount.length, ['товар', 'товара', 'товаров']);

  // Полифил для метода forEach
  if (window.NodeList && !NodeList.prototype.forEach) {
    thisArg = thisArg || window;
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  }


  // dropdown
  const dropdownFunc = () => {
    // расчет ширины скроллбара
    function calcScroll() {
      let div = document.createElement('div');

      div.style.width = '50px';
      div.style.height = '50px';
      div.style.overflowY = 'scroll';
      div.style.visibility = 'hidden';

      document.body.appendChild(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;
      div.remove();

      return scrollWidth;
    }

    document.querySelectorAll('.dropdown').forEach(function(el) {
      const dropDownBtn = el.querySelector('.dropdown__button');
      const dropDownList = el.querySelector('.dropdown__list');
      const dropDownListWrap = el.querySelector('.dropdown__list-wrap');
      const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
      const dropDownInput = el.querySelector('.dropdown__input');
    
      dropDownBtn.addEventListener("click", function(e) {
        e.preventDefault();
        dropDownList.classList.toggle('dropdown__list--visible');
        dropDownBtn.style.display = 'none';
        dropDownListWrap.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = calcScroll()+"px";
      });
    
      dropDownListItems.forEach(item => {
        item.addEventListener('click', function(e) {
          e.stopPropagation();
          dropDownBtn.innerText = this.innerText;
          dropDownInput.value = this.dataset.value;
          closeDropDown();
        });
      })

      const closeDropDown = () => {
        dropDownList.classList.remove('dropdown__list--visible');
        document.body.style.overflow = 'visible';
        dropDownListWrap.style.display = 'none';
        dropDownBtn.style.display = 'block';
        document.body.style.marginRight = "";
      };
    
      document.addEventListener('click', function(e) {
        if (e.target !== dropDownBtn) {
          closeDropDown();
        }
      })
    
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') { 
          closeDropDown();
        }
      })
    });
  }
  dropdownFunc();

  // sort cards
  document.querySelector('.dropdown__list-item[data-value="expensive"]').addEventListener('click', () => {
    mySortDesc('data-price')
  });
  document.querySelector('.dropdown__list-item[data-value="cheap"]').addEventListener('click', () => {
    mySortAsc('data-price')
  });
  document.querySelector('.dropdown__list-item[data-value="popular"]').addEventListener('click', () => {
    mySortPopularAndNew('data-popular')
  });
  document.querySelector('.dropdown__list-item[data-value="new"]').addEventListener('click', () => {
    mySortPopularAndNew('data-new')
  });
  


  const mySortAsc = (sortType) => {
    let cards = document.querySelector('.cards');

    for (let i = 0; i < cards.children.length; i++) {
      for (let j = i; j < cards.children.length; j++) {
        // console.log(+cards.children[i].getAttribute(sortType));
        if (+cards.children[i].getAttribute(sortType) > +cards.children[j].getAttribute(sortType)) {
          let replacedNode = cards.replaceChild(cards.children[j], cards.children[i]);
          insertAfter(replacedNode, cards.children[i]);
        }
      }
    }
  }
  const mySortDesc = (sortType) => {
    let cards = document.querySelector('.cards');

    for (let i = 0; i < cards.children.length; i++) {
      for (let j = i; j < cards.children.length; j++) {
        if (+cards.children[i].getAttribute(sortType) < +cards.children[j].getAttribute(sortType)) {
          let replacedNode = cards.replaceChild(cards.children[j], cards.children[i]);
          insertAfter(replacedNode, cards.children[i]);
        }
      }
    }
  }

  const mySortPopularAndNew = (sortType) => {
    let cards = document.querySelector('.cards');

    for (let i = 0; i < cards.children.length; i++) {
      for (let j = i; j < cards.children.length; j++) {
        if (cards.children[i].getAttribute(sortType) !== 'true') {
          let replacedNode = cards.replaceChild(cards.children[j], cards.children[i]);
          insertAfter(replacedNode, cards.children[i]);
        }
      }
    }
  }

  const insertAfter = (elem, refElem) => {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
  }


  // filter cards
  
  const cardsFilter = () => {
    let allButtons = document.querySelectorAll('.toggle-button');
    
    allButtons.forEach(button => {
      button.addEventListener('change', cardsFilter);
    })
    
    let models = getClassOfCheckedCheckboxes(allButtons)
    filterResults(models);

  }

  cardsFilter();

  function getClassOfCheckedCheckboxes(checkboxes) {
    let classes = [];
    
    if (checkboxes && checkboxes.length > 0) {
      for (let i = 0; i < checkboxes.length; i++) {
        let cb = checkboxes[i];
        if (cb.checked) {
          classes.push(cb.dataset["filter"])
          
        }
      }
    }
    return classes;
  }
  
  function filterResults(models) {
    let allCards = document.querySelectorAll('.card');
    
    let hiddenElems = [];
    if (!allCards || allCards.length <= 0) {
      return;
    }
    
    for (let i = 0; i < allCards.length; i++) {
      let card = allCards[i];
      
      if (models.length > 0) {
        let isHidden = true;
        
        for (let j = 0; j < models.length; j++) {
          let filter = models[j];
          
          if (card.classList.contains(filter)) {
            isHidden = false;
            break;
          }
        }
        if (isHidden) {
          hiddenElems.push(card)
        }
      }
    }
    
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].style.display = "block"
    }
    if (hiddenElems.length <= 0) {
      return;
    }
    for (let i = 0; i < hiddenElems.length; i++) {
      hiddenElems[i].style.display = "none";
    }
    
  }

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

const prev = document.querySelector('.slide__arrow.slide__arrow-prev'),
      next = document.querySelector('.slide__arrow.slide__arrow-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.slide__dot');

let index = 0;

const activeSlide = n => {
  for (item of slides) {
    item.classList.remove('activeBlock');
  }
  slides[n].classList.add('activeBlock');
}

const activeDot = n => {
  for (slideDot of dots) {
    slideDot.classList.remove('active');
  }
  dots[n].classList.add('active');
}

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    activeSlide(index);
    activeDot(index);
  } else {
    index++;
    activeSlide(index);
    activeDot(index);
  }
}

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    activeSlide(index);
  } else {
    index--;
    activeSlide(index);
  }
}

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    activeSlide(index);
    activeDot(index);
  })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 4000)

// hamburger menu

const hamburger = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav__list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("display-block");
  navMenu.classList.toggle("display-block");
  nav.classList.toggle("display-block");
})
document.querySelectorAll('.nav__item').forEach(item => {
  item.addEventListener('click', () => {
    navMenu.classList.toggle("display-block");
    nav.classList.toggle("display-block");
  });
})

// mobile filter toggle

document.querySelector('.main__section-filter-link').addEventListener('click', () => {
  document.querySelector('.aside').style.display = 'block';
  document.querySelector('.aside').addEventListener('click', (e) => {
    document.querySelector('.aside').style.display = 'none';
  })

})