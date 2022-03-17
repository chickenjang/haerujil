import styled from "styled-components";

function Button({ purpose }) {
  return (
    <div>
      {purpose === "이동" ? (
        <Move>새 글 작성</Move>
      ) : purpose === "제출" ? (
        <Submit>제출</Submit>
      ) : (
        <div>그럼뭐야</div>
      )}
    </div>
  );
}

export default Button;

const Move = styled.button`
  position: absolute;
  bottom: 100px;
  width: 100px;
  height: 40px;
`;

const Submit = styled.button`
  width: 50px;
  height: 40px;
`;
