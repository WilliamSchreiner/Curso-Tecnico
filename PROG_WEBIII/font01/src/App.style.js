import styled from "styled-components";

//stylização
export const List = styled.div`
  display: flex;
  flex: 1;
`;
export const Box = styled.div`
  margin-left: 3rem;

  width: 200px;
  height: 300px;

  background-color: #ffffff;
  box-shadow: 5px 5px 15px #6d656e;

  border: 2px solid #3f3f3f;
  border-radius: 15px;

  p {
    font-size: 20px;
    color: #000000;
  }
`;

export const Butao = styled.div`
  button {
    border-radius: 10px;

    background-color: #6d656e;

    width: 80px;
    height: 40px;

    padding-top: 5px;
    margin-top: 20px;

    &:hover {
      box-shadow: 5px 5px 9px #6d656e;
    }

    &:focus {
      border-color: gray;
    }
  }
`;
