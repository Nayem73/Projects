import { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div>
      {data && data.length > 0 ? (
        data.map((dataItem, index) => (
          <div key={index}>
            <h3>{dataItem.question}</h3>
            {console.log(dataItem.question)}
          </div>
        ))
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default Accordion;
