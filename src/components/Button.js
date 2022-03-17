import styled from "styled-components";

function Button({ size, text, onClick }) {
  return (
    <div>
      {size === "large" ? (
        <Large onClick={onClick}>{text}</Large>
      ) : size === "small" ? (
        <Small onClick={onClick}>{text}</Small>
      ) : (
        <div>그럼뭐야</div>
      )}
    </div>
  );
}

export default Button;

const Large = styled.button`
  position: absolute;
  bottom: 100px;
  width: 100px;
  height: 40px;
`;

const Small = styled.button`
  width: 50px;
  height: 40px;
`;
