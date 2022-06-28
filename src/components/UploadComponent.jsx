import React from "react";
import styled from "styled-components";

const UploadComponentForm = styled.img`
  background-color: crimson;
  width: 150px;
  height: 150px;
`;
function UploadComponent(props) {
  return <UploadComponentForm></UploadComponentForm>;
}

export default UploadComponent;
