
window.addEventListener("DOMContentLoaded", function() {
  'use strict';

  //fetch query parameters

  const requestData = async (
    url,
    method = 'GET',
    body = null,
    headers = {'Content-Type': 'application/json'}
  ) => {	
    try {
      const res = await fetch(url, {method, body, headers});
      if (res.ok === true) {
        return await res.json();
      }
      return false;

    } catch (err) {
      console.error(err);
    }
  }

  const generateCards = ({title, id, img, price, classfilter, popular, newfilter}) => {
    return `
      <div class="card cardId ${classfilter}" data-id="${id}" data-sort="${price}" data-popular="${popular}" data-new="${newfilter}" data-filter="${classfilter}">
        <div class="card__image-block"><img class="card__image" src="./images/cards/${img}.png" alt="${title}" /></div>
        <div class="card__content-block">
          <h3 class="card__title">${title}</h3>
          <div class="card__price">${price} ₽</div>
          <div class="card__btn-position">
            <button class="card__btn btnAdd"></button>
          </div>
        </div>
      </div>
    `
  }
  
  const renderGoods = async () => {
    const data = await requestData("https://630a4bf0f280658a59cd0ad1.mockapi.io/goods");
    console.log(data);

    let cards = document.querySelector('.cards');
    let items = data.map(item => {
      return generateCards(item);

    })
    cards.innerHTML = items;


    /// add items to cart
  
    const productsBtn = document.querySelectorAll('.card__btn');
    const cartProductsList = document.querySelector('.cart__body-cards');
    const cart = document.querySelector('.cart');
    const cartQuantity = document.querySelector('.cart-count');
    const totalCount = document.querySelector('.totalCount');
    let price = 0;


    const randomId = () => {
      return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    const priceWithoutSpaces = (str) => {
      return str.replace(/\s/g, '');
    }

    const normalPrice = (str) => {
      return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    }

    const plusFullPrice = (currentPrice) => {
      return price += currentPrice;
    }
    const minusFullPrice = (currentPrice) => {
      return price -= currentPrice;
    }

    const printFullPrice = () => {
      totalCount.textContent = `${normalPrice(price)} ₽`;
    }

    const printQuantity = () => {
      let length = cartProductsList.children.length;
      cartQuantity.textContent = length;
      // length > 0 ? cart.classList.add('active') : cart.classList.remove('active');
    }

    const generateCartProduct = (img, title, price, id) => {
      
      return `
      <div class="cart__item">
        <img class="cart__item-img" src="${img}" alt="image" data-id="${id}" />
        <div class="cart__item-descr">
            <h4 class="cart__item-descr-title">${title}</h4>
            <div class="cart__item-price">${normalPrice(price)} ₽</div>
        </div>
        <div class="cart__item-buttons">
          <button class="btn-minus"></button>
          <span>2</span>
          <button class="btn-plus"></button>
        </div>
        <button class="btn-remove"></button>
        <button class="btn-restore"></button>
    </div>
      `
    }

    const deleteProducts = (product) => {
      let id = product.querySelector('.cart__item-img').dataset.id;
      console.log(id);
      let currentPrice = parseInt(priceWithoutSpaces(product.querySelector('.cart__item-price').textContent));
      // let currentPrice = parseInt(product.querySelector('.cart__item-price')).textContent;
      minusFullPrice(currentPrice);
      printFullPrice();
      product.remove();
      printQuantity();
    }

    productsBtn.forEach(el => {
      // el.closest('.cardId').setAttribute('data-id', randomId());
      el.addEventListener('click', (e) => {
        let self = e.currentTarget;
        let parent = self.closest('.card');
        let id = parent.dataset.id;
        let img = parent.querySelector('img').getAttribute('src');
        let title = parent.querySelector('.card__title').innerText;
        let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.card__price').innerText));
        

        plusFullPrice(priceNumber);
        printFullPrice();
        cartProductsList.insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceNumber, id));
        printQuantity();
        // self.disabled = true;
      })
    })

    cartProductsList.addEventListener('click', (e) => {
      if (e.target.classList.contains('btn-remove')) {
        deleteProducts(e.target.closest('.cart__item'));
      }
    });

    // total card count

    let cardsCount = document.querySelectorAll('.card');
    document.querySelector('.card-count').innerHTML = cardsCount.length + ' товаров';


    filterFunc();
  }
  
  
  renderGoods();






  // Полифил для метода forEach
  if (window.NodeList && !NodeList.prototype.forEach) {
    thisArg = thisArg || window;
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  }


  // dropdown

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
    });
  
    dropDownListItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove('dropdown__list--visible');
        document.body.style.overflow = 'visible';
        dropDownListWrap.style.display = 'none';
        dropDownBtn.style.display = 'block';
      });
    })
  
    document.addEventListener('click', function(e) {
      if (e.target !== dropDownBtn) {
        dropDownList.classList.remove('dropdown__list--visible');
        document.body.style.overflow = 'visible';
        dropDownListWrap.style.display = 'none';
        dropDownBtn.style.display = 'block';
      }
    })
  
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Tab' || e.key === 'Escape') { 
        dropDownList.classList.remove('dropdown__list--visible');
        document.body.style.overflow = 'visible';
        dropDownListWrap.style.display = 'none';
        dropDownBtn.style.display = 'block';
      }
    })
  });

  // sort cards

  document.querySelector('.dropdown__list-item[data-value="expensive"]').addEventListener('click', () => {
    mySortDesc('data-sort')
  });
  document.querySelector('.dropdown__list-item[data-value="cheap"]').addEventListener('click', () => {
    mySortAsc('data-sort')
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

  const filterFunc = () => {
    const filterBox =  document.querySelectorAll('.card');
  
    document.querySelector('.aside__filter-buttons').addEventListener('click', (e) => {
      
      if (e.target.classList.contains('.toggle-button')) return false;
  
      let filterSet = e.target.getAttribute('data-filter');
      
      filterBox.forEach(elem => {
        elem.classList.remove('display-none');
        if (!elem.classList.contains(filterSet)) {
          elem.classList.add('display-none');
        }
      })
    })
  }


  // show hide cart

  document.querySelector('.cartBtn').addEventListener('click', () => {
    document.querySelector('.cart').style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    document.querySelector('.btn-close').addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector('.cart').style.display = 'none';
      document.body.style.overflow = 'visible';
    })
  });


  //send data to db

  const sentCart = () => {

    const data = {
      "id": "",
      "img": "",
      "name": "",
      "price": "",
      "quantity": "",
      "title": "",
      "description": "",
      "count": "",
      "amount": "",
    }

  }



  


});
