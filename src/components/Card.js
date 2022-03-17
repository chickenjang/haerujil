import Api from "../utils/Api";
import styled from "styled-components";
import ShowTime from "./ShowTime";
import { useNavigate } from "react-router-dom";

function Card({ page }) {
  const navigate = useNavigate();
  let api;
  if (page !== "tools" || "info") {
    api = Api(page);
  }

  function handleClick(event) {
    const id = event.currentTarget.id;
    navigate(`${id}`);
  }

  return (
    <CardContainer>
      {api &&
        api.map(({ _id, title, author, createdAt }) => {
          return (
            <CardItem key={_id} onClick={handleClick} id={_id}>
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
