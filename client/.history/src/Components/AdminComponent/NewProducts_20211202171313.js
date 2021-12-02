import React from "react";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
import { TopBar, SidebarAdmins, NewProducts } from "../../Imports/Index";

const NewProducts = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <NewProducts />
      </div>
    </>
  );
};

export default NewProducts;
