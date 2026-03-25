import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

interface Product {
  id: string | number
  name: string
  category: string
  description: string
  price: number
  image: string
}
function HomePage() {

const allProduct = useLoaderData() as Product[]
  // Categories
  const [cat, setCat] = useState(["All"])
  const [filterCategory, setFilterCategory] = useState("All")

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  // Extract categories
  useEffect(() => {
    let allcategory = allProduct.map(q => q.category)
    const mySet = new Set(allcategory)
    setCat(["All", ...mySet])
  }, [allProduct])

  // Filter products
  const filteredProducts = filterCategory === "All"
    ? allProduct
    : allProduct.filter(p => p.category === filterCategory)

  // Pagination Logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [filterCategory])

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Products</h2>

      {/* CATEGORY BUTTONS */}
      <div className="w-full p-4">
        <h2 className="text-xl font-semibold mb-3">Filter by Category</h2>

        <div className="flex flex-wrap gap-3">
          {cat.map((e, i) => (
            <button
              key={i}
              onClick={() => setFilterCategory(e)}
              className={`
                px-5 py-2 rounded-xl font-medium transition shadow-sm border
                ${filterCategory === e
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }
              `}
            >
              {e}
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCT LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentProducts.map((e:any, i:any) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-xl p-4 hover:shadow-2xl transition border"
          >
            <img
              src={e.image}
              alt={e.name}
              className="w-full h-48 object-cover rounded-md mb-3"
            />

            <h3 className="text-xl font-semibold">{e.name}</h3>

            <p className="text-gray-600 text-sm mt-1">{e.description}</p>

            <p className="text-lg font-bold text-green-600 mt-3">
              ₹{e.price}
            </p>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-8 gap-2 flex-wrap">
        
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
          className="px-4 py-2 border rounded bg-gray-200 disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`
              px-4 py-2 border rounded
              ${currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-white"}
            `}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => prev + 1)}
          className="px-4 py-2 border rounded bg-gray-200 disabled:opacity-50"
        >
          Next
        </button>

      </div>
    </div>
  )
}

export default HomePage