import Product from "./Product";
import {useState, useEffect} from "react";
import Pagination from "./Pagination";
export default function ProductList() {
    const limit = 12
    const [page, setPage] = useState(1)
    const [data, setData] = useState([])
    let skip = limit * (page - 1)
    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
            .then(res => res.json())
            .then(data => {
                setData(data)

            })
    }, [page]);
    return (
        <div className="flex flex-wrap w-full p-5">
            {data.products && data.products.map((product) => (
                <Product
                    key={product.id}
                    product={product}
                />

            ))}
            <Pagination
                page={page}
                setPage={setPage}
                maxPages={Math.ceil(data.total / 12)}

                />
        </div>
    )
}



