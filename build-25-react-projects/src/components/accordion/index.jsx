import { useState } from "react";
import data from "./data";
import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelect, setMultiSelect] = useState([]);
  const [isMultiSelect, setIsMultiSelect] = useState(false);

  const handleSingleClick = (dataItemId) => {
    selected === dataItemId ? setSelected(null) : setSelected(dataItemId);
    console.log(dataItemId);
  };

  const handleMultiClick = (dataItemId) => {
    if (multiSelect.includes(dataItemId)) {
      setMultiSelect(multiSelect.filter((id) => id !== dataItemId));
    } else {
      setMultiSelect([...multiSelect, dataItemId]);
    }
    console.log(multiSelect);
  };

  const toggleClick = () => {
    setIsMultiSelect(!isMultiSelect);
  };

  return (
    <div className="wrapper">
      <button onClick={toggleClick}>
        {isMultiSelect ? "Multi-select" : "Single-select"}
      </button>
      {data && data.length > 0 ? (
        isMultiSelect ? (
          data.map((dataItem) => (
            <div key={dataItem.id}>
              <div
                className="title"
                onClick={() => handleMultiClick(dataItem.id)}
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {multiSelect.includes(dataItem.id) && (
                <div className="content">
                  <p>{dataItem.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          data.map((dataItem) => (
            <div key={dataItem.id}>
              <div
                className="title"
                onClick={() => handleSingleClick(dataItem.id)}
              >
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
        )
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default Accordion;
