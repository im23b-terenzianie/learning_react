import './ProductList.css';
export default function ProductList() {
    return (
        <>
            <h1>Trending Products</h1>
            <ul className="Productlist">
                <li className="Product"><Product link="https://placehold.co/300x300" name="Leather Long Wallet" color="Natural"/><Price
                    price="75" currency="$"></Price></li>
                <li className="Product"><Product link="https://placehold.co/300x300" name="Machined Pencil and Pen Set"
                             color="Black"/><Price price="70" currency="$"/></li>
                <li className="Product"><Product link="https://placehold.co/300x300" name="Mini-Sketchbooks" color="Light Brown"/><Price
                    price="27" currency="$"/></li>
                <li className="Product"><Product link="https://placehold.co/300x300" name="Organizer Set" color="Walnut"/><Price
                    price="149" currency="$"/></li>
            </ul>
        </>
    );
};

function Product(props) {
    return (
        <>
            <img src={props.link} alt="A Product"/>
            <p>{props.name}</p>
            <p>{props.color}</p>
        </>
    );
}

function Price(props) {
    return (
        <>
            <b>{props.currency}{props.price}</b>
        </>
    )
}

