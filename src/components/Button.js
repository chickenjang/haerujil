import styled from "styled-components";
import { Link } from "react-router-dom";

function Button({ page }) {
  return (
    <Link to="create">
      <ButtonOne>새 글 작성</ButtonOne>
    </Link>
  );
}

export default Button;

const ButtonOne = styled.button`
  position: absolute;
  bottom: 100px;
  width: 100px;
  height: 40px;
`;
