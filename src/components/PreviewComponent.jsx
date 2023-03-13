import React from "react";
import styled from "styled-components";

const PreviewForm = styled.div`
  width: 100px;
  height: 100px;
`;
const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
`;
const PreviewComponent = () => {
  return (
    <PreviewForm>
      <PreviewImg src="http://via.placeholder.com/640x480 " />
    </PreviewForm>
  );
};

export default PreviewComponent;
