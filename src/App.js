import { Route, Routes } from "react-router-dom";
import AddShoe from "./Pages/AddShoe/AddShoe";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Blog from "./Pages/Blog/Blog";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import MyItems from "./Pages/MyItems/MyItems";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import UpdateQuantity from "./Pages/UpdateQuantity/UpdateQuantity";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/product/:productID" element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>
        }></Route>
        <Route path="/allproducts" element={
          <RequireAuth>
            <AllProducts></AllProducts>
          </RequireAuth>
        }></Route>
        <Route path="/myitems" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path="/addshoe" element={
          <RequireAuth>
            <AddShoe></AddShoe>
          </RequireAuth>
        }></Route>
        <Route path="/updatequantity/:productID" element={
          <RequireAuth>
            <UpdateQuantity></UpdateQuantity>
          </RequireAuth>
        }></Route>
        
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer> 
    </div>
  );
}

export default App;
