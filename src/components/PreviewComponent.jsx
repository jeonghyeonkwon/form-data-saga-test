import React from "react";
import styled from "styled-components";

const PreviewForm = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
`;
const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
`;
const DeleteBtn = styled.span`
  position: absolute;
  display: inline-block;
  background-color: crimson;
  color: white;
  text-align: center;
  top: 0%;
  right: 0%;
  transform: translate(50%, -50%);
  width: 50px;
  height: 25px;
  line-height: 25px;
  padding: 0px 5px;
  border-radius: 5px;
  transition: 0.4s;
  cursor: pointer;
  z-index: 9999;
  &:hover {
    background-color: #b30707;
  }
`;
const Title = styled.p`
  /* background-color: dodgerblue; */
  height: 30px;
`;
const PreviewComponent = ({ data, onClickDelete }) => {
  return (
    <PreviewForm onClick={() => onClickDelete(data.title)}>
      <PreviewImg src={data.url} />
      <DeleteBtn>삭제</DeleteBtn>
      <Title>{data.title}</Title>
    </PreviewForm>
  );
};

export default PreviewComponent;
