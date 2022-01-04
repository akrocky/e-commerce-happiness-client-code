import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  color: white;
`;

const AnnounceMent = () => {
  return <Container>Super Deal! Free shipping on orders over $60</Container>;
};

export default AnnounceMent;
