import styled from "styled-components";

function ReadAuthor({ author }) {
  return (
    <div>
      <Legend>작성자</Legend>
      <Content>{author}</Content>
    </div>
  );
}

export default ReadAuthor;

const Legend = styled.div`
  color: red;
`;

const Content = styled.div`
  color: blue;
`;
