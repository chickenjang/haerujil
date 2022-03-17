import { useSelector } from "react-redux";
import styled from "styled-components";

function WriteAuthor() {
  const name = useSelector((state) => state.name);
  return (
    <div>
      <Legend>작성자</Legend>
      <Input type="text" name="author" value={name} readOnly />
    </div>
  );
}

export default WriteAuthor;

const Legend = styled.div`
  color: red;
`;

const Input = styled.input`
  background-color: yellow;
`;
