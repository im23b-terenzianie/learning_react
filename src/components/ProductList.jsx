import Product from "./Product";
import {useState, useEffect} from "react";

export default function ProductList() {
    const limit = 12
    const [page, setPage] = useState(1)
    const [products, setProducts] = useState([])
    let skip= limit*(page-1)
    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data.products)
            })
    }, [page]);
    return (
        <div className="flex flex-wrap w-full p-5">
            {products && products.map((product) => (
                <Product
                    key={product.id}
                    product={product}
                />

            ))}
            {/* BUTTON:PREV ZAHL:CURRENT BUTTON:NEXT*/}
            <button className="border-1" onClick={() =>setPage(page-1)} disabled={page=== 1}>Prev</button>
            <p className="mx-2">{page}</p>
            <button className="border-1" onClick={() =>setPage(page+1)}>Next</button>
        </div>
    )
}


