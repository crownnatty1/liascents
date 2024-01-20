class HttpRequest{
    constructor(){

    }

    async exploreProductsRequest(url){
        const data = await fetch(url)
        const response = await data.json()

        return response
    }

    async getProduct(url){
        const data = await fetch(url)
        const response = await data.json()

        return response
    }
}