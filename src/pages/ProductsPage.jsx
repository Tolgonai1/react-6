import "../App.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "../store/productsReducer.js";

export function ProductsPage(){
    const products = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    return (
        <div className="product-wrapper">
            <ol className="product-list">
                {products.map((product) => (
                    <li key={product.id} className="product-item">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>Price: <b>{product.price}</b></p>
                    </li>
                ))}
            </ol>
        </div>
    )
}