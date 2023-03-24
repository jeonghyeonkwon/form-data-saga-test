import React from "react";
import styled from "styled-components";

const UploadForm = styled.div`
  width: 90%;
  height: 80px;

  display: flex;
  overflow: hidden;
  margin-bottom: 20px;
  border-radius: 10px;
`;
const TitleForm = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px 20px;
  background-color: gray;
  vertical-align: middle;
  display: flex;
  align-items: center;
  transition: 0.4s;
  &:hover {
    background-color: #544f4f;
  }
  h4 {
    color: white;
    font-size: 20px;
    width: 100%;
  }
`;
const DeleteForm = styled.div`
  height: 100%;
  background-color: crimson;
  width: 120px;
  padding: 20px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;
  &:hover {
    background-color: #910521;
  }
`;
function UploadComponent({ data, onClickDelete }) {
  return (
    <UploadForm>
      <TitleForm>
        <h4>{data.title}</h4>
      </TitleForm>
      <DeleteForm onClick={() => onClickDelete(data.uid)}>
        <span>삭제하기</span>
      </DeleteForm>
    </UploadForm>
  );
}

export default UploadComponent;
