import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import AnnounceMent from "../Components/AnnounceMent/AnnounceMent";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Nabvar/Navbar";
import Newsletter from "../Components/Newsletter/Newsletter";
import { mobile } from "../Responsive";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 300;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
`;
const FilterOption = styled.option`
  padding: 10px;
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;

  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  height: 30px;
  width: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <br />
      <AnnounceMent />
      <Wrapper>
        <ImgContainer>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQja9IhgIVmwQqG3F4a478RGi1WGsRFno83uQ&usqp=CAU" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            The elastic material of the durable slim-fit jeans provides
            incredibly pleasant wearing comfort and pure freedom of movement.
            Perfectly crafted with a fine sense of detail, these men’s jeans
            from Wotega equip men for any day-to-day situation. Tight-fitting,
            yet not overly so, and super comfortable on the skin, these stylish
            men’s jeans have an ultra modern appearance and look unbelievably
            casual. A real favourite for relaxed looks{" "}
          </Desc>
          <Price>20€</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size:</FilterTitle>
              <FilterSize>
                <FilterOption>XS</FilterOption>
                <FilterOption>S</FilterOption>
                <FilterOption>M</FilterOption>
                <FilterOption>L</FilterOption>
                <FilterOption>XL</FilterOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
