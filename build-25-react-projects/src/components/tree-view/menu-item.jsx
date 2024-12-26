import React from "react";

const MenuItem = ({ data }) => {
  return (
    <div>
      <li>
        {data.map((item, index) => (
          <div key={index}>
            <div>label: {item.label}</div>
            <div>to: {item.to}</div>
            <ul>{item.children && <MenuItem data={item.children} />}</ul>
          </div>
        ))}
      </li>
    </div>
  );
};

export default MenuItem;
