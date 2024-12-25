import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 10 }) => {
  const [clicked, setClicked] = useState(0);
  const [hovered, setHovered] = useState(0);

  const handleClick = (index) => {
    setClicked(index);
  };

  const handleHover = (index) => {
    setHovered(index);
  };

  const handleLeave = () => {
    setClicked(clicked);
  };

  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => (
        <FaStar
          key={index}
          onClick={() => handleClick(index)}
          onMouseMove={() => handleHover(index)}
          onMouseLeave={() => handleLeave(index)}
          color={(hovered || clicked) >= index ? "yellow" : "gray"}
          size={40}
        />
      ))}
    </div>
  );
};

export default StarRating;
