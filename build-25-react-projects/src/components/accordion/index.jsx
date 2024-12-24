import { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const handleClick = (dataItemId) => {
    selected === dataItemId ? setSelected(null) : setSelected(dataItemId);
    console.log(dataItemId);
  };
  return (
    <div>
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div key={dataItem.id}>
            <div className="title" onClick={() => handleClick(dataItem.id)}>
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            {selected === dataItem.id && (
              <div className="content">
                <p>{dataItem.answer}</p>
              </div>
            )}
          </div>
        ))
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default Accordion;
