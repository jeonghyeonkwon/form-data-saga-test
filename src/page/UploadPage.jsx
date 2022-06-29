import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import UploadComponent from "../components/UploadComponent";
import { changeField, changeFiles, fetchBoard } from "../modules/upload";
const UploadPageForm = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UploadForm = styled.div`
  width: 60%;
  height: 400px;
  padding: 10px;
  overflow: scroll;
  z-index: -1;
  /* display: grid; */

  background-color: grey;
`;
const UploadTitleForm = styled.div`
  width: 60%;
  display: block;
  /* text-align: center; */

  padding: 40px 0px;
`;
const UploadTitleLabel = styled.label`
  display: block;
  text-align: left;
  font-size: 25px;
`;
const UploadTitleField = styled.input`
  width: 80%;
  height: 30px;

  border: 2px solid dodgerblue;
  border-radius: 10px;
`;
const UploadBtnForm = styled.div`
  padding: 10px 0px;
  width: 60%;
  display: block;
  text-align: left;
`;
const UploadBtn = styled.button`
  font-size: 26px;
  background-color: dodgerblue;
  color: #fff;
  border: 2px solid dodgerblue;
  border-radius: 5px;
`;
function UploadPage(props) {
  const dispatch = useDispatch();
  const { title, files } = useSelector(({ upload }) => ({
    title: upload.boardForm.title,
    files: upload.boardForm.files,
  }));
  const onDrop = (file) => {
    console.log(file);
    file.forEach((img) => {
      console.log(img);
      dispatch(
        changeField({
          key: "files",
          value: img,
        })
      );
    });
  };

  useEffect(() => {
    console.log("effect");
    console.log(files);
  }, [files]);
  const onChangeField = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    dispatch(
      changeField({
        key: name,
        value,
      })
    );
  };
  const onClickUpload = () => {
    const frm = new FormData();
    frm.append("title", title);
    files.forEach((img, index) => {
      frm.append(`file[${index}]`, img);
    });
    dispatch(fetchBoard({ form: frm }));
  };
  const onClickDelete = (e) => {
    const { name } = e.target;
    console.log(name);
    console.log(files);
    const changeFileArray = files.filter(
      (img) => img.lastModified !== Number(name)
    );

    dispatch(changeFiles({ files: changeFileArray }));
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  return (
    <UploadPageForm>
      <UploadForm {...getRootProps()}>
        <input name="files" {...getInputProps()} />
        {files.map((image) => (
          <UploadComponent
            {...getRootProps({ disabled: true })}
            key={image.lastModified}
            image={image}
            onClickDelete={onClickDelete}
          />
        ))}
      </UploadForm>
      <UploadTitleForm>
        <UploadTitleLabel>게시글 제목</UploadTitleLabel>
        <UploadTitleField name="title" value={title} onChange={onChangeField} />
      </UploadTitleForm>
      <UploadBtnForm>
        <UploadBtn onClick={onClickUpload}>업로드 하기</UploadBtn>
      </UploadBtnForm>
    </UploadPageForm>
  );
}

export default UploadPage;
