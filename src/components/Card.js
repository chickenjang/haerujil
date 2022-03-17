import Api from "../utils/Api";
import styled from "styled-components";
import ShowTime from "./ShowTime";

function Card({ page }) {
  let api;
  if (page !== "tools" || "info") {
    api = Api(page);
  }

  function handleClick(event) {
    console.log(event.currentTarget);
  }

  return (
    <CardContainer onClick={handleClick}>
      {api &&
        api.map(({ _id, title, author, createdAt }) => {
          return (
            <CardItem key={_id}>
              <div>{title}</div>
              <div>{author}</div>
              <ShowTime createdAt={createdAt} />
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
