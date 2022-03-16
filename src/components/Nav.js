import { Link } from "react-router-dom";
import styled from "styled-components";
import trips from "../static/icon/trips.png";
import chats from "../static/icon/chats.png";
import tools from "../static/icon/tools.png";
import cooks from "../static/icon/cooks.png";
import info from "../static/icon/info.png";

function Nav() {
  return (
    <NavContainer>
      <Link to="/trips">
        <NavItem>
          <NavImg src={trips} alt="" />
          <span>조행기</span>
        </NavItem>
      </Link>
      <Link to="/chats">
        <NavItem>
          <NavImg src={chats} alt="" />
          <span>지역모임</span>
        </NavItem>
      </Link>
      <Link to="/tools">
        <NavItem>
          <NavImg src={tools} alt="" />
          <span>채비/장비</span>
        </NavItem>
      </Link>
      <Link to="/cooks">
        <NavItem>
          <NavImg src={cooks} alt="" />
          <span>요리법/손질법</span>
        </NavItem>
      </Link>
      <Link to="/info">
        <NavItem>
          <NavImg src={info} alt="" />
          <span>내정보</span>
        </NavItem>
      </Link>
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  background-color: white;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  color: red;
`;

const NavImg = styled.img`
  width: 2rem;
`;
