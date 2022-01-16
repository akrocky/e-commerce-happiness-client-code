import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {
        setError(err);
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilterProducts(
        products?.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (filterProducts?.length) {
      if (sort === "newest") {
        setFilterProducts((prev) =>
          [...prev].sort((a, b) => {
            return a.createdAt - b.createdAt;
          })
        );
      } else if (sort === "asc") {
        setFilterProducts((prev) =>
          [...prev].sort((a, b) => {
            return a.price - b.price;
          })
        );
      } else {
        setFilterProducts((prev) =>
          [...prev].sort((a, b) => {
            return b.price - a.price;
          })
        );
      }
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filterProducts?.map((item) => <Product key={item._id} item={item} />)
        : products?.map((item) => <Product key={item._id} item={item} />)}

      {!filterProducts?.length && (
        <span style={{ color: "red", textAlign: "center" }}>
          sorry! this item not available
        </span>
      )}
    </Container>
  );
};

export default Products;
