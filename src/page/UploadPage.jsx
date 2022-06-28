import React from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import UploadComponent from "../components/UploadComponent";
const UploadPageForm = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UploadForm = styled.div`
  width: 60%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: dodgerblue;
`;
function UploadPage(props) {
  const onDrop = (file) => {
    console.log(file);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <UploadPageForm {...getRootProps()}>
      <UploadForm>
        <input {...getInputProps()} />
        <UploadComponent></UploadComponent>
      </UploadForm>
    </UploadPageForm>
  );
}

export default UploadPage;
