import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import CartContext from "../context/Cart";


export default function Base({children}) {
    const navigate = useNavigate();
    const [cart] = useContext(CartContext);

 return(
     <div className="app">
         <header className="p-10 flex items-center justify-between">
             <span className="text-2xl font-bold">IM23b</span>
             <input
                 type="text"
                 placeholder="Search..."
                 className="p-2 border border-gray-300 rounded"
                 onClick={()=>{navigate(`/search`)}}
             />
             <nav className="flex items-center justify-between gap-5">
                 <Link to="/">Home</Link>
                 <Link to="/products">Products</Link>
                 <Link to="/contact">Contact</Link>
                 <Link to="/About">About Us</Link>
                 <Link to="/warenkorb">Warenkorb ({cart.length})</Link>
             </nav>
         </header>
         <main className="p-10">
             {children}
         </main>
     </div>
 )
}