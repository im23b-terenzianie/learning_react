import React from 'react';
import Base from "../layout/Base";
import Product from "../components/Product";
export default function Search() {
    const [data, setData] = React.useState([]);
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.search.value);
        fetch(`https://dummyjson.com/products/search?q=${e.target.search.value}`)
        .then(response => response.json())
        .then(data => setData(data));

    }

    return (

        <Base>
            <h1>Search</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type={"text"}
                    name={"search"}
                    id={"search"}
                />
            </form>
            <hr/>
            <div className="flex flex-wrap p-5">
                {data.products && data.products.map((product) => (
                    <Product product={product}/>
                ))}
            </div>
        </Base>
    );
}