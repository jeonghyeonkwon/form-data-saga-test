import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import UploadComponent from "../components/UploadComponent";
import { changeField, changeFiles, fetchBoard } from "../modules/upload";
const UploadPageForm = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RegisterForm = styled.div`
  width: 80%;
`;
const InfoForm = styled.div`
  width: 100%;
  & h3 {
    font-size: 24px;
  }
  & input[type="text"],
  & textarea {
    margin-left: 20px;
    width: 50%;
    margin-bottom: 15px;
    border-radius: 10px;
    transition: 0.4s;
    border: 2px solid black;
    font-size: 20px;
    &:hover {
      border-color: dodgerblue;
    }
  }
  & input[type="text"] {
    padding-left: 10px;
    height: 35px;
  }
  & textarea {
    padding: 10px;
    height: 200px;
  }
`;

const UploadForm = styled.div`
  height: 400px;
  width: 60%;
  border-radius: 10px;

  border: 2px solid black;
  background-color: #f1f1f1;
  position: relative;
`;
const NoFileTitle = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 40px;
  font-weight: bold;
  transform: translate(-50%, -50%);
`;

function UploadPage(props) {
  const dispatch = useDispatch();
  const { title, files } = useSelector(({ upload }) => ({
    title: upload.boardForm.title,
    files: upload.boardForm.files,
  }));
  // const onDrop = (file) => {
  //   console.log(file);
  //   file.forEach((img) => {
  //     console.log(img);
  //     dispatch(
  //       changeField({
  //         key: "files",
  //         value: img,
  //       })
  //     );
  //   });
  // };

  // useEffect(() => {
  //   console.log("effect");
  //   console.log(files);
  // }, [files]);
  // const onChangeField = (e) => {
  //   const { name, value } = e.target;
  //   console.log(e.target);
  //   dispatch(
  //     changeField({
  //       key: name,
  //       value,
  //     })
  //   );
  // };
  // const onClickUpload = () => {
  //   const frm = new FormData();
  //   frm.append("title", title);
  //   files.forEach((img, index) => {
  //     frm.append(`file[${index}]`, img);
  //   });
  //   dispatch(fetchBoard({ form: frm }));
  // };
  // const onClickDelete = (e) => {
  //   const { name } = e.target;
  //   console.log(name);
  //   console.log(files);
  //   const changeFileArray = files.filter(
  //     (img) => img.lastModified !== Number(name)
  //   );

  //   dispatch(changeFiles({ files: changeFileArray }));
  // };
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({
  //   onDrop,
  // });
  return (
    <UploadPageForm>
      <RegisterForm>
        <InfoForm>
          <h3>타이틀</h3>
          <input type="text" />
        </InfoForm>
        <InfoForm>
          <h3>내용</h3>
          <textarea></textarea>
        </InfoForm>
        <UploadForm>
          <NoFileTitle>파일 끌어다 올리기</NoFileTitle>
        </UploadForm>
      </RegisterForm>
    </UploadPageForm>
  );
}

export default UploadPage;
