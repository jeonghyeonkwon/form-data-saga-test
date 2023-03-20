import React from "react";
import styled from "styled-components";

const UploadForm = styled.div`
  width: 90%;
  height: 100px;
  background-color: dodgerblue;
  margin: 20px 0px;
`;
const TitleForm = styled.div``;
function UploadComponent({ data, onClickDelete }) {
  return (
    <UploadForm>
      <TitleForm>{data.title}</TitleForm>
    </UploadForm>
  );
}

export default UploadComponent;
