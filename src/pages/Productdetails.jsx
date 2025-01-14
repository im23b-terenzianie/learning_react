import Base from "../layout/Base";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function Productdetails() {
    const id = useParams().id
    const [product, setProduct] = useState(null)
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                console.log(data)
            })
    }, [id])
    if (!product) {
        return <div>Loading...</div>
    }
    return (
        <Base>
            <div className="max-w-4xl mx-auto p-5">
                <h1 className="font-bold text-3xl mb-5">{product.title}</h1>
                <div className="flex flex-col md:flex-row gap-5">
                    <img className="w-full md:w-1/2 rounded-lg shadow-lg" src={product.thumbnail} alt={product.title}/>
                    <div className="flex flex-col justify-between">
                        <p className="text-lg mb-5">{product.description}</p>
                        <p className="text-2xl font-semibold text-gray-700">${product.price}</p>
                    </div>
                </div>
            </div>
        </Base>
    )
}