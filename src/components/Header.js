import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";

const Sheader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 900;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  li {
    margin-left: 48px;
    font-size: 24px;
    font-weight: 600;
  }
`;

export const Header = () => {
  return (
    <Sheader>
      <Logo>
        <Link to={routes.home}> ExamMovie </Link>
      </Logo>

      <Menu>
        <li>
          <Link to={routes.home}> HOME </Link>
        </li>
        <li>
          <Link to={routes.search}> Search </Link>
        </li>
      </Menu>
    </Sheader>
  );
};
