import { useEffect } from "react";
import { useState } from "react";
import fetchProducts from "../modules/GetProducts";
import { EcommerceCard } from "./ProductCard";
import { getCookie } from "../modules/Cookies";

export default function ProductsList(){

    const[products, setProducts] = useState([]);

    useEffect(() => {
        const headers = { 'Authorization': 'Bearer ' + getCookie("loggedIn") };
        fetch("http://localhost:8080/products", { headers })
        .then(response => response.json())
        .then(data => setProducts(data));
        
    }, []);

    return (
        <div className="mx-auto max-w-[1380px] px-4 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    products.map((product, index) =>(
                        <EcommerceCard product={product} key={index}/>
                    ))
                }
            </div>
        </div>
    )


}