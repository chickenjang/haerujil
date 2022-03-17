import styled from "styled-components";

function WriteTitle() {
  return (
    <div>
      <Legend>제목</Legend>
      <Input type="text" name="title"></Input>
    </div>
  );
}

export default WriteTitle;

const Legend = styled.div`
  color: red;
`;

const Input = styled.input`
  background-color: yellow;
`;
