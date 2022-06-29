import React from "react";
import styled from "styled-components";

const UploadComponentForm = styled.div`
  margin: 5px;
  background-color: yellow;
  padding: 0px;
  overflow: hidden;
  display: flex;
  width: 95%;
  height: 100px;
  /* height: 150px; */
  z-index: 9999;
`;
const UploadFileName = styled.div`
  width: 90%;
  background-color: green;
  display: inline-block;
  height: 100%;
  padding: 20px;
  color: white;
  font-size: 26px;
`;
const UploadFileClose = styled.button`
  width: 10%;
  background-color: crimson;
  margin-top: 0;
  border: none;
  height: 100%;
  color: white;
  font-size: 18px;
`;
function UploadComponent({ image, onClickDelete }) {
  return (
    <UploadComponentForm>
      <UploadFileName>
        <label>파일 명 : </label>
        <span>{image.name}</span>
      </UploadFileName>
      <UploadFileClose onClick={onClickDelete} name={image.lastModified}>
        삭제하기
      </UploadFileClose>
    </UploadComponentForm>
  );
}

export default UploadComponent;
