class Ui{
    constructor(){

    }

    displayElement(type,element){
        if(type == 'none'){
            document.querySelector(element).style.display = 'none'
        } else if(type == 'block'){
            document.querySelector(element).style.display = 'block'
        }
    }

    displayOurProductsList(products, id){
        const ourproductslist = document.querySelector('.ourproductslist ul')

        let outPut = ''

        outPut += `
            <li id="${products.id}">
                <img src="${products.imagesSrc}"/>
                <div>
                    <h5>${products.productName}</h5>
                    <h4>99.99% What You Ordered on what you got</h4>
                </div>
            </li>
        `
        ourproductslist.innerHTML += outPut
    }

    static showElement(type,element){
        if(type == 'none'){
            document.querySelector(element).style.display = 'none'
        } else if(type == 'block'){
            document.querySelector(element).style.display = 'block'
        }
    }

    navigateThrough(elementToshow){
        const mainTag = document.querySelector('main').children

        const toArr = Array.from(mainTag)
        toArr.forEach((sections) => {
            if(sections.classList.contains(elementToshow.toString())){
                const classname = sections.classList
                const arr = classname[0]
                const appendPeriodtoclasname = arr.split('')
                appendPeriodtoclasname.unshift('.')
                const converttoclassname = appendPeriodtoclasname.join('')
                Ui.showElement('block',converttoclassname)

            }else if(sections.classList.contains('aboutus')){
                Ui.showElement('block', '.aboutus')

            }else if(sections.classList.contains('policesinfo')){
                Ui.showElement('block', '.policesinfo')

            }else if(sections.classList.contains('contact')){
                Ui.showElement('block', '.contact')

            }else{
                const classname = sections.classList
                const arr = classname[0]
                const appendPeriodtoclasname = arr.split('')
                appendPeriodtoclasname.unshift('.')
                const converttoclassname = appendPeriodtoclasname.join('')
                Ui.showElement('none',converttoclassname)
                // console.log(converttoclassname)
            }
        })
    }

    getProductsCategory(products){
        let outPut = ''

        outPut += `
            <div class="otherperfume otherselectedproduct">
                <img src="${products.src}" alt="">
                <div>
                    <h4>${products.name}</h4>
                    <h4>Price: Chat with the product ownner </h4>                                
                    <button>Place Order</button>
                </div>
            </div>
        `;

        document.querySelector('.otherselectedproducts').innerHTML += outPut
    };

    clearSelectedProductsContainer(element){
        document.querySelector(element).innerHTML = ''
    }

    displaySelectedElementInSellStage(imagesSrc,productName,price){
        const sellStageContainer = document.querySelector('.sellstagecontain').children[0]

        sellStageContainer.innerHTML = `
            <img src="${imagesSrc}" alt="">
            <div class="sellstagetext">
                <h3>${productName}</h3>
                <span>${price}</span>
                <button class="sellnow">Buy Now</button>
            </div>
        `
    }
}