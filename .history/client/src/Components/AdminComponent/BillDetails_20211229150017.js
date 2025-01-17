import React from "react";
import { TopBar, SidebarAdmins, BillDetail } from "../../Imports/Index";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
const BillDetails = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <Payment />
      </div>
    </>
  );
};

export default BillDetails;
