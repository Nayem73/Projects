import { useState } from "react";

const MenuItem = ({ data }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState(false);

  const handleToggleChildren = (label) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [label]: !displayCurrentChildren[label],
    });
  };

  return (
    <div>
      <li>
        {data.map((item, index) => (
          <div key={index}>
            <div>{item.label}</div>
            <span onClick={() => handleToggleChildren(item.label)}>+</span>
            <ul>
              {item && item.children && displayCurrentChildren[item.label] && (
                <MenuItem data={item.children} />
              )}
            </ul>
          </div>
        ))}
      </li>
    </div>
  );
};

export default MenuItem;
