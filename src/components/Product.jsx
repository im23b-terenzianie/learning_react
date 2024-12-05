export default function Product(props) {
    console.log(props.product)
    const product = props.product
    return (
        <div className="w-1/4 p-5">
            <img src={product.thumbnail}/>
            <h2 className="font-bold">{product.title}</h2>
            <p>{product.description}</p>
            <p className="text-gray-500">{product.price}</p>
        </div>
    )
}