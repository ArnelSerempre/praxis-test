import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  /** States */
  const [products, setProducts] = useState<any>({});
  const [width, setWidth] = useState<number>(window.innerWidth);

  /** Handlers */
  const getAssets = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL_API}/products/get-assets`)
      .then((res: any) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAssets();
  }, []);

  // Listeners
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return {
    products,
    width,
  };
};

export default useProducts;
