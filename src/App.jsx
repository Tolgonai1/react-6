
import './App.css'
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout.jsx";
import {ProductsPage} from "./pages/ProductsPage.jsx";
import {CartPage} from "./pages/CartPage.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<ProductsPage/>}/>
          <Route path='cart' element={<CartPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
