import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { deleteProduct, ProductApiService } from "../Service/ProductApi";


interface Product {
  id: string
  name: string
  category: string
  price: number
  stock: number
  image: string
}
function ViewProductPage() {
  const ViewPageData = useLoaderData() as Product[]
const [deleteUpdatedData, setDeleteUpdatedData] = useState<Product[]>(ViewPageData)

  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("az")
const [maxMin, setMaxMin] = useState<[number, number]>([0, 0])
  const [price, setPrice] = useState(0)

  const filterData = deleteUpdatedData
  .filter((data: any) => {
    const name = data.name?.toLowerCase() || "";
    const category = data.category?.toLowerCase() || "";

    const searchData =
      name.includes(search.toLowerCase()) ||
      category.includes(search.toLowerCase());

    const priceData = data.price >= price;

    return searchData && priceData;
  })
  .sort((a: any, b: any) => {
    const nameA = a.name?.toLowerCase() || "";
    const nameB = b.name?.toLowerCase() || "";

    return sort === "az"
      ? nameA.localeCompare(nameB)
      : nameB.localeCompare(nameA);
  });

  useEffect(() => {
    if (deleteUpdatedData.length > 0) {
      const allPrice = deleteUpdatedData.map(p => p.price);
      const max = Math.max(...allPrice);
      const min = Math.min(...allPrice);

      setMaxMin([min, max]);
    }
  }, [deleteUpdatedData]);


  const hereNavigate = useNavigate()
  async function deleteData(id: string) {
    let status = await deleteProduct(id)

    if (status) {
      alert(`product deleted successfuly.. product id: ${id}`)
      const updatedData = await ProductApiService();
      setDeleteUpdatedData(updatedData)
    }
    else {
      alert("not deleted")
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen my-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white dark:text-white text-center mb-8">
          View Products 
        </h2>


        {/* search*/}
        <form className="max-w-md my-3 mx-auto">
          <label
            htmlFor="search"
            className="block mb-2.5  font-medium text-heading sr-only "
          >
            Search
          </label>


          {/* a-z search */}
          <div className="my-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Sort By
            </label>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full p-3 bg-gray-800 text-white border border-gray-700 
               rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
               cursor-pointer"
            >
              <option value="az">A → Z </option>
              <option value="za">Z → A </option>
            </select>
          </div>

          {/* range */}
          <div className="my-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Price Range: <span className="text-white font-semibold">₹{price}</span>
            </label>

            <div className="flex items-center gap-4">
              {/* Min value */}
              <span className="text-gray-400 text-sm">₹{maxMin[0]}</span>

              {/* Slider */}
              <input
                type="range"
                min={maxMin[0]}
                max={maxMin[1]}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />

              {/* Max value */}
              <span className="text-gray-400 text-sm">₹{maxMin[1]}</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-body"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"

              onChange={(e) => setSearch(e.target.value)}
              id="search"
              className="block w-full p-3 text-white ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
              placeholder="Search "
            />

          </div>

        </form>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
            <thead className="text-xs uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-6 py-3">No</th>
                <th className="px-6 py-3">Id</th>
                <th className="px-6 py-3">Image</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Stock</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterData.map((product: any, index: any) => (
                <tr
                  key={product.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {product.id}
                  </td>
                  <td className="px-6 py-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-14 h-14 object-cover rounded-lg border"
                    />
                  </td>
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4 text-blue-600 dark:text-blue-400 font-semibold">
                    ₹{product.price}
                  </td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4 text-center space-x-3">
                    <button onClick={() => hereNavigate(`/edit/${product.id}`)} className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                      Edit
                    </button>
                    <button onClick={() => deleteData(product.id)} className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
                      Delete
                    </button>
                  </td>
                </tr>
              ))

              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ViewProductPage;
