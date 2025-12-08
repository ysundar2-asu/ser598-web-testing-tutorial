import React, { useCallback, useEffect, useState } from "react";
import "./HomePage.scss";
import { Button, Drawer, Dropdown, Modal, Select } from "antd";
import { AUTH_USER_API, GET_PRODUCTS_API, PRODUCT_CATEGORIES } from "../../../constant";
import ProductCard from "../../ProductCard/ProductCard";

export default function HomePage() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(PRODUCT_CATEGORIES[0].value);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showCartDrawer, setShowCartDrawer] = useState(false);

  useEffect(() => {
    fetch(GET_PRODUCTS_API)
      .then((response) => response.json())
      .then((data) => {
        setProductList(data);
        setFilteredProductList(data);
      });
    
  }, []);

  const handleOnChange = useCallback((productCategory)=> {
    console.log(productCategory);
    if(productCategory === "all") {
      setFilteredProductList(productList);
    } else {
      const filteredList = productList.filter((product) => product.category === productCategory);
      setFilteredProductList(filteredList);
    }
    setSelectedCategory(productCategory);
  }, [productList, selectedCategory, setFilteredProductList, setSelectedCategory]);

  const handleLogin = useCallback(() => {
    setShowLoginModal(true);
  }, [setShowLoginModal]);

  const handleUserLogin = useCallback(() => {
    if(username !== "" && password !== "") {
      setShowLoginModal(false);
      fetch(AUTH_USER_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsUserLoggedIn(true);
      });
    }
  }, [username, password, setShowLoginModal]);
  return <div className="homePage">
    <div className="eCommerceHeader">
       <div className="leftSection">
        <span>ECommerce Website</span>
       </div>
       <div className="rightSection">
        {isUserLoggedIn ? <span>Welcome, Yashwanth</span> : <Button onClick={() => handleLogin()} className="loginButton">Login</Button>}
       <Button className="cartButton" onClick={() => setShowCartDrawer(true)}>Cart ({cartItems.length})</Button>
       </div>
    </div>
    <div className="eCommerceBody">
        <div className="filterSection">
          <span>Categories</span>
          <Select 
          defaultValue={PRODUCT_CATEGORIES[0].value}
          style={{width: "20rem"}}
          options={PRODUCT_CATEGORIES}
          onChange={handleOnChange}
          />
            
        </div>
        <div className="productList">
          {filteredProductList.map((product) => <ProductCard key={product.id} {...product} />)}
        </div>
    </div>
    <Modal title="Login" open={showLoginModal} onCancel={() => setShowLoginModal(false)} className="loginModal" footer={null}>
      <div className="loginModalContent">
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleUserLogin}>Login</Button>
      </div>
    </Modal>
    <Drawer
      title="Shopping Cart"
      open={showCartDrawer}
      onClose={() => setShowCartDrawer(false)}
      className="cartDrawer"
    >
      <div className="cartDrawerContent">
        {cartItems.length === 0 ? (
          <p className="emptyCart">Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cartItem">
              <img src={item.image} alt={item.title} />
              <div className="cartItemDetails">
                <span className="cartItemTitle">{item.title}</span>
                <span className="cartItemPrice">${item.price}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </Drawer>
  </div>;
}
