import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (url) => {
    try {
      setLoading(true);

      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data.slice(0, limit));
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMessage !== null) {
    return <div>Error occured: {errorMessage}</div>;
  }

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  console.log(images);

  return (
    <div>
      <BsArrowLeftCircleFill onClick={handlePrevious} />
      {images &&
        images.length > 0 &&
        images.map((image, index) => (
          <img
            key={image.id}
            src={image.download_url}
            alt={image.author}
            style={{
              display: currentSlide === index ? "block" : "none",
              width: "100%",
              height: "auto",
              marginBottom: "10px",
            }}
          />
        ))}
      <BsArrowRightCircleFill onClick={handleNext} />
      <span className="circle-indicators">
        {images &&
          images.length > 0 &&
          images.map((_, index) => (
            <button key={index} className="current-indicator" />
          ))}
      </span>
    </div>
  );
};

export default ImageSlider;
