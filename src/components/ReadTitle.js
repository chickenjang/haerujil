import styled from "styled-components";

function ReadTitle({ title }) {
  return (
    <div>
      <Legend>제목</Legend>
      <Content>{title}</Content>
    </div>
  );
}

export default ReadTitle;

const Legend = styled.div`
  color: red;
`;

const Content = styled.div`
  color: blue;
`;
