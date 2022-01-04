import React from "react";
import styled from "styled-components";
import { categories } from "../../pages/Data";
import { mobile } from "../../Responsive";
import CatagoryItem from "./CatagoryItem";
const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column", marginTop: "15px" })}
`;

const Catagory = () => {
  return (
    <Container>
      {categories.map((item, index) => (
        <CatagoryItem key={index} item={item} />
      ))}
    </Container>
  );
};

export default Catagory;
