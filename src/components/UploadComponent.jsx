import React from "react";
import styled from "styled-components";

const UploadForm = styled.div`
  width: 90%;
  height: 300px;
  background-color: dodgerblue;

  display: flex;
  overflow: hidden;

  border-radius: 10px;
`;
const TitleForm = styled.div`
  height: 100%;
  width: 100%;

  background-color: gray;
`;
const DeleteForm = styled.div`
  height: 100%;
  background-color: crimson;
  width: 120px;
  padding: 20px;
  color: white;
  cursor: pointer;
`;
function UploadComponent({ data, onClickDelete }) {
  return (
    <UploadForm>
      <TitleForm>{data.title}</TitleForm>
      <DeleteForm onClick={() => onClickDelete(data.uid)}>삭제하기</DeleteForm>
    </UploadForm>
  );
}

export default UploadComponent;
