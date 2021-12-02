import React from "react";
import { DataGrid } from "../../Imports/Index";
const UserList = ({ data, columns }) => {
  return (
    <>
      <div className="userList">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default UserList;
