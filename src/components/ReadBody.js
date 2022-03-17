import styled from "styled-components";

function ReadBody({ body }) {
  return (
    <div>
      <Legend>내용</Legend>
      <Content>{body}</Content>
    </div>
  );
}

export default ReadBody;

const Legend = styled.div`
  color: red;
`;

const Content = styled.div`
  color: blue;
`;
