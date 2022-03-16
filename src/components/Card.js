import Api from "../utils/Api";
import styled from "styled-components";

function Card({ page }) {
  let api;
  if (page !== "tools" || "info") {
    api = Api(page);
  }
  return (
    <CardContainer>
      {api &&
        api.map(({ _id, title, author, createdAt }) => {
          return (
            <CardItem key={_id}>
              <div>{title}</div>
              <div>{author}</div>
              <div>{createdAt}</div>
            </CardItem>
          );
        })}
    </CardContainer>
  );
}
export default Card;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardItem = styled.div`
  outline: 1px solid black;
`;
