import styled from "styled-components";

function WriteBody() {
  return (
    <div>
      <Legend>내용</Legend>
      <Input name="body"></Input>
    </div>
  );
}

export default WriteBody;

const Legend = styled.div`
  color: red;
`;

const Input = styled.textarea`
  background-color: yellow;
`;
