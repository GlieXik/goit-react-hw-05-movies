import { Box } from "../../utils/Box";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
const NavStyled = styled(NavLink)`
  margin: 0 50px;
  color: white;
  font-size: 20px;
  font-weight: 500;
`;
const Layout = () => {
  return (
    <>
      <Box as="nav" backgroundColor="primary" p={4}>
        <NavStyled to="/">Home</NavStyled>
        <NavStyled to="/movies">Movies</NavStyled>
      </Box>
      <Box as="main" p={4}>
        <Outlet />
      </Box>
    </>
  );
};
export default Layout;
