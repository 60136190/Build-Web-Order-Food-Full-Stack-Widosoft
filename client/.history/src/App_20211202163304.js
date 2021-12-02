import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import {
  NotFound,
  Loading,
  UserLists,
  Rating,
  ProductsAdmin,
  Users,
  NewUsers,
} from "./Imports/Index";
import {
  Home,
  FeedBack,
  ProductDetails,
  Authentication,
  Forget,
  Payment,
  Checkout,
  Admin,
} from "./Imports/LazyRouter";
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Authentication />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/users" element={<UserLists />} />
          <Route path="/user/:userId" element={<Users />} />
          <Route path="/newUser" element={<NewUsers />} />
          <Route path="/products" element={<ProductsAdmin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
