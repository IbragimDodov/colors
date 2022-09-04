let cards=document.getElementById("cards"),cartBodyInner=document.querySelector(".cart__body-cards"),cartBody=document.querySelector(".cart__body"),cartFooter=document.getElementById("cart__footer"),cardsData=[{id:1,title:"Краска Wallquest, Brownsone MS90102",img:"1.jpg",price:"6000",filterClasses:{new:!1,available:"available",contract:"contract",exclusive:!1,sale:!1},filters:{new:!1,available:!0,contract:!0,exclusive:!1,sale:!1},raiting:1,inCart:0},{id:2,title:"Краска Wallquest, Brownsone MS90102",img:"2.png",price:"4800",filterClasses:{new:!1,available:"available",contract:"contract",exclusive:!1,sale:!1},filters:{new:!1,available:!0,contract:!0,exclusive:!1,sale:!1},raiting:2,inCart:0},{id:3,title:"Краска Wallquest, Brownsone MS90102",img:"3.png",price:"5290",filterClasses:{new:!1,available:!1,contract:"contract",exclusive:!1,sale:!1},filters:{new:!1,available:!1,contract:!0,exclusive:!1,sale:!1},raiting:3,inCart:0},{id:4,title:"Краска Wallquest, Brownsone MS90102",img:"4.png",price:"2800",filterClasses:{new:!1,available:"available",contract:"contract",exclusive:!1,sale:!1},filters:{new:!1,available:!0,contract:!0,exclusive:!1,sale:!1},raiting:4,inCart:0},{id:5,title:"Краска Wallquest, Brownsone MS90102",img:"5.png",price:"3400",filterClasses:{new:"new",available:"available",contract:"contract",exclusive:!1,sale:!1},filters:{new:!0,available:!0,contract:!0,exclusive:!1,sale:!1},raiting:5,inCart:0},{id:6,title:"Краска Wallquest, Brownsone MS90102",img:"6.png",price:"6000",filterClasses:{new:!1,available:"available",contract:"contract",exclusive:!1,sale:!1},filters:{new:!1,available:!0,contract:!0,exclusive:!1,sale:!1},raiting:1,inCart:0},{id:7,title:"Краска Wallquest, Brownsone MS90102",img:"7.png",price:"4800",filterClasses:{new:!1,available:!1,contract:"contract",exclusive:!1,sale:!1},filters:{new:!1,available:!1,contract:!0,exclusive:!1,sale:!1},raiting:2,inCart:0},{id:8,title:"Краска Wallquest, Brownsone MS90102",img:"8.png",price:"5290",filterClasses:{new:!1,available:!1,contract:!1,exclusive:!1,sale:!1},filters:{new:!1,available:!1,contract:!1,exclusive:!1,sale:!1},raiting:3,inCart:0},{id:9,title:"Краска Wallquest, Brownsone MS90102",img:"9.png",price:"2800",filterClasses:{new:!1,available:"available",contract:!1,exclusive:"exclusive",sale:!1},filters:{new:!1,available:!0,contract:!1,exclusive:!0,sale:!1},raiting:4,inCart:0},{id:10,title:"Краска Wallquest, Brownsone MS90102",img:"10.png",price:"3400",filterClasses:{new:!1,available:"available",contract:"contract",exclusive:!1,sale:!1},filters:{new:!1,available:!0,contract:!0,exclusive:!1,sale:!1},raiting:5,inCart:0},{id:11,title:"Краска Wallquest, Brownsone MS90102",img:"1.jpg",price:"6000",filterClasses:{new:!1,available:!1,contract:"contract",exclusive:"exclusive",sale:!1},filters:{new:!1,available:!1,contract:!0,exclusive:!0,sale:!1},raiting:1,inCart:0},{id:12,title:"Краска Wallquest, Brownsone MS90102",img:"2.png",price:"4800",filterClasses:{new:!1,available:!1,contract:"contract",exclusive:!1,sale:"sale"},filters:{new:!1,available:!1,contract:!0,exclusive:!1,sale:!0},raiting:1,inCart:0},{id:13,title:"Краска Wallquest, Brownsone MS90102",img:"6.png",price:"5290",filterClasses:{new:!1,available:!1,contract:"contract",exclusive:"exclusive",sale:"sale"},filters:{new:!1,available:!1,contract:!0,exclusive:!0,sale:!0},raiting:4,inCart:0},{id:14,title:"Краска Wallquest, Brownsone MS90102",img:"4.png",price:"2800",filterClasses:{new:"new",available:"available",contract:"contract",exclusive:!1,sale:!1},filters:{new:!0,available:!0,contract:!0,exclusive:!1,sale:!1},raiting:5,inCart:0},{id:15,title:"Краска Wallquest, Brownsone MS90102",img:"8.png",price:"3400",filterClasses:{new:"new",available:"available",contract:"contract",exclusive:!1,sale:"sale"},filters:{new:!0,available:!0,contract:!0,exclusive:!1,sale:!0},raiting:3,inCart:0}],basket=JSON.parse(localStorage.getItem("data"))||[];function generateCards(){return cards.innerHTML=cardsData.map(e=>{let{id:t,title:a,img:l,price:i}=e;e=basket.find(e=>e.id===t)||[];return`
        <div id="product-id-${t}" class="card cardId hover new" data-sort="6000" data-popular="true" data-new="true" data-filter="new">
          <div class="card__image-block"><img class="card__image" src="./images/cards/${l}" alt=${a} /></div>
          <div class="card__content-block">
            <h3 class="card__title">${a}</h3>
            <div class="card__price">${i} ₽</div>
            <div class="card__btn-position">
              <div id="${t}" class="quantity">
                ${void 0===e.item?0:e.item}
              </div>
              <button onclick="increment(${t})" class="card__btn btnAdd"></button>
            </div>
          </div>
        </div>
      `}).join("")}generateCards();let generateCartItems=()=>{if(0!==basket.length)return cartBodyInner.innerHTML=basket.map(e=>{let{id:t,item:a}=e;e=cardsData.find(e=>e.id===t)||[];return`
        <div class="cart__item">
          <img class="cart__item-img" src="./images/cards/${e.img}" alt="${e.title}" data-id="" />
          <div class="cart__item-descr">
              <h4 class="cart__item-descr-title">${e.title}</h4>
              <div class="cart__item-price">${e.price*a} ₽</div>
          </div>
          <div class="cart__item-buttons">
            <button onclick="decrement(${t})" class="btn-minus"></button>
            <span id="${t}">${a}</span>
            <button onclick="increment(${t})" class="btn-plus"></button>
          </div>
          <button onclick="removeItem(${t})" class="btn-remove"></button>
          <button class="btn-restore"></button>
        </div>
      `}).join("");cartBody.style.color="black",cartBody.innerHTML=`
      <h2> The cart is empty </h2>
    `},increment=(generateCartItems(),e=>{let t=e,a=basket.find(e=>e.id===t);void 0===a?basket.push({id:t,item:1}):a.item+=1,generateCartItems(),update(t),localStorage.setItem("data",JSON.stringify(basket))}),decrement=e=>{let t=e,a=basket.find(e=>e.id===t);void 0!==a&&0!==a.item&&(--a.item,update(t),basket=basket.filter(e=>0!==e.item),generateCartItems(),localStorage.setItem("data",JSON.stringify(basket)))},update=t=>{var e=basket.find(e=>e.id===t);document.getElementById(t).innerHTML=e.item,calculation(),totalAmount()},removeItem=e=>{let t=e;basket=basket.filter(e=>e.id!==t),generateCartItems(),totalAmount(),calculation(),localStorage.setItem("data",JSON.stringify(basket))},clearCart=()=>{basket=[],generateCartItems(),calculation(),localStorage.setItem("data",JSON.stringify(basket))},totalAmount=()=>{var e;0!==basket.length&&(e=basket.map(e=>{let{item:t,id:a}=e;return t*(cardsData.find(e=>e.id===a)||[]).price}).reduce((e,t)=>e+t,0),cartFooter.innerHTML=`
      <div class="count-block"><span>Итого</span><span class="totalCount">${e} ₽</span></div>
      <button class="orderBtn">Оформить заказ</button>
    `)},calculation=(totalAmount(),()=>{let e=document.getElementById("cart-count");e.innerHTML=basket.map(e=>e.item).reduce((e,t)=>e+t,0)});calculation(),document.querySelector(".cartBtn").addEventListener("click",()=>{document.querySelector(".cart").style.display="block",window.scrollTo(0,0),document.body.style.overflow="hidden",document.querySelector(".btn-close").addEventListener("click",function(e){e.preventDefault(),document.querySelector(".cart").style.display="none",document.body.style.overflow="visible"})});const sliders=(e,t,a,l)=>{let i=1;const s=document.querySelectorAll(e);function n(e){e>s.length&&(i=1),e<1&&(i=s.length),s.forEach(e=>{e.classList.add("animated"),e.style.display="none"}),s[i-1].style.display="block"}function c(e){n(i+=e)}n(i);try{const r=document.querySelector(a),o=document.querySelector(l);r.addEventListener("click",()=>{c(-1),s[i-1].classList.remove("slideInLeft"),s[i-1].classList.add("slideInRight")}),o.addEventListener("click",()=>{c(1),s[i-1].classList.remove("slideInRight"),s[i-1].classList.add("slideInLeft")})}catch(e){}};sliders();