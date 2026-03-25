export interface Product {
  id: string
  name: string
  price: string
  image: string
  category: string
  stock: string
  description: string
}

export async function ProductApiService() {
    let productUrl = await fetch("https://react-1-api.onrender.com/product")
    let homePageShowData = await productUrl.json()
    return homePageShowData
}


export async function addDataApi(body: Product) {
     let res = await fetch("https://react-1-api.onrender.com/product", {
      method: "POST",
      body: JSON.stringify(body)  
    })
   
    return res.ok
}

export async function deleteProduct(id:string) {
     let res = await fetch(`https://react-1-api.onrender.com/product/${id}`, {
      method: "DELETE",
    })
   
    return res.ok
}

export async function singleProductFetch(id:string) {
     let res = await fetch(`https://react-1-api.onrender.com/product/${id}` )
    return await res.json()
}


export async function updateAi(id:any,body:Product) {
     let res = await fetch(`https://react-1-api.onrender.com/product/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body)  
    })
   
    return res.ok
}