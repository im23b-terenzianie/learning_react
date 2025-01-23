import Base from "../layout/Base";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useContext} from "react";
import CartContext from "../context/Cart";

export default function Productdetails() {
    const id = useParams().id
    const [product, setProduct] = useState(null)
    const [cart, setCart] = useContext(CartContext)

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
    function addToCart(e) {
        e.preventDefault();
        var product = {
            title: e.target.title.value,
            description: e.target.description.value,
            price: e.target.price.value,
            thumbnail: e.target.thumbnail.value
        }
        setCart([...cart, product])
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
            <form onSubmit={addToCart} className={"p-5"}>
                <input type={"hidden"} name={"title"} value={product.title}/>
                <input type={"hidden"} name={"description"} value={product.description}/>
                <input type={"hidden"} name={"price"} value={product.price}/>
                <input type={"hidden"} name={"thumbnail"} value={product.thumbnail}/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type={"submit"} >
                Add to Cart
            </button>
            </form>
        </Base>
    )
}
