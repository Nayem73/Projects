import { useEffect, useState } from "react";

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

  console.log(images);

  return (
    <div>
      {/* {images.length > 0 &&
        images.map((image) => (
          <img
            key={image.id}
            src={image.download_url}
            alt={image.author}
            style={{
              display: currentSlide === image.id ? "block" : "none",
              width: "100%",
              height: "auto",
            }}
          />
        ))} */}

      {images.length > 0 &&
        images.map((image) => {
          console.log(`Image ID: ${image.id}, Current Slide: ${currentSlide}`);
          return (
            <img
              key={image.id}
              src={image.download_url}
              alt={image.author}
              // style={{
              //   display: currentSlide === image.id ? "block" : "none",
              //   width: "100%",
              //   height: "auto",
              // }}
            />
          );
        })}
    </div>
  );
};

export default ImageSlider;
