import data from "./data";
import MenuList from "./menu-list";

console.log(data);

const TreeView = () => {
  return (
    <div>
      <MenuList data={data} />
    </div>
  );
};

export default TreeView;
