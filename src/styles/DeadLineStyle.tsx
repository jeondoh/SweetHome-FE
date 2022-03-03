import styled from "styled-components";

/* Wrapper */
export const DeadLineWrapper = styled.div`
  height: 35.625rem;
`;
/* Wrapper */
export const DeadLineCardWrapper = styled.div`
  height: 26.563rem;
`;
/* 마감 임박 Grid wrapper */
export const DeadLineCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
/* FLEX */
export const DeadLineListFlex = styled.div`
  display: flex;
  align-items: center;
  img {
    display: block;
    width: 16.875rem;
    height: 12.5rem;
  }
  div {
    margin-left: 0.5em;
  }
  .deathLineInfo {
    margin-top: 1.429em;
    font-size: 0.875rem;
  }
  .deathLineTime {
    border: 1px solid #fff;
    border-radius: 1.4em;
    padding: 0.3em 0.6em;
    background-color: ${(props) => props.theme.greenColor.green3};
    margin-right: 0.5em;
  }
`;
