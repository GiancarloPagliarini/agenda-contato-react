import styled from "styled-components";

export const CardContato = styled.div`
  display: block;
  width: 100%;
  padding: 16px;
  margin-bottom: 24px;
  background-color: rgb(245, 246, 250);
  box-shadow: rgba(0, 0, 0, 0.35) 1px 2px 3px;
  border-radius: 6px;

  img {
    width: 48px;
    height: 48px;
  }
`;

export const ContainerStatus = styled.div`
  display: flex;
  align-items: center;

  ul {
    padding-left: 24px;

    li {
      line-height: 22px;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;
