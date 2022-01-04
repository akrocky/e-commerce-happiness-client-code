import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../pages/Data";
import { mobile } from "../../Responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  margin-top: 35px;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease-in;
  transform: translate(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 78px;
`;
const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImageContainer>
              <img src={item.img} alt="" />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>Show Now</Button>
            </InfoContainer>
          </Slide>
        ))}

        {/* <Slide bg="fcf1ed">
          <ImageContainer>
            <img src="https://i.ibb.co/cr7ZD4b/slider-image.png" alt="" />
          </ImageContainer>
          <InfoContainer>
            <Title>Winter Sale</Title>
            <Description>
              Don't compromise on style! Get flat 30% off for new arrival.
            </Description>
            <Button>Show Now</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fbf0f4">
          <ImageContainer>
            <img src="https://i.ibb.co/cr7ZD4b/slider-image.png" alt="" />
          </ImageContainer>
          <InfoContainer>
            <Title>Popular Sale</Title>
            <Description>
              Don't compromise on style! Get flat 30% off for new arrival.
            </Description>
            <Button>Show Now</Button>
          </InfoContainer>
        </Slide> */}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
