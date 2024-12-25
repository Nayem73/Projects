import { useEffect, useState } from "react";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${count * 20}`
        );
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch {
        setErrorMessage("Failed to fetch");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: "100px", height: "auto" }}
            />
          </div>
        ))}
    </div>
  );
};
export default LoadMoreData;
