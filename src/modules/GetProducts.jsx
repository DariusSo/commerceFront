import { getCookie } from "./Cookies";

export const fetchProducts = async (setProducts) => {
    try {
      const headers = { 'Authorization': 'Bearer' + getCookie("loggedIn") };
      const response = await fetch('http://localhost:8080/products', { headers });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      
    }
  };
  export default fetchProducts;