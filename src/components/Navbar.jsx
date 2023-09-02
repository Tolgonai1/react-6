import "../App.css"
import {NavLink} from "react-router-dom";

export function Navbar(){
    return (
        <>
           <nav>
               <ul>
                   <li className="navbar-item">
                       <NavLink to="/">Товары</NavLink>
                   </li>
                   <li className="navbar-item">
                       <NavLink to="/cart">Корзина </NavLink>
                   </li>
               </ul>
           </nav>
        </>
    )
}