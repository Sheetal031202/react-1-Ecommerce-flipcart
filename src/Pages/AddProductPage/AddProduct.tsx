import React, { useState } from 'react'
import { addDataApi } from '../Service/ProductApi'

interface Product {
  id: string
  name: string
  price: string
  image: string
  category: string
  stock: string
  description: string
}


function AddProduct() {
  const [addProductData, setAddProductData] = useState<Product>({
    id: Math.floor(Math.random() * 1000).toString(),
    name: "",
    price: "",
    image: "",
    category: "",
    stock: "",
    description: ""
  })



  function handleOnChangeEvent(event: any) {
    const { name, value } = event.target
    setAddProductData({ ...addProductData, [name]: value })
  }

  async function handleSubmit(e: any) {
    e.preventDefault()
    console.log(addProductData)

    const status = await addDataApi(addProductData)
    if (status) {
      alert("Added succesfully")

      setAddProductData({
        id: Math.floor(Math.random() * 1000).toString(),
        name: "",
        price: "",
        image: "",
        category: "",
        stock: "",
        description: ""
      })
    }
    else {
      alert(" not Added ")
    }


  }



  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 my-10 w-full ">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
            Add New Product
          </h2>

          {/* 4 */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Product Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Product Name
              </label>
              <input
                type="text"
                name='name'
                value={addProductData.name}
                onChange={handleOnChangeEvent}
                placeholder="Enter product name"
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Price
              </label>
              <input
                type="number"
                name='price'
                value={addProductData.price}

                onChange={handleOnChangeEvent}
                placeholder="Enter price"
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Category
              </label>
              <select
                name='category'
                value={addProductData.category}

                onChange={handleOnChangeEvent}
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value=""       >Select category</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Books</option>
                <option>Home Appliances</option>
              </select>
            </div>

            {/* Stock */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Stock Quantity
              </label>
              <input
                name='stock'
                value={addProductData.stock}

                onChange={handleOnChangeEvent}
                type="number"
                placeholder="Enter stock quantity"
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Product Image URL
              </label>
              <input
                value={addProductData.image}

                name='image'
                onChange={handleOnChangeEvent}
                type="text"
                placeholder="https://example.com/image.jpg"
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Description
              </label>
              <textarea
                rows={4}
                name='description'
                value={addProductData.description}

                onChange={handleOnChangeEvent}
                placeholder="Enter product description"
                className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default AddProduct
