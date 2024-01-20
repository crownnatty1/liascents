const ui = new Ui()

const request = new HttpRequest()

// adding event when the dom content loads
document.addEventListener('DOMContentLoaded', function(){
    ui.displayElement('none', '.ourproductslist')
    ui.displayElement('none', '.ourproducts')
    ui.displayElement('none', '.searchingproducts')
    ui.displayElement('none', '.sellstage')
    document.querySelector('.home').scrollIntoView()
})

// adding event on the explore button in home section
const exploreButton = document.querySelector('.explore')

exploreButton.addEventListener('click', function(){

    const ourProductsContainer = document.querySelector('.ourproductslist')

    if(ourProductsContainer.innerHTML !== ''){
        ui.clearSelectedProductsContainer('.ourproductslist ul')
    }

    request.exploreProductsRequest('/productslist.json').then((res) => {

        res.forEach(data => {

           ui.displayOurProductsList(data)

        });

    }).catch(err => console.log(err))

    ui.navigateThrough('ourproductslist')
})

// adding event on the listed products to get and list the products under the category
const productsList = document.querySelector('.ourproductslist')

productsList.addEventListener('click', function(e){
    console.log(e)

    if(e.target.nodeName == 'IMG'){

        ui.clearSelectedProductsContainer('.otherselectedproducts')

        const targetProduct = e.target.parentElement.id

        request.getProduct('/products.json').then((res) => {

            res.forEach(data => {

                if(data.id == targetProduct){

                    data.products.forEach(product => {

                        ui.getProductsCategory(product)
                    })

                    ui.navigateThrough('ourproducts')
                }
            })
        })

    } else if( e.target.nodeName == 'LI'){
        console.log(e.target)
    }
})

// adding event on the listed products to get the product info
const ourProducts = document.querySelector('.ourproducts')
var selectedProduct

ourProducts.addEventListener('click', function(e){

    if(e.target.nodeName == 'BUTTON'){

        const targetProduct = e.target.parentElement.parentElement.children

        const imagesSrc = targetProduct[0].getAttribute('src')

        const productName = targetProduct[1].children[0].textContent

        const price =  targetProduct[1].children[1].textContent

        ui.displaySelectedElementInSellStage(imagesSrc, productName,price)

        ui.navigateThrough('sellstage')
    }
})


// selecting the menu list tags 
const menulist = document.querySelector('.menulist').children

// adding event on the home tag in the menulist 
menulist[0].addEventListener('click', function(e){

    ui.navigateThrough('home')

    main.classList.remove('menu-up')

    e.preventDefault()
})

// adding event on the our products list tag in the menu list
menulist[1].addEventListener('click', function(e){

    const ourProductsContainer = document.querySelector('.ourproductslist')

    if(ourProductsContainer.innerHTML !== ''){
        ui.clearSelectedProductsContainer('.ourproductslist ul')
    }

    request.exploreProductsRequest('/productslist.json').then((res) => {

        res.forEach(data => {


           ui.displayOurProductsList(data)
        });

    }).catch(err => console.log(err))

    ui.navigateThrough('ourproductslist')

    e.preventDefault()
})