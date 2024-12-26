import React from "react";
import MenuList from "./menu-list";

const MenuItem = ({ data }) => {
  return (
    <div>
      <li>
        {data.map((item, index) => (
          <div key={index}>
            <div>label: {item.label}</div>
            <div>to: {item.to}</div>
            <div>{item.children && <MenuList data={item.children} />}</div>
          </div>
        ))}
      </li>
    </div>
  );
};

export default MenuItem;
