import styled from "styled-components";
import ShowTime from "./ShowTime";

function ReadCreatedAt({ createdAt }) {
  return (
    <div>
      <Legend>작성시간</Legend>
      <Content>
        <ShowTime createdAt={createdAt} />
      </Content>
    </div>
  );
}

export default ReadCreatedAt;

const Legend = styled.div`
  color: red;
`;

const Content = styled.div`
  color: blue;
`;
