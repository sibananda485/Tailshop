import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import OrderPage from "./Pages/OrderPage";
import PaymentPage from "./Pages/PaymentPage";
import WishlistPage from "./Pages/WishlistPage";
import CartPage from "./Pages/CartPage";
import NewAccountPage from "./Pages/NewAccountPage";
import DetailPage from "./Pages/DetailPage";
import LoginContext from "./Context/LoginContext";
import TostContext from "./Context/TostContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [wish, setWish] = useState([]);
  const [cart, setCart] = useState([]);
  const [history, setHistory] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [total, setTotal] = useState(cart.reduce((a, b) => a + b.price, 0));

  const notice = (mesg = "Default message",type) => {
    switch (type) {
      case "error":
        toast.error(mesg, {
          theme: "colored",
          position: "top-center",
        });

        break;
      case "info":
        toast.info(mesg, {
          theme: "colored",
          position: "top-center",
        });

        break;
      case "success":
        toast.success(mesg, {
          theme: "colored",
          position: "top-center",
        });

        break;
      case "warn":
        toast.warn(mesg, {
          theme: "colored",
          position: "top-center",
        });

        break;

      default:
        toast(mesg, {
          theme: "colored",
          position: "top-center",
        });

        break;
    }
  };

  return (
    <>
      <LoginContext.Provider value={isLogin}>
        <TostContext.Provider value={notice}>
          <div className="flex flex-col min-h-[140vh]">
            <BrowserRouter>
              <ToastContainer />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <HomePage></HomePage> <ToastContainer />{" "}
                    </>
                  }
                />
                <Route
                  path="login"
                  element={<LoginPage setLogin={setIsLogin} />}
                />
                <Route
                  path="order"
                  element={
                    <>
                      <OrderPage history={history} setHistory={setHistory} />{" "}
                    </>
                  }
                />
                <Route
                  path="payment"
                  element={
                    <PaymentPage
                      total={total}
                      setHistory={setHistory}
                      history={history}
                      cart={cart}
                      setCart={setCart}
                    />
                  }
                />
                <Route
                  path="wishlist"
                  element={<WishlistPage wish={wish} setWish={setWish} />}
                />
                <Route
                  path="cart"
                  element={
                    <CartPage
                      cart={cart}
                      setCart={setCart}
                      total={total}
                      setTotal={setTotal}
                    />
                  }
                />
                <Route path="newaccount" element={<NewAccountPage />} />
                <Route
                  path="detail/:id"
                  element={
                    <DetailPage
                      wish={wish}
                      setWish={setWish}
                      cart={cart}
                      setCart={setCart}
                    />
                  }
                />
                <Route path="*" element={<h1>Error</h1>} />
              </Routes>
            </BrowserRouter>
          </div>
        </TostContext.Provider>
      </LoginContext.Provider>
    </>
  );
}
