import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../Responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: ceneter;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;

  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const Menu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart?.quantity);
  const user = useSelector((state) => state?.user?.currentUser);
  console.log(user);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "gray", fontSize: "15px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <NavLink to="/home">Happiness</NavLink>
          </Logo>
        </Center>
        <Right>
          <Menu>{user && <span>Hi! {user.username}</span>}</Menu>
          <Menu>{!user && <NavLink to="/register">Register</NavLink>}</Menu>

          <Menu>{!user && <NavLink to="/login">Login</NavLink>}</Menu>
          <Menu>
            <Link to="/cart">
              <Badge badgeContent={quantity ? quantity : 0} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
