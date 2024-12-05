import Product from "./Product";
import {useState, useEffect} from "react";

export default function ProductList() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data.products)
            })
    }, []);
    return (
        <div className="flex flex-wrap w-full p-5">
            {products && products.map((product) => (
                <Product
                    key={product.id}
                    product={product}
                />

            ))}
        </div>
    )
}


