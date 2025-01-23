import React, {useContext} from 'react';
import Base from "../layout/Base";
import Product from "../components/Product";
import CartContext from "../context/Cart";
import cart from "../context/Cart";

export default function Cart() {
    const [cart] = useContext(CartContext);
    console.log(cart);
    return (

        <Base>
            <h1>Cart</h1>
            <hr/>
            <div className="flex flex-wrap p-5">
                {cart && cart.map((product) => (
                    <Product product={product}/>
                ))}
            </div>
        </Base>
    );
}