
import Base from "../layout/Base";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function Productdetails() {
    const id = useParams().id
    const [product, setProduct] = useState(null )
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
        <div>
            <Base>
                <div className="">
                    <h1 className="font-bold text-2xl ">{product.title}</h1>
                    <img src={product.thumbnail}/>
                    <p>{product.description}</p>
                    <p className="text-gray-500">{product.price}</p>
                </div>
            </Base>
        </div>
    )
}