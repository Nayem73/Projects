import React from "react";
import MenuItem from "./menu-item";

const MenuList = ({ data }) => {
  return (
    <div>
      <ul>
        <MenuItem data={data} />
      </ul>
    </div>
  );
};

export default MenuList;
