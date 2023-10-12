// let nameUser = prompt('Digite seu nome')
// if(nameUser === null || nameUser === undefined || nameUser === ''){
//     nameUser = 'FDP que nao se endentificou!!!!'
//     alert(`Bem vindo, ${nameUser} a nossa hamburgueria!!!🍔🍔🍔`)
// }
// alert(`Bem vindo, ${nameUser} a nossa hamburgueria!!!🍔🍔🍔`)

// document.write('Um dos nossos melhores clientes, o ', nameUser, ', Está em nossa loja')



const products = [
    {id:0, imgProduct: '/assets/hamburger.jpg', nameProduct: 'Buguer Y', descriptionsProduct: 'Pao brioche, blend 180g, queijo cheddar, alface, tomate e cebola', price: 39.9}


]

const productsTemplate = document.querySelector('.products-Template')


productsTemplate.innerHTML += `

<article class="box-product">
<img src="" width="180" alt="">
<h3 class="name-product">${products.nameProduct}</h3>
<p class="descriptions-products">${products.descriptionsProduct}</p>
<span class="price">${products.price}</span>
<button class="button-buy">Comprar</button>
</article>

`
const boxProduct = document.createElement('article')
boxProduct.classList.add('.box-product')

productsTemplate.children(boxProduct)