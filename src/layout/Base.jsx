import {Link} from "react-router-dom";

export default function Base({children}) {
 return(
     <div className="app">
         <header className="p-10 flex items-center justify-between">
             <span className="text-2xl font-bold">IM23b</span>
             <nav className="flex items-center justify-between gap-5">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/contact">Contact</Link>
                 <Link to="/About">About Us</Link>
             </nav>
            </header>
            <main className="p-10">
                {children}
            </main>
        </div>
 )
}