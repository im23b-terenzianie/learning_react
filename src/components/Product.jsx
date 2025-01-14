import {useNavigate} from "react-router-dom";

export default function Product(props) {
    console.log(props.product)
    const product = props.product
    const navigate = useNavigate()
    return (
        <div className="w-1/4 p-5" onClick={()=>{navigate(`/products/:${product.id}`)}}>
            <img src={product.thumbnail}/>
            <h2 className="font-bold">{product.title}</h2>
            <p>{product.description}</p>
            <p className="text-gray-500">{product.price}</p>
        </div>
    )
}