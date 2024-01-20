// animation for h2 and h4 in home section
const homeh2 = document.querySelector('.home .homesect1 .hometext h2 li:nth-of-type(2)')

const textLoad = () => {
    setTimeout(() => {
        homeh2.textContent = '\"'
    }, 0);
    setTimeout(() => {
        homeh2.textContent = '\"S'
    }, 500);
    setTimeout(() => {
        homeh2.textContent = '\"Sc'
    }, 1000);
    setTimeout(() => {
        homeh2.textContent = '\"Sce'
    }, 1500);
    setTimeout(() => {
        homeh2.textContent = '\"Scen'
    }, 2000);
    setTimeout(() => {
        homeh2.textContent = '\"Scent'
    }, 2500);
    setTimeout(() => {
        homeh2.textContent = '\"Scents'
    }, 3000);
    setTimeout(() =>{
        document.querySelector('.home .homesect1 .hometext h2 li:nth-of-type(3)').style.display = 'none'
    }, 5500)
}

const lTagForH3Loading = document.querySelectorAll('.home .homesect1 .hometext .loading li')

// const lTagToArray = Array.from(lTagForH3Loading)
// console.log(lTagToArray.length)

document.addEventListener('DOMContentLoaded', ()=>{
    lTagForH3Loading.forEach((lTag, index, arr)=>{
        lTag.classList.add('animateLoading')
    })
    textLoad()
})


const sectionImg = document.querySelectorAll('.info .manymoreproducts .manymoreimg img')

const PopularProducts = document.querySelector('.theproducts').children

const ourProductsList = document.querySelector('.ourproductslist ul').children


const elementVisible = (el, className,callBck) => {
    const {top, left, bottom, right} = el.getBoundingClientRect();
    const {innerHeight, innerWidth} = window
    if(((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) && ((left > 0 && left < innerHeight) || (right > 0 && right < innerHeight))){
        sectionImg.forEach((img)=>{
            img.classList.add('showUp')
        })
        
        el.classList.add(className)
    } else{
        sectionImg.forEach((img)=>{
            img.classList.remove('showUp')
        })
        el.classList.remove(className)
    }
}

const PopularProductsVisible = (el, className,removeFirst,removeSecond) =>{
    const {top, left, bottom, right} = el.getBoundingClientRect()
    const {innerHeight, innerWidth }= window
    if(((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) && ((left > 0 && left < innerHeight) || (right > 0 && left < innerHeight))){
        if(removeFirst == null){
            // el.
        } else{
            el.classList.remove(className)
        }
    } else{
        if(removeSecond == null){
            el.classList.add(className)
        } else{
            el.classList.remove(className)
        }
    }
}

window.onscroll = () => {
    elementVisible(document.querySelector('.info .manymoreproducts .manymoreimg'))
    PopularProductsVisible(PopularProducts[0], 'first',true,null)
    PopularProductsVisible(PopularProducts[1], 'second',true,null)
    PopularProductsVisible(PopularProducts[2], 'third',true,null)
    PopularProductsVisible(PopularProducts[3], 'fourth',true,null)
}

// adding event on the toggle menu button
const toggleMenu = document.querySelector('.menu input')

const main = document.body.children[1]

toggleMenu.addEventListener('click', function(e){
    if(e.target.checked == true){
        main.classList.add('menu-up')
    } else if(e.target.checked == false){
        main.classList.remove('menu-up')
    }
})