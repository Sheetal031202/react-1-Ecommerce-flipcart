import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import AddProduct from "../Pages/AddProductPage/AddProduct";
import ViewProduct from "../Pages/ViewProductPage/ViewProduct";
import ContactPage from "../Pages/ContactPage/ContactPage";
import { ProductApiService, singleProductFetch } from "../Pages/Service/ProductApi";
import { Component } from "react";
import ErrorPage from "../Pages/NotFound/ErrorPage";
import Edit from "../Pages/EditPage/Edit";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: HomePage,
                loader: async () => {
                    return await ProductApiService();
                }
            },
            {
                path: "/add",
                Component: AddProduct
            },
            {
                path: "/view",
                Component: ViewProduct,
                loader: async () => {
                    return await ProductApiService()
                }
            }, {
                path: "/contact",
                Component: ContactPage
            },
             {
 
                path: "/edit/:id",
                Component: Edit,
                 loader: async ({params}) => {
                    return await (singleProductFetch(params.id as string))
                }
            },
            {
                path: "*",
                Component: ErrorPage
            }
        ]
    }
])