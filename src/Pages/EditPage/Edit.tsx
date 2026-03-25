import React, { useState } from 'react'
import { addDataApi, updateAi } from '../Service/ProductApi'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'

function Edit() {
  // 6
  // 7 service ma  have badho data input field ma chhe ema change karine api ma set karavanu
  const singleData = useLoaderData()
// fil karavyu
  let [editProductData, setEditProductData] = useState({
    id: singleData.id,
    name: singleData.name,
    price: singleData.price,
    image: singleData.image,
    category: singleData.category,
    stock: singleData.stock,
    description: singleData.description
  })

// 9 
const navigator=useNavigate()

  function handleOnChangeEvent(event: any) {
    const { name, value } = event.target
    setEditProductData({ ...editProductData, [name]: value })
  }


  async function handleSubmit(e: any) {
    e.preventDefault()
    // 8
    let s = await updateAi(editProductData.id, editProductData)
    if(s){
      alert("updated successfully")
      // 9 data perfect upate thayo to view par javnu upar chhe naviagate
      navigator("/view")
    }
    else{
            alert("updated not ")

    }
  }



  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 my-10 w-full ">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-6">
            Edit New Product
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
                value={editProductData.name}
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
                value={editProductData.price}

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
                value={editProductData.category}

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
                value={editProductData.stock}

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
                value={editProductData.image}

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
                value={editProductData.description}

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
                Update Product
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Edit
