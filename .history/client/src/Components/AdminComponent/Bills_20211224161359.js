import React from "react";
import { TopBar, SidebarAdmins, Bills } from "../../Imports/Index";
import { GlobalStyleAmin } from "../../GlobalStyleAmin";
const Bills = () => {
  return (
    <>
      <GlobalStyleAmin />
      <TopBar />
      <div className="container">
        <SidebarAdmins />
        <Bill />
      </div>
    </>
  );
};

export default Bills;
